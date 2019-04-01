using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.WindowsAzure.Storage.Auth;
using NidamTech.Services.EmailService;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AspNetCore.Identity.SQLServer;
using Piranha.AttributeBuilder;
using Piranha.Extend.Blocks;
using NidamTech.Services.EmailService.Interfaces;
using Web.Models.Pages;
using Web.Models.Blocks;
using Web.Models.Data;
using Web.Models.Sites;

namespace Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(config =>
            {
                config.ModelBinderProviders.Insert(0, new Piranha.Manager.Binders.AbstractModelBinderProvider());
            });
            services.AddSingleton<IEmailConfiguration>(Configuration.GetSection("EmailConfiguration")
                .Get<EmailConfiguration>());
            services.AddTransient<IEmailService, EmailService>();
            services.AddPiranhaApplication();
            services.AddPiranhaImageSharp();
            var appSettings = Configuration.GetSection("AppSettings").Get<AppSettings>();
            if (appSettings.UseLocalDB)
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlite("Filename=./piranha.db"));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite("Filename=./piranha.db"));
            }
            else
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("default")));
                services.AddPiranhaIdentityWithSeed<IdentitySQLServerDb>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("default")));
            }

            services.AddPiranhaManager();
            services.AddPiranhaSimpleCache();
            if (appSettings.UseAzureStorage)
            {
                var az = appSettings.AzureStorage;
                var creds = new StorageCredentials(az.StorageName, az.StorageKey);
                services.AddPiranhaBlobStorage(creds);
            }
            else
            {
                services.AddPiranhaFileStorage();
            }

            return services.BuildServiceProvider();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            App.Init(api);

            CreateMenuGroups();
            AddMenuItems();

            App.CacheLevel = Piranha.Cache.CacheLevel.Basic;

            RegisterBlocks();
            UnregisterBlocks();

            RegisterSelects();

            BuildSiteTypes(api);
            BuildPageTypes(api);

            RegisterMiddleware(app);
        }

        private void RegisterSelects()
        {
            App.Fields.RegisterSelect<Theme>();
            App.Fields.RegisterSelect<BootstrapBreakpoint>();
        }


        private void RegisterMiddleware(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UsePiranha();
            app.UsePiranhaApplication();
            app.UsePiranhaManager();
            app.UseMvc(routes =>
            {
                routes.MapRoute("areaRoute",
                    "{area:exists}/{controller}/{action}/{id?}",
                    new {controller = "Home", action = "Index"});

                routes.MapRoute(
                    "default",
                    "{controller=home}/{action=index}/{id?}");
            });
        }

        private void BuildSiteTypes(IApi api)
        {
            var siteTypeBuilder = new SiteTypeBuilder(api)
                .AddType(typeof(DefaultSite));
            siteTypeBuilder.Build();
        }

        private void BuildPageTypes(IApi api)
        {
            var pageTypeBuilder = new PageTypeBuilder(api)
                .AddType(typeof(StandardPage))
                .AddType(typeof(StartPage));
            pageTypeBuilder.Build()
                .DeleteOrphans();
        }

        private void CreateMenuGroups()
        {
        }

        private void AddMenuItems()
        {
        }

        private void RegisterBlocks()
        {
            App.Blocks.Register<HeroImageBlock>();
            App.Blocks.Register<MarkdownTextBlock>();
            App.Blocks.Register<TwoColumnBlockGroup>();
        }

        private void UnregisterBlocks()
        {
            App.Blocks.UnRegister<HtmlColumnBlock>();
        }
    }
}