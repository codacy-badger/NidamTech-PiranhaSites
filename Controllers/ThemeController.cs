using Microsoft.AspNetCore.Mvc;
using Piranha;
using Piranha.Areas.Manager.Controllers;

namespace nidam_corp.Controllers
{
    [Area("Manager")]
    public class ThemeController : ManagerAreaControllerBase
    {
        public ThemeController(IApi api) : base(api)
        {
        }
        [Route("/manager/theme")]
        public IActionResult Show()
        {
            return View("Edit");
        }
    }
}