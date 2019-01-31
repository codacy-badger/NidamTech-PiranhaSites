using System;
using System.Collections.Generic;
using System.Linq;
using Piranha;

namespace nidam_corp.Areas.Manager.Models
{
    public class ThemeListModel
    {    
        public class SiteInfo
        {
            public string Id { get; set; }
            public string Title { get; set; }
            public bool IsDefault { get; set; }
        }
        public class Theme
        {
            public string Name { get; set; }
            public string Url { get; set; }
        } 
        public IList<Theme> Themes { get; set; } = new List<Theme>();
        public IList<SiteInfo> Sites { get; set; } = new List<SiteInfo>();
        public string SiteTitle { get; set; }

        public string ThemeSelectorId { get; set; }

        public static ThemeListModel Get(IApi api, Guid? siteId, string pageId = null)
        {
            var model = new ThemeListModel();

            var site = siteId.HasValue ?
                api.Sites.GetById(siteId.Value) : api.Sites.GetDefault();
            var defaultSite = api.Sites.GetDefault();

            if (site == null)
            {
                site = defaultSite;
            }
            model.SiteTitle = site.Title;
            model.ThemeSelectorId = "Theme Selector";
//            model.Themes = api.Themes.GetAll().Select(t => new Theme
//            {
//                Name = t.Name,
//                Url = t.Url
//            }).ToList();
            model.Sites = api.Sites.GetAll().Select(s => new SiteInfo
            {
                Id = s.Id.ToString(),
                Title = s.Title,
                IsDefault = s.IsDefault
            }).ToList();
 
            return model;
        }
    }
}