import { useState } from "react"
import { createProduct } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function AddForm() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [form, setForm] = useState({
      sku: "",
      name: "",
      CategoryId: "",
      description: "",
      weight: "",
      width: "",
      length: "",
      height: "",
      image: "",
      price: ""
   })

   const handleInput = (e) => {
      let inputForm = {
         ...form,
         [e.target.name]: e.target.value
      }
      setForm(inputForm)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await dispatch(createProduct(form))
      navigate("/")
   }

   return (
      <>
         <div className="container">
            <div className="row justify-content-center mb-3">
               <div className="col-lg-12 col-md-11">
                  <button type="button" className="btn btn-sm btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     <i className="bi bi bi-plus-circle"></i> Add a Product
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div className="modal-dialog">
                        <div className="modal-content">
                           <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Add a Product</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body">
                              <form onSubmit={handleSubmit}>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="sku"
                                       value={form.sku}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="SKU"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="name"
                                       value={form.name}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Name"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <select
                                       className="form-select text-muted"
                                       aria-label="Default select example"
                                       name="CategoryId"
                                       value={form.CategoryId}
                                       onChange={handleInput}
                                    >
                                       <option defaultValue>Choose Category</option>
                                       <option value="1">Minuman</option>
                                       <option value="2">Makanan</option>
                                       <option value="3">Peralatan Dapur</option>
                                       <option value="4">Perawatan Tubuh</option>
                                       <option value="5">Alas Kaki</option>
                                    </select>
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="description"
                                       value={form.description}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Description"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="weight"
                                       value={form.weight}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Weight"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="width"
                                       value={form.width}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Width"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="length"
                                       value={form.length}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Length"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="height"
                                       value={form.height}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Height"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="image"
                                       value={form.image}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Image URL"
                                    />
                                 </div>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name="price"
                                       value={form.price}
                                       onChange={handleInput}
                                       className="form-control"
                                       placeholder="Price"
                                    />
                                 </div>
                                 <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Submit</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default AddForm