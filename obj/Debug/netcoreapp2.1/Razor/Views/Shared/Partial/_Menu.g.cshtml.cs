#pragma checksum "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c6cc55e9d4cdd0d909951cf4da37e4d747e752f7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_Partial__Menu), @"mvc.1.0.view", @"/Views/Shared/Partial/_Menu.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/Partial/_Menu.cshtml", typeof(AspNetCore.Views_Shared_Partial__Menu))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "/Users/nikolaidamm/Projects/nidam-corp/Views/_ViewImports.cshtml"
using Piranha.AspNetCore.Services;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c6cc55e9d4cdd0d909951cf4da37e4d747e752f7", @"/Views/Shared/Partial/_Menu.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d8811829d6ada579686079dd68f841c02e80201b", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_Partial__Menu : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
  
    var sitemap = WebApp.Site.Sitemap;

#line default
#line hidden
            BeginContext(44, 1, true);
            WriteLiteral("\n");
            EndContext();
            BeginContext(149, 506, true);
            WriteLiteral(@"<nav class=""navbar navbar-toggleable-sm navbar-dark bg-faded d-sm-block d-md-none"">
    <button class=""navbar-toggler navbar-toggler-right"" type=""button"" data-toggle=""collapse"" data-target=""#navbarNavAltMarkup"" aria-controls=""navbarNavAltMarkup"" aria-expanded=""false"" aria-label=""Toggle navigation"">
        <span class=""navbar-toggler-icon""></span>
    </button>
    <a class=""navbar-brand"" href=""#""></a>
    <div class=""collapse navbar-collapse"" id=""navbarNavAltMarkup"">
        <div class=""navbar-nav"">
");
            EndContext();
#line 13 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
             foreach (var item in sitemap)
            {

#line default
#line hidden
            BeginContext(712, 18, true);
            WriteLiteral("                <a");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 730, "\"", 799, 3);
            WriteAttributeValue("", 738, "nav-item", 738, 8, true);
            WriteAttributeValue(" ", 746, "nav-link", 747, 9, true);
#line 15 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
WriteAttributeValue(" ", 755, item.Id == WebApp.PageId ? "active" : "", 756, 43, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginWriteAttribute("href", " href=\"", 800, "\"", 822, 1);
#line 15 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
WriteAttributeValue("", 807, item.Permalink, 807, 15, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(823, 28, true);
            WriteLiteral(">\n                    <span>");
            EndContext();
            BeginContext(852, 14, false);
#line 16 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
                     Write(item.MenuTitle);

#line default
#line hidden
            EndContext();
            BeginContext(866, 29, true);
            WriteLiteral("</span>\n                </a>\n");
            EndContext();
#line 18 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
            }

#line default
#line hidden
            BeginContext(909, 33, true);
            WriteLiteral("        </div>\n    </div>\n</nav>\n");
            EndContext();
            BeginContext(1044, 92, true);
            WriteLiteral("<nav class=\"navbar d-none d-md-block\">\n    <ul class=\"nav nav-site justify-content-center\">\n");
            EndContext();
#line 25 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
         foreach (var item in sitemap)
        {

#line default
#line hidden
            BeginContext(1185, 15, true);
            WriteLiteral("            <li");
            EndContext();
            BeginWriteAttribute("class", " class=\"", 1200, "\"", 1260, 2);
            WriteAttributeValue("", 1208, "nav-item", 1208, 8, true);
#line 27 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
WriteAttributeValue(" ", 1216, item.Id == WebApp.PageId ? "active" : "", 1217, 43, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1261, 37, true);
            WriteLiteral(">\n                <a class=\"nav-link\"");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 1298, "\"", 1320, 1);
#line 28 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
WriteAttributeValue("", 1305, item.Permalink, 1305, 15, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1321, 28, true);
            WriteLiteral(">\n                    <span>");
            EndContext();
            BeginContext(1350, 14, false);
#line 29 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
                     Write(item.MenuTitle);

#line default
#line hidden
            EndContext();
            BeginContext(1364, 47, true);
            WriteLiteral("</span>\n                </a>\n            </li>\n");
            EndContext();
#line 32 "/Users/nikolaidamm/Projects/nidam-corp/Views/Shared/Partial/_Menu.cshtml"
        }

#line default
#line hidden
            BeginContext(1421, 16, true);
            WriteLiteral("    </ul>\n</nav>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public IApplicationService WebApp { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
