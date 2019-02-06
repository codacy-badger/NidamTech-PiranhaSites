using System;
using Microsoft.AspNetCore.Mvc;
using Piranha;
using Piranha.Areas.Manager.Controllers;


namespace nidam_corp.Areas.Manager.Controllers
{
    [Area("Manager")]
    public class ThemeController : ConfigController
    {
        private readonly IApi _api;
        private const string COOKIE_SELECTEDSITE = "PiranhaManager_SelectedSite";

        public ThemeController(IApi api) : base(api)
        {
            _api = api;
        }

        public ViewResult Edit(Guid? siteId, string pageId = null)
        {
            var model = Models.ThemeEditModel.Get(api, siteId);

            // Store a cookie on our currently selected site
            if (siteId.HasValue)
            {
                Response.Cookies.Append(COOKIE_SELECTEDSITE, siteId.ToString());
            }
            else
            {
                Response.Cookies.Delete(COOKIE_SELECTEDSITE);
            }

            return View("Edit", model);
        }
    }
}