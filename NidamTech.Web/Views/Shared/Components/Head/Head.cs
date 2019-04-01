using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web.Views.Shared.Components.Head
{
    [ViewComponent(Name = "Head")]
    public class HeadViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}