import { useState } from "react"
import { fetchFilteredProducts } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"

function SearchBarItem() {
   const dispatch = useDispatch()
   const [inputSearch, setInputSearch] = useState("")

   function handleInputChange(e) {
      setInputSearch(e.target.value)
   }

   function submitSearch(e) {
      e.preventDefault()
      dispatch(fetchFilteredProducts(inputSearch))
      setInputSearch("")
   }
   return (
      <>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12 col-md-11 mt-3">
                  <form className="d-flex" role="search" onSubmit={submitSearch}>
                     <input
                        className="form-control me-1 rounded-start-pill"
                        name="inputSearch"
                        value={inputSearch}
                        onChange={handleInputChange}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                     />
                     <button className="btn btn-outline-success rounded-end-pill" type="submit">Search</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default SearchBarItem