import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { preloader } from '../store/actions/actionCreator'

export default function NavBar() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const isLoading = useSelector(state => state.preloader.preloader)

   function handleLogout() {
      localStorage.clear()
      dispatch(preloader(true))
      navigate("/login")
      setTimeout(() => {
         dispatch(preloader(false))
      }, 1000);
   }

   return (
      <>
         <nav className="navbar sticky-top navbar-expand-lg bg-white border-bottom">
            <div className="container">
               <a className="navbar-brand" href="#"><span className="fs-4 fw-bold">Product CMS</span></a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                  <span className="navbar-text pointer btn" onClick={handleLogout}>
                     Logout <i className="bi bi-box-arrow-right"></i>
                  </span>
               </div>
            </div>
         </nav>
      </>
   )
}