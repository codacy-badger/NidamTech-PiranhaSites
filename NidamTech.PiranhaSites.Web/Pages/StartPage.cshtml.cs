using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using NidamTech.PiranhaSites.Web.Models;
using Piranha;

namespace NidamTech.PiranhaSites.Web.Pages
{
      public class StartPageModel : PageModel
       {
           private readonly IApi _api;
           public StartPage Data { get; private set; }
   
           public StartPageModel(IApi api)
           {
               _api = api;
           }
   
           public async Task OnGet(Guid id)
           {
               Data = await _api.Pages.GetByIdAsync<StartPage>(id);
           }
       }
}