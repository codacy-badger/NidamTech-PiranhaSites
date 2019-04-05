using System.ComponentModel.DataAnnotations;

namespace Web.Models.Data
{
    public enum ThemeEnum
    {
        [Display(Description = "Default Theme")]
        @default,

        [Display(Description = "NidamTech Theme")]
        nidamtech,
        [Display(Description = "SMA Theme")] sundhedmedalette
    }
}