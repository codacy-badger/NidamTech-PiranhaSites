using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web.Views.Shared.Components.Header
{
    [ViewComponent(Name = "Header")]
    public class HeaderViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}