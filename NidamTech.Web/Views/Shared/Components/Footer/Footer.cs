using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
namespace Web.Views.Shared.Components.Footer
{
   

    [ViewComponent(Name = "Footer")]
    public class FooterViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}