using System;
using Microsoft.AspNetCore.Mvc;
using Piranha;

namespace Web.Controllers
{
    public class PiranhaController : Controller
    {
        private readonly IApi _api;

        public PiranhaController(IApi api)
        {
            _api = api;
        }

        [Route("page")]
        public IActionResult Page(Guid id)
        {
            var model = _api.Pages.GetById<Models.StandardPage>(id);

            return View("Pages/" + model);
        }

        [Route("start")]
        public IActionResult Start(Guid id)
        {
            var model = _api.Pages.GetById<Models.StartPage>(id);

            return View("Pages/" + model);
        }
    }
}