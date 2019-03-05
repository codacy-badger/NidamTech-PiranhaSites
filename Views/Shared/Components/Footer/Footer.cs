namespace nidam_sites.Views.Shared.Components.Footer
{
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [ViewComponent(Name = "Footer")]
    public class FooterViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync() => await Task.FromResult(View());
    }
}