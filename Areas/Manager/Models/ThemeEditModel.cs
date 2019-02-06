using System;
using System.Collections.Generic;
using System.Linq;
using Piranha;

namespace nidam_corp.Areas.Manager.Models
{
    public class ThemeEditModel
    {
        public class SiteInfo
        {
            public string Id { get; set; }
            public string Title { get; set; }
            public bool IsDefault { get; set; }
        }

        public IList<SiteInfo> Sites { get; set; } = new List<SiteInfo>();
        public string SiteTitle { get; set; }

        public class Theme
        {
            public string Name { get; set; }
            public string Url { get; set; }
        }

        public IList<Theme> Themes { get; set; } = new List<Theme>();
        public string ThemeSelectorId { get; set; }

        public static ThemeEditModel Get(IApi api, Guid? siteId)
        {
            var model = new ThemeEditModel();
            var site = siteId.HasValue ? api.Sites.GetById(siteId.Value) : api.Sites.GetDefault();
            var defaultSite = api.Sites.GetDefault();

            if (site == null)
            {
                site = defaultSite;
            }

            model.SiteTitle = site.Title;

            model.Sites = api.Sites.GetAll().Select(s => new SiteInfo
            {
                Id = s.Id.ToString(),
                Title = s.Title,
                IsDefault = s.IsDefault
            }).ToList();

            //model.ThemeSelectorId;

            /*model.Themes = api.Themes.GetAll().Select(t => new Theme
            {
                Name = t.Name,
                Url = t.Url
            }).ToList();*/

            return model;
        }
        public void Save(IApi api)
        {
         //api.Params.Save();
        }
    }
}