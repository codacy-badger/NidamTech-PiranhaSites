using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.WindowsAzure.Storage.Auth;
using nidam_corp.Models.Data;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AttributeBuilder;
using sundhedmedalette.Models.Blocks;

namespace nidam_corp
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public IOptions<AppSettings> settings;

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
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.AddPiranhaApplication();
            services.AddPiranhaImageSharp();
            if (settings.Value.UseLocalDB)
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlite("Filename=./piranha.db"));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite("Filename=./piranha.db"));
            }
            else
            {
                services.AddPiranhaEF(opts => { opts.UseSqlServer(Configuration.GetConnectionString("default")); });
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(opts =>
                {
                    opts.UseSqlServer(Configuration.GetConnectionString("default"));
                });
            }

            services.AddPiranhaManager();
            services.AddPiranhaSimpleCache();
            if (settings.Value.UseAzureStorage)
            {
                var az = settings.Value.AzureStorage;
                var creds = new StorageCredentials(az.StorageName, az.StorageKey);
                services.AddPiranhaBlobStorage(creds, az.ContainerName);
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

            App.Init();

            CreateMenuGroups();
            AddMenuItems();

            App.CacheLevel = Piranha.Cache.CacheLevel.Basic;

            RegisterBlocks();
            UnregisterBlocks();

            RegisterSelects();

            BuildSiteTypes(api);
            BuildPageTypes(api);
            BuildPostTypes(api);

            RegisterMiddleware(app);
        }

        private void RegisterSelects()
        {
            App.Fields.RegisterSelect<Theme>();
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
                routes.MapRoute(name: "areaRoute",
                    template: "{area:exists}/{controller}/{action}/{id?}",
                    defaults: new {controller = "Home", action = "Index"});

                routes.MapRoute(
                    name: "default",
                    template: "{controller=home}/{action=index}/{id?}");
            });
        }

        private void BuildSiteTypes(IApi api)
        {
            var siteTypeBuilder = new SiteTypeBuilder(api)
                .AddType(typeof(Models.DefaultSite));
            siteTypeBuilder.Build();
        }

        private void BuildPostTypes(IApi api)
        {
            var postTypeBuilder = new PostTypeBuilder(api)
                .AddType(typeof(Models.BlogPost));
            postTypeBuilder.Build()
                .DeleteOrphans();
        }

        private void BuildPageTypes(IApi api)
        {
            var pageTypeBuilder = new PageTypeBuilder(api)
                .AddType(typeof(Models.BlogArchive))
                .AddType(typeof(Models.StandardPage))
                .AddType(typeof(Models.StartPage));
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
            App.Blocks.Register<HeroBlock>();
        }

        private void UnregisterBlocks()
        {
        }
    }
}