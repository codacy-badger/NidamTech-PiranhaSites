using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace NidamTech.RazorWeb.Pages.Shared.Components.Dimmer
{
    [ViewComponent(Name = "Dimmer")]
    public class DimmerViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}