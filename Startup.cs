using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Piranha;
using Piranha.AspNetCore.Identity.SQLite;
using Piranha.AttributeBuilder;
using Piranha.Cache;
using Piranha.Manager.Binders;
using sundhedmedalette.Models;
using sundhedmedalette.Models.Blocks;

namespace sundhedmedalette
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(config => { config.ModelBinderProviders.Insert(0, new AbstractModelBinderProvider()); });
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

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();

            // Initialize Piranha
            App.Init();

            //Register custom blocks
            App.Blocks.Register<HeroImageBlock>();

            // Configure cache level
            App.CacheLevel = CacheLevel.Basic;

            // Build content types
            var pageTypeBuilder = new PageTypeBuilder(api)
                .AddType(typeof(BlogArchive))
                .AddType(typeof(StandardPage))
                .AddType(typeof(StartPage));
            pageTypeBuilder.Build()
                .DeleteOrphans();
            var postTypeBuilder = new PostTypeBuilder(api)
                .AddType(typeof(BlogPost));
            postTypeBuilder.Build()
                .DeleteOrphans();

            // Register middleware
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UsePiranha();
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
    }
}