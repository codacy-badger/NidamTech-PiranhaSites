using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace NidamTech.WebTests
{
    public class StartupMock : IStartup
    {
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            throw new NotImplementedException();
        }

        public void Configure(IApplicationBuilder app)
        {
            throw new NotImplementedException();
        }
    }
}