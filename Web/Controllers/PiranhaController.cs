﻿using System;
using Microsoft.AspNetCore.Mvc;
using Piranha;
using Web.Models.Pages;

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
            var model = _api.Pages.GetById<StandardPage>(id);

            return View(model);
        }

        [Route("start")]
        public IActionResult Start(Guid id)
        {
            var model = _api.Pages.GetById<StartPage>(id);

            return View(model);
        }
    }
}