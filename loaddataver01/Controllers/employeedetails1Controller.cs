using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using loaddataver01.Models;

namespace loaddataver01.Controllers
{
    
    public class employeedetails1Controller : ApiController
    {
        private employees_manager_ver2Entities db = new employees_manager_ver2Entities();

        // GET: api/employeedetails1
        public IQueryable<employeedetail> Getemployeedetails()
        {
            return db.employeedetails;
        }

        // GET: api/employeedetails1/5
        [ResponseType(typeof(employeedetail))]
        public async Task<IHttpActionResult> Getemployeedetail(string id)
        {
            employeedetail employeedetail = await db.employeedetails.FindAsync(id);
            if (employeedetail == null)
            {
                return NotFound();
            }

            return Ok(employeedetail);
        }

        // PUT: api/employeedetails1/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putemployeedetail(string id, employeedetail employeedetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeedetail.employeeID)
            { 
                return BadRequest();
            }

            db.Entry(employeedetail).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!employeedetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/employeedetails1
        [ResponseType(typeof(employeedetail))]
        public async Task<IHttpActionResult> Postemployeedetail(employeedetail employeedetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.employeedetails.Add(employeedetail);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (employeedetailExists(employeedetail.employeeID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = employeedetail.employeeID }, employeedetail);
        }

        // DELETE: api/employeedetails1/5
        [ResponseType(typeof(employeedetail))]
        public async Task<IHttpActionResult> Deleteemployeedetail(string id)
        {
            employeedetail employeedetail = await db.employeedetails.FindAsync(id);
            if (employeedetail == null)
            {
                return NotFound();
            }

            db.employeedetails.Remove(employeedetail);
            await db.SaveChangesAsync();

            return Ok(employeedetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool employeedetailExists(string id)
        {
            return db.employeedetails.Count(e => e.employeeID == id) > 0;
        }
    }
}