using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using nidam_corp.Controllers;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AttributeBuilder;
using sundhedmedalette.Models.Blocks;

namespace nidam_corp
{
    public class Startup
    {
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(config =>
            {
                config.ModelBinderProviders.Insert(0, new Piranha.Manager.Binders.AbstractModelBinderProvider());
            });
            services.AddPiranhaApplication();
            services.AddPiranhaFileStorage();
            services.AddPiranhaImageSharp();
            services.AddPiranhaEF(options => options.UseSqlite("Filename=./piranha.db"));
            services.AddPiranhaIdentityWithSeed<IdentitySQLiteDb>(options =>
                options.UseSqlite("Filename=./piranha.db"));
            services.AddPiranhaManager();
            services.AddPiranhaMemCache();

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

            BuildSiteTypes(api);
            BuildPageTypes(api);
            BuildPostTypes(api);

            RegisterMiddleware(app);
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