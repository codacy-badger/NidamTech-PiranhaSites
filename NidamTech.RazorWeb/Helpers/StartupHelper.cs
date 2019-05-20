using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NidamTech.EmailService.Interfaces;
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
    public static class StartupHelper
    {
        public static void RegisterBlocks()
        {
            App.Blocks.Register<HeroBlock>();
            App.Blocks.Register<MarkdownTextBlock>();
            App.Blocks.Register<TwoColumnBlockGroup>();
        }

        public static void UnregisterBlocks()
        {
            App.Blocks.UnRegister<HtmlColumnBlock>();
        }

        public static void RegisterSelects()
        {
            App.Fields.RegisterSelect<ThemeEnum>();
            App.Fields.RegisterSelect<BootstrapBreakpointEnum>();
        }


        public static void RegisterMiddleware(IApplicationBuilder app)
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

        public static void BuildSiteTypes(IApi api)
        {
            var siteTypeBuilder = new SiteTypeBuilder(api)
                .AddType(typeof(DefaultSite));
            siteTypeBuilder.Build();
        }

        public static void BuildPageTypes(IApi api)
        {
            var pageTypeBuilder = new PageTypeBuilder(api)
                .AddType(typeof(StandardPage))
                .AddType(typeof(StartPage));
            pageTypeBuilder.Build()
                .DeleteOrphans();
        }

        public static void CreateMenuGroups()
        {
            throw new NotSupportedException();
        }

        public static void AddMenuItems()
        {
            throw new NotSupportedException();
        }

        public static void AddFileOrBlobStorage(IServiceCollection services)
        {
            var blobStorage = Environment.GetEnvironmentVariable("BLOBSTORAGE");
            if (blobStorage != null)
            {
                const string credentials = "";
                services.AddPiranhaBlobStorage(credentials);
            }
            else
            {
                services.AddPiranhaFileStorage();
            }
        }

        public static void AddDatabase(IConfiguration configuration, IServiceCollection services)
        {
            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");
            if (databaseUrl != null)
            {
                var pgConnString = CreatePostgressConnString(databaseUrl);
                services.AddPiranhaEF(options =>
                    options.UseNpgsql(pgConnString));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite(pgConnString));
            }
            else
            {
                services.AddPiranhaEF(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
                services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                    options.UseSqlite("Filename=./piranha.razorweb.db"));
            }
        }

        private static string CreatePostgressConnString(string databaseUrl)
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

        public static void AddEmailService(IServiceCollection services)
        {
            services.AddSingleton<IEmailConfiguration>();
            services.AddTransient<IEmailService, EmailService.EmailService>();
        }

        public static void AddMvcService(IServiceCollection services)
        {
            services.AddMvc(config =>
            {
                config.ModelBinderProviders.Insert(0, new Piranha.Manager.Binders.AbstractModelBinderProvider());
            });
        }
    }
}