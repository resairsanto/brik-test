import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/actions/actionCreator"


function Pagination() {
   const dispatch = useDispatch()
   const { products } = useSelector(state => state.products)
   const count = Math.ceil(products.count / 10)
   const [currentPage, setCurrentPage] = useState(1)
   const pageNumber = Array.from({ length: count })

   const handlePageByNum = (num) => {
      const selectedPage = (num).toString()
      setCurrentPage(selectedPage)
      dispatch(fetchProducts(selectedPage))
   }

   const handlePageByNext = () => {
      const selectedPage = (Number(currentPage) + 1).toString()
      setCurrentPage(selectedPage)
      dispatch(fetchProducts(selectedPage))
   }

   const handlePageByPrevious = () => {
      const selectedPage = (Number(currentPage) - 1).toString()
      setCurrentPage(selectedPage)
      dispatch(fetchProducts(selectedPage))
   }

   return (
      <>
         <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
               <li className="page-item">
                  <a
                     className={`page-link ${parseInt(currentPage) === 1 ? "disabled" : ""}`}
                     href="#"
                     onClick={handlePageByPrevious}
                  >
                     Previous
                  </a>
               </li>
               {pageNumber.map((el, i) => (
                  <li key={i} className="page-item">
                     <a
                        className={`page-link ${i + 1 === parseInt(currentPage) ? "active" : ""}`}
                        href="#"
                        onClick={() => handlePageByNum(i)}
                     >
                        {++i}
                     </a>
                  </li>
               ))}
               <li className="page-item">
                  <a
                     className={`page-link ${parseInt(currentPage) === count ? "disabled" : ""}`}
                     href="#"
                     onClick={handlePageByNext}
                  >
                     Next
                  </a>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default Pagination