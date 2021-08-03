using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductAPI.Controllers
{
    public class ProductController : ApiController
    {
        public IEnumerable<product> Get()
        {
            using(DemoDBEntities entity = new DemoDBEntities())
            {
                IEnumerable<product> li = entity.products.ToList();
                return li;
            }
        }

        [Route("api/product/{pid}")]
        public product Get(string pid)
        {
            using (DemoDBEntities entity = new DemoDBEntities())
            {
                product productData = entity.products.Where(p => p.productid.Equals(pid)).FirstOrDefault();
                return productData;
            }

        }
        public HttpResponseMessage Post([FromBody] product data)
        {
            try
            {
                using (DemoDBEntities entity = new DemoDBEntities())
                {
                    entity.products.Add(data);
                    entity.SaveChanges();

                    var message = Request.CreateResponse(HttpStatusCode.OK, data);
                    message.Headers.Location = new Uri(Request.RequestUri + data.productid.ToString());
                    return message;
                }

                    
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
        [Route("api/product/{pid}")]
        public HttpResponseMessage Put(string pid, [FromBody] product data)
        {
            try
            {
                using (DemoDBEntities entity = new DemoDBEntities())
                {
                    product pdata = entity.products.FirstOrDefault(p => p.productid.Equals(pid));
                    if (pdata != null)
                    {
                        pdata.productname = data.productname;
                        pdata.price = data.price;
                        pdata.description = data.description;
                        entity.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound);
                    }

                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
        [Route("api/product/{pid}")]
        public HttpResponseMessage Delete(string pid)
        {
            try
            {


                using (DemoDBEntities entity = new DemoDBEntities())
                {
                    product pdata = entity.products.FirstOrDefault(p => p.productid.Equals(pid));
                    if (pdata != null)
                    {
                        entity.products.Remove(pdata);
                        entity.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound);
                    }
                }
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

    }
}
