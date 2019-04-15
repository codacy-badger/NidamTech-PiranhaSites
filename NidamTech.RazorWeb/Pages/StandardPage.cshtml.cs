using System;
using System.Threading.Tasks;
using NidamTech.RazorWeb.Models.Pages;
using Piranha;

namespace NidamTech.RazorWeb.Pages
{
    public class StandardPageModel : Microsoft.AspNetCore.Mvc.RazorPages.PageModel
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