using System.ComponentModel.DataAnnotations;

namespace Web.Models.Data
{
    public enum Theme
    {
        [Display(Description = "nidam-theme")]
        nidam,
        [Display(Description = "sundhedmedalette-theme")]
        sundhedmedalette        
    }
}