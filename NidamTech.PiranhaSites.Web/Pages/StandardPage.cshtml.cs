using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using NidamTech.PiranhaSites.Web.Models;
using Piranha;

namespace NidamTech.PiranhaSites.Web.Pages
{
    public class StandardPageModel : PageModel
    {
        private readonly IApi _api;
        public StandardPage Data { get; private set; }

        public StandardPageModel(IApi api)
        {
            _api = api;
        }

        public async Task OnGet(Guid id)
        {
            Data = await _api.Pages.GetByIdAsync<StandardPage>(id);
        }
    }
}