
import Image from "next/image"
const { default: AdminHeader } = require("@/layout/common/admin/Header")
const { default: AdminSidebar } = require("@/layout/common/admin/Sidebar")
const { default: Link } = require("next/link")

const Compaign_page = () => {
    return ( 
     <>   
 <AdminHeader/>
 <AdminSidebar /> 

 <main role="main">
 <section className="panel important">

          <h2>Campaign Header</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                About Us Header
               </label>
              <input type="text"/>
                </div>
              </div>


              <div className="col-md-6">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                Section Post
               </label>
               <textarea
                    className="form-control "
                    placeholder="Type here"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
         
          
          <br/><br/>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <label className="form-label" for="typeText">
                Section Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
                <input className="form-control" type="file" />
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-outline-primary">
                  Update Site
                </button>
              </div>
            </div>
          </div>


</section>




<section className="panel important">
<h2>Equity Management</h2>



<section className="panel important">
<div className="container">
<div className="row">
<label className="form-label" for="typeText">
 Health Equity
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Hits</th>
                      <th>Description</th>
                      <th>Media Type </th>
                      <th>Upload Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>Video</td>
                      <td> 12/02-2023 </td>
                    </tr>

                    <tr>
                    <td>2 </td>
                      <td>152</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>image</td>
                      <td> 12/02-2023 </td>
                    </tr>
                  </tbody>
                </table>

            <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                Image Description
               </label>
              <input type="text"/>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label" for="typeText">
                Add News Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
              <label className="form-label" for="typeText">
               Upload Image
                </label>
                <input className="form-control" type="file" />
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-outline-primary">
                  Update Site
                </button>
              </div>
            </div>
          </div>    
          </div>
         </div>
    </div>
</div>
</section>

<section className="panel important">
<div className="container">
<div className="row">
<label className="form-label" for="typeText">
Education Equity
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Hits</th>
                      <th>Description</th>
                      <th>Media Type </th>
                      <th>Upload Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>Video</td>
                      <td> 12/02-2023 </td>
                    </tr>

                    <tr>
                    <td>2 </td>
                      <td>152</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>image</td>
                      <td> 12/02-2023 </td>
                    </tr>
                  </tbody>
                </table>

            <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                Image Description
               </label>
              <input type="text"/>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label" for="typeText">
                Add News Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
              <label className="form-label" for="typeText">
               Upload Image
                </label>
                <input className="form-control" type="file" />
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-outline-primary">
                  Update Site
                </button>
              </div>
            </div>
          </div>    
          </div>
         </div>
    </div>
    </div>
    </section>

<section className="panel important">
<div className="container">
<div className="row">
<label className="form-label" for="typeText">
 Workforce Equity
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Hits</th>
                      <th>Description</th>
                      <th>Media Type </th>
                      <th>Upload Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>Video</td>
                      <td> 12/02-2023 </td>
                    </tr>

                    <tr>
                    <td>2 </td>
                      <td>152</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>image</td>
                      <td> 12/02-2023 </td>
                    </tr>
                  </tbody>
                </table>

            <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                Image Description
               </label>
              <input type="text"/>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label" for="typeText">
                Add News Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
              <label className="form-label" for="typeText">
               Upload Image
                </label>
                <input className="form-control" type="file" />
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-outline-primary">
                  Update Site
                </button>
              </div>
            </div>
          </div>    
          </div>
         </div>
    </div>
</div>
</section>


<section className="panel important">
<div className="container">
<div className="row">
<label className="form-label" for="typeText">
Public Equity
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Hits</th>
                      <th>Description</th>
                      <th>Media Type </th>
                      <th>Upload Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>Video</td>
                      <td> 12/02-2023 </td>
                    </tr>

                    <tr>
                    <td>2 </td>
                      <td>152</td>
                      <td>Executive Coordintor Jame Williams Executive Coordintor </td>
                      <td>image</td>
                      <td> 12/02-2023 </td>
                    </tr>
                  </tbody>
                </table>

            <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="form-outline">
                <label className="form-label" for="typeText">
                Image Description
               </label>
              <input type="text"/>
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label" for="typeText">
                Add News Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
              <label className="form-label" for="typeText">
               Upload Image
                </label>
                <input className="form-control" type="file" />
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-outline-primary">
                  Update Site
                </button>
              </div>
            </div>
          </div>    
          </div>
         </div>
    </div>
</div>
</section>










         

</section>







     </main> 
   </>
        
     );
}
 
export default Compaign_page;