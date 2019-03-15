using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Web.Views.Shared.Components.Navbar
{
    [ViewComponent(Name = "Navbar")]
    public class NavbarViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}