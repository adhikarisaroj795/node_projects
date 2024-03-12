using lms.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace lms.Controllers
{
    public class IssueBookController : Controller
    {
        libraryEntities db = new libraryEntities();

        // GET: IssueBook
        public ActionResult Index()
        {
            return View();
        }

        //for getting member name with member id
        [HttpPost]
        public ActionResult GetMid(int mid)
        {
            var memberid = (from s in db.members where s.id == mid select s.name).ToList();
            return Json(memberid, JsonRequestBehavior.AllowGet);
        }

        //for getting book name
        [HttpGet]
        public ActionResult GetBook()
        {
            var books = db.books.Select(p => new
            {
                ID = p.id,
                Bname = p.bname
            }).ToList();
            return Json(books, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Save(bookissue issue)
        {
            if(ModelState.IsValid)
            {
                db.bookissues.Add(issue);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();

        }

    }
}