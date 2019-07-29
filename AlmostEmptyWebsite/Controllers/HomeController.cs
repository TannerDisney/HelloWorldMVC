using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AlmostEmptyWebsite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Github()
        {
            ViewData["Github"] = "https://github.com/TannerDisney";
            return View();
        }

        public IActionResult CookieClicker()
        {
            return View();
        }

    }
}