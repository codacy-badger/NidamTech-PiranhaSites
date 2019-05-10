using System.ComponentModel.DataAnnotations;

namespace NidamTech.RazorWeb.Models.Data
{
    public enum ThemeEnum
    {
        [Display(Description = "Default Theme")]
        @defaulttheme,
        [Display(Description = "NidamTech Theme")]
        nidamtechtheme,
        [Display(Description = "SMA Theme")] 
        sundhedmedalettetheme
    }
}