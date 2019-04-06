using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Web.Views.Shared.Components.Preloader
{
    [ViewComponent(Name = "Preloader")]
    public class PreloaderViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}