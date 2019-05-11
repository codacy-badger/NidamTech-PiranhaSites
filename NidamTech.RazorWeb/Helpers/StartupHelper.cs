using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NidamTech.RazorWeb.Models;
using NidamTech.RazorWeb.Models.Blocks;
using NidamTech.RazorWeb.Models.Data;
using NidamTech.RazorWeb.Models.Sites;
using Npgsql;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AttributeBuilder;
using Piranha.Extend.Blocks;


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
            //var azureStorageSettings = configuration.GetSection("AzureStorageSettings").Get<AzureStorageSettings>();
            //if (azureStorageSettings.UseAzureStorage)
            //{
            // var azureStorage = azureStorageSettings.AzureStorage;
            //var credentials = new StorageCredentials(azureStorage.StorageName, azureStorage.StorageKey);
            // services.AddPiranhaBlobStorage(credentials);
            // }
            // else
            // {
            services.AddPiranhaFileStorage();
            //}
        }

        public void AddPiranhaEF(IConfiguration configuration, IServiceCollection services)
        {
            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");
            if (databaseUrl != null)
            {
                var pgConnString = CreatePostgressConnString(databaseUrl);
                services.AddPiranhaEF(options =>
                    options.UseNpgsql(pgConnString));
                services.AddPiranhaSimpleSecurity(
                    new Piranha.AspNetCore.SimpleUser(Piranha.Manager.Permission.All())
                    {
                        UserName = "admin",
                        Password = "password"
                    });
            }
            else
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
            }
        }

        private string CreatePostgressConnString(string databaseUrl)
        {
            var databaseUri = new Uri(databaseUrl);
            var userInfo = databaseUri.UserInfo.Split(':');
            var builder = new NpgsqlConnectionStringBuilder
            {
                Host = databaseUri.Host,
                Port = databaseUri.Port,
                Username = userInfo[0],
                Password = userInfo[1],
                Database = databaseUri.LocalPath.TrimStart('/')
            };
            return builder.ToString();
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