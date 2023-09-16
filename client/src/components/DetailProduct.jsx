import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetail } from "../store/actions/actionCreator"

function DetailProduct({ id }) {
   const dispatch = useDispatch()
   const { productDetail } = useSelector(item => item.productDetail)
   const [form, setForm] = useState({
      sku: "",
      name: "",
      CategoryId: 0,
      description: "",
      weight: "",
      width: "",
      length: "",
      height: "",
      image: "",
      price: ""
   })

   useEffect(() => {
      if (productDetail) {
         setForm({
            ...form,
            sku: productDetail.sku,
            name: productDetail.name,
            CategoryId: productDetail.CategoryId,
            description: productDetail.description,
            weight: productDetail.weight,
            width: productDetail.width,
            length: productDetail.length,
            height: productDetail.height,
            image: productDetail.image,
            price: productDetail.price
         })
      }
   }, [productDetail])

   const fetchDetail = () => {
      dispatch(fetchProductDetail(id))
   }

   console.log(productDetail)

   return (
      <>
         {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Detail
         </button> */}
         <button className="btn btn-success btn-sm m-1" onClick={fetchDetail} data-bs-toggle="modal" data-bs-target="#exampleModal3">Detail</button>

         <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5" id="exampleModalLabel">{productDetail && (<div>{productDetail.name}</div>)}</h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  {productDetail && (
                     <div className="modal-body">
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                           <div className="row g-0 align-items-center">
                              <div className="col-md-4">
                                 <img src={form.image} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                                 <div className="card-body">
                                    <h5 className="card-title">Rp. {productDetail.price.toLocaleString()} <span className="badge text-bg-info"> {productDetail.Category.name}</span></h5>
                                    <div className="border rounded-3 p-2">
                                       <p className="card-text m-0">Description: {productDetail.description}</p>
                                       <p className="card-text m-0">SKU: {productDetail.sku}</p>
                                       <p className="card-text m-0">Weight: {productDetail.weight}</p>
                                       <p className="card-text m-0">Width: {productDetail.width}</p>
                                       <p className="card-text m-0">Length: {productDetail.length}</p>
                                       <p className="card-text m-0">Height: {productDetail.height}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>


      </>
   )
}

export default DetailProduct