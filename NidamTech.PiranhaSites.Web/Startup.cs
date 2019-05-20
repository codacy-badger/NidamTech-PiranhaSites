using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NidamTech.PiranhaSites.Web.Helpers;
using Piranha;

namespace NidamTech.PiranhaSites.Web
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            WebpackChunkNamer webpackChunkNamer = new WebpackChunkNamer(env);
            webpackChunkNamer.Init();
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            StartupHelper.AddMvcService(services);
            services.AddPiranha();
            services.AddPiranhaApplication();
            StartupHelper.AddFileOrBlobStorage(Configuration, services);
            services.AddPiranhaImageSharp();
            StartupHelper.AddPiranhaEF(Configuration, services);
            services.AddPiranhaManager();
            services.AddMemoryCache();
            services.AddPiranhaMemoryCache();
            StartupHelper.AddEmailService(Configuration, services);
        }

        public static void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            App.Init(api);
            App.CacheLevel = Piranha.Cache.CacheLevel.Basic;
            StartupHelper.RegisterBlocks();
            StartupHelper.UnregisterBlocks();
            StartupHelper.RegisterSelects();
            StartupHelper.CreateMenuGroups();
            StartupHelper.AddMenuItems();
            StartupHelper.BuildSiteTypes(api);
            StartupHelper.BuildPageTypes(api);
            StartupHelper.RegisterMiddleware(app);
        }
    }
}