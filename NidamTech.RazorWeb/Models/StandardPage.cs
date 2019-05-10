/*
 * Copyright (c) 2017-2018 Håkan Edling
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 * 
 * http://github.com/tidyui/coreweb
 * 
 */

using Piranha.AttributeBuilder;
using Piranha.Models;
using System.Collections.Generic;

namespace NidamTech.RazorWeb.Models
{
    /// <summary>
    /// Basic page with main content in markdown.
    /// </summary>
    [PageType(Title = "Standard Page")]
    [PageTypeRoute(Title = "Narrow", Route = "/standardpage")]
    public class StandardPage : Page<StandardPage>
    {
    }
}