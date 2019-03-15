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
    public class salaryinfoesController : ApiController
    {
        private employees_manager_ver2Entities db = new employees_manager_ver2Entities();

        // GET: api/salaryinfoes
        public IQueryable<salaryinfo> Getsalaryinfoes()
        {
            return db.salaryinfoes;
        }

        // GET: api/salaryinfoes/5
        [ResponseType(typeof(salaryinfo))]
        public async Task<IHttpActionResult> Getsalaryinfo(int id)
        {
            salaryinfo salaryinfo = await db.salaryinfoes.FindAsync(id);
            if (salaryinfo == null)
            {
                return NotFound();
            }

            return Ok(salaryinfo);
        }

        // PUT: api/salaryinfoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putsalaryinfo(int id, salaryinfo salaryinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != salaryinfo.idSalaryInfo)
            {
                return BadRequest();
            }

            db.Entry(salaryinfo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!salaryinfoExists(id))
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

        // POST: api/salaryinfoes
        [ResponseType(typeof(salaryinfo))]
        public async Task<IHttpActionResult> Postsalaryinfo(salaryinfo salaryinfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.salaryinfoes.Add(salaryinfo);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = salaryinfo.idSalaryInfo }, salaryinfo);
        }

        // DELETE: api/salaryinfoes/5
        [ResponseType(typeof(salaryinfo))]
        public async Task<IHttpActionResult> Deletesalaryinfo(int id)
        {
            salaryinfo salaryinfo = await db.salaryinfoes.FindAsync(id);
            if (salaryinfo == null)
            {
                return NotFound();
            }

            db.salaryinfoes.Remove(salaryinfo);
            await db.SaveChangesAsync();

            return Ok(salaryinfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool salaryinfoExists(int id)
        {
            return db.salaryinfoes.Count(e => e.idSalaryInfo == id) > 0;
        }
    }
}