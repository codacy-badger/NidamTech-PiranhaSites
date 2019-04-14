using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Piranha;
using Web.Dunno;

namespace Web
{
    public class Startup : IStartup
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

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            _startupHelper.AddMvcService(services);
            _startupHelper.AddEmailService(Configuration, services);
            services.AddPiranhaApplication();
            services.AddPiranhaImageSharp();
            _startupHelper.AddDatabaseConnection(Configuration, services);
            services.AddPiranhaManager();
            services.AddPiranhaSimpleCache();
            _startupHelper.AddFileOrBlobStorage(Configuration, services);
            return services.BuildServiceProvider();
        }


        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            App.Init(api);
            _startupHelper.CreateMenuGroups();
            _startupHelper.AddMenuItems();
            App.CacheLevel = Piranha.Cache.CacheLevel.Basic;
            _startupHelper.RegisterBlocks();
            _startupHelper.UnregisterBlocks();
            _startupHelper.RegisterSelects();
            _startupHelper.BuildSiteTypes(api);
            _startupHelper.BuildPageTypes(api);
            _startupHelper.RegisterMiddleware(app);
        }
    }
}