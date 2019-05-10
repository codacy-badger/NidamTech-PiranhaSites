using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NidamTech.RazorWeb.Helpers;
using Piranha;

namespace NidamTech.RazorWeb
{
    public class Startup
    {
        private IConfiguration Configuration { get; }
        private readonly StartupHelper _startupHelper = new StartupHelper();

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            WebpackChunkNamer.Init();
            _startupHelper.AddMvcService(services);
            services.AddPiranha();
            services.AddPiranhaApplication();
            _startupHelper.AddFileOrBlobStorage(Configuration, services);
            services.AddPiranhaImageSharp();
            _startupHelper.AddPiranhaEF(Configuration, services);
            services.AddPiranhaManager();
            services.AddMemoryCache();
            services.AddPiranhaMemoryCache();
            _startupHelper.AddEmailService(Configuration, services);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            App.Init(api);
            App.CacheLevel = Piranha.Cache.CacheLevel.Basic;
            _startupHelper.RegisterBlocks();
            _startupHelper.UnregisterBlocks();
            _startupHelper.RegisterSelects();
            _startupHelper.CreateMenuGroups();
            _startupHelper.AddMenuItems();
            _startupHelper.BuildSiteTypes(api);
            _startupHelper.BuildPageTypes(api);
            _startupHelper.RegisterMiddleware(app);
        }
    }
}