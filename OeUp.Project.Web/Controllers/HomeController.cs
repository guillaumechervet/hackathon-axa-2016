using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.OptionsModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNet5TypescriptProductionGrunt.Controllers
{
    public class HomeController : Controller
    {

       /*  public string Index()
    {
        return "This is my default action...";
    }
        private IOptions<AppSettings> AppSettings;

        public HomeController(IOptions<AppSettings> appSettings)
        {
            AppSettings = appSettings;
        }*/

        public IActionResult Index()
        {
            //string siteName = AppSettings.SiteTitle;
            return View();
        }
    }
}
