using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MovieTutorial.Default.Pages
{

    [PageAuthorize(typeof(ExceptionsRow))]
    public class ExceptionsController : Controller
    {
        [Route("Default/Exceptions")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Exceptions/ExceptionsIndex.cshtml");
        }
    }
}