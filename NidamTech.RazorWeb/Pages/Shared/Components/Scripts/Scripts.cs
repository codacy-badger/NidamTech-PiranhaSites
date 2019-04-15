using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NidamTech.RazorWeb.Pages.Shared.Components.Scripts
{
    [ViewComponent(Name = "Scripts")]
    public class ScriptsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}