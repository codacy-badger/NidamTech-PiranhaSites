using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Piranha;
using IStartup = Web.IStartup;

namespace NidamTech.WebTests.Mock
{
    public class StartupMock : IStartup
    {
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            throw new NotImplementedException();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider services, IApi api)
        {
            throw new NotImplementedException();
        }
    }
}