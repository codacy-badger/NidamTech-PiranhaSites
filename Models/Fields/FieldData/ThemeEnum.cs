using System.ComponentModel.DataAnnotations;

namespace nidam_sites.Models.Data
{
    public enum Theme
    {
        [Display(Description = "nidam-theme")]
        nidam,
        [Display(Description = "sundhedmedalette-theme")]
        sundhedmedalette        
    }
}