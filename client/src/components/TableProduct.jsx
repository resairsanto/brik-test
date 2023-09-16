import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, deleteProduct } from "../store/actions/actionCreator"
import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import AddForm from "./AddForm"
import UpdateForm from "./UpdateForm"
import DetailProduct from "./DetailProduct"

function TableProduct() {
   const dispatch = useDispatch()
   const [page, setPage] = useState(1)
   const { products } = useSelector(state => state.products)

   useEffect(() => {
      dispatch(fetchProducts(page))
   }, [])

   if (products.length === 0) {
      return (
         <>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-md-10 text-center">
                     <h1>Loading...</h1>
                  </div>
               </div>
            </div>
         </>
      )
   }

   const handleDelete = async (id) => {
      await dispatch(deleteProduct(id))
      dispatch(fetchProducts(page))
   }

   return (
      <>
         <div className="container">
            <div className="row justify-content-center mt-3">
               <AddForm />
               <div className="col-lg-12 col-md-11">
                  <table className="table">
                     <thead className="table-dark">
                        <tr>
                           <th scope="col">Image</th>
                           <th scope="col" style={{ width: '15%' }}>Name</th>
                           <th scope="col" style={{ width: '15%' }}>Category</th>
                           <th scope="col" style={{ width: '30%' }}>Description</th>
                           <th scope="col">Price</th>
                           <th scope="col" style={{ width: '15%' }}>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {products.rows.map((el, i) => (
                           <tr key={el.id}>
                              <td><img src={el.image} className="rounded shadow" width={'100rem'} /></td>
                              <td>{el.name}</td>
                              <td><span className="badge text-bg-info">{el.Category.name}</span></td>
                              <td>{el.description}</td>
                              <td>Rp. {el.price.toLocaleString()}</td>
                              <td>
                                 <DetailProduct id={el.id} />
                                 <button className="btn btn-danger btn-sm m-1" onClick={() => handleDelete(el.id)}><i className="bi bi-trash"></i></button>
                                 <UpdateForm id={el.id} />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className="my-4">
                     <Pagination />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default TableProduct