using System;
using Microsoft.AspNetCore.Mvc;
using Piranha;
using Piranha.Areas.Manager.Controllers;


namespace nidam_corp.Areas.Manager.Controllers
{
    [Area("Manager")]
    public class ThemeController : ManagerAreaControllerBase
    {
        private const string COOKIE_SELECTEDSITE = "PiranhaManager_SelectedSite";

        public ThemeController(IApi api) : base(api)
        {
        }

        public ViewResult ListSite(Guid? siteId, string pageId = null)
        {
            var model = Models.ThemeListModel.Get(api, siteId, pageId);

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

        public IActionResult Save()
        {
            throw new NotImplementedException();
        }
    }
}