using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.WindowsAzure.Storage.Auth;
using NidamTech.RazorWeb.Models;
using NidamTech.RazorWeb.Models.Blocks;
using NidamTech.RazorWeb.Models.Data;
using NidamTech.RazorWeb.Models.Sites;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AspNetCore.Identity.SQLServer;
using Piranha.AttributeBuilder;
using Piranha.Extend.Blocks;
using SixLabors.ImageSharp;


namespace NidamTech.RazorWeb.Helpers
{
    public class StartupHelper
    {
        public void RegisterBlocks()
        {
            App.Blocks.Register<HeroBlock>();
            App.Blocks.Register<MarkdownTextBlock>();
            App.Blocks.Register<TwoColumnBlockGroup>();
        }

        public void UnregisterBlocks()
        {
            App.Blocks.UnRegister<HtmlColumnBlock>();
        }

        public void RegisterSelects()
        {
            App.Fields.RegisterSelect<ThemeEnum>();
            App.Fields.RegisterSelect<BootstrapBreakpointEnum>();
        }


        public void RegisterMiddleware(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UsePiranha();
            app.UsePiranhaManager();
            app.UseMvc(routes =>
            {
                routes.MapRoute("areaRoute",
                    "{area:exists}/{controller}/{action}/{id?}",
                    new {controller = "Home", action = "Index"});
            });
        }

        public void BuildSiteTypes(IApi api)
        {
            var siteTypeBuilder = new SiteTypeBuilder(api)
                .AddType(typeof(DefaultSite));
            siteTypeBuilder.Build();
        }

        public void BuildPageTypes(IApi api)
        {
            var pageTypeBuilder = new PageTypeBuilder(api)
                .AddType(typeof(StandardPage))
                .AddType(typeof(StartPage));
            pageTypeBuilder.Build()
                .DeleteOrphans();
        }

        public void CreateMenuGroups()
        {
        }

        public void AddMenuItems()
        {
        }

        public void AddFileOrBlobStorage(IConfiguration configuration, IServiceCollection services)
        {
            var azureStorageSettings = configuration.GetSection("AzureStorageSettings").Get<AzureStorageSettings>();
            if (azureStorageSettings.UseAzureStorage)
            {
                var azureStorage = azureStorageSettings.AzureStorage;
                var credentials = new StorageCredentials(azureStorage.StorageName, azureStorage.StorageKey);
                services.AddPiranhaBlobStorage(credentials);
            }
            else
            {
                services.AddPiranhaFileStorage();
            }
        }

        public void AddPiranhaEF(IConfiguration configuration, IServiceCollection services)
        {
            var databaseSettings = configuration.GetSection("DatabaseSettings").Get<DatabaseSettings>();
            if (databaseSettings.UseLocalDB)
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
            }
            else
            {
                var pgConnString = Environment.GetEnvironmentVariable("DATABASE_URL");
                services.AddPiranhaEF(options =>
                    options.UseNpgsql(pgConnString));
                services.AddPiranhaIdentityWithSeed<IdentitySQLServerDb>(options =>
                    options.UseNpgsql(pgConnString));
            }
        }

        public void AddEmailService(IConfiguration configuration, IServiceCollection services)
        {
            //services.AddSingleton<IEmailConfiguration>(configuration.GetSection("EmailSettings")
            //.Get<EmailConfiguration>());
            //services.AddTransient<IEmailService, EmailService.EmailService>();
        }

        public void AddMvcService(IServiceCollection services)
        {
            services.AddMvc(config =>
            {
                config.ModelBinderProviders.Insert(0, new Piranha.Manager.Binders.AbstractModelBinderProvider());
            });
        }
    }
}