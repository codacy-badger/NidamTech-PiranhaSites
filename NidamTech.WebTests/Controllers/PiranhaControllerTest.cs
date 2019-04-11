using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NidamTech.WebTests.Mock;
using Piranha;
using Piranha.AspNetCore.Services;
using Web;
using Web.Controllers;

namespace NidamTech.Controllers
{
    [TestClass]
    public class PiranhaControllerTest
    {
        StartupMock _startupMock = new StartupMock();
        private static IApplicationService WebApp = null;
        private PiranhaController controller = new PiranhaController(WebApp.Api);

        [TestMethod]
        public void TestStartPage()
        {
            var expectedResult = WebApp.Api.Pages.GetStartpageAsync().Result;
            var pageGuid = expectedResult.Id;
            var result = controller.Start(pageGuid) as ViewResult;
            Assert.AreEqual("Start", result.ViewName);
        }
    }
}