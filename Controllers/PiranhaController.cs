using System;
using Microsoft.AspNetCore.Mvc;
using Piranha;

namespace nidam_sites.Controllers
{
    public class PiranhaController : Controller
    {
        private readonly IApi _api;

        public PiranhaController(IApi api)
        {
            _api = api;
        }

        [Route("archive")]
        public IActionResult Archive(Guid id, int? year = null, int? month = null, int? page = null,
            Guid? category = null, Guid? tag = null)
        {
            Models.BlogArchive model;

            if (category.HasValue)
                model = _api.Archives.GetByCategoryId<Models.BlogArchive>(id, category.Value, page, year, month);
            else if (tag.HasValue)
                model = _api.Archives.GetByTagId<Models.BlogArchive>(id, tag.Value, page, year, month);
            else model = _api.Archives.GetById<Models.BlogArchive>(id, page, year, month);

            return View(model);
        }

        [Route("page")]
        public IActionResult Page(Guid id)
        {
            var model = _api.Pages.GetById<Models.StandardPage>(id);

            return View(model);
        }

        [Route("post")]
        public IActionResult Post(Guid id)
        {
            var model = _api.Posts.GetById<Models.BlogPost>(id);

            return View(model);
        }

        [Route("start")]
        public IActionResult Start(Guid id)
        {
            var model = _api.Pages.GetById<Models.StartPage>(id);

            return View(model);
        }
    }
}