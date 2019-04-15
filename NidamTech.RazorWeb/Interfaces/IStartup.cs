using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Piranha;

namespace Web
{
    public interface IStartup
    {
        IServiceProvider ConfigureServices(IServiceCollection services);
        void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api);
    }
}