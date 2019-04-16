using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using NidamTech.RazorWeb.Models;
using Piranha;

namespace NidamTech.RazorWeb.Pages
{
    public class StandardPageModel : PageModel
    {
        private readonly IApi _api;
        public StandardPage Data { get; private set; }

        public StandardPageModel(IApi api) : base()
        {
            _api = api;
        }

        public async Task OnGet(Guid id)
        {
            Data = await _api.Pages.GetByIdAsync<StandardPage>(id);
        }
    }
}