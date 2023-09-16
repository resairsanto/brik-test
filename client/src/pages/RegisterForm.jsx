import { useState } from "react"
import { submitRegister } from "../store/actions/actionCreator"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterPage() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleSubmit = async (e) => {
      e.preventDefault()
      await dispatch(submitRegister({ email, password }))
      setEmail("")
      setPassword("")
      navigate("/login")
   }

   return (
      <div>
         <div className="container-fluid vh-100 bg-light top-padding">
            <div className="row justify-content-center vh-100 align-items-center">
               <div className="col-lg-5 col-md-6 col-sm-8 rounded-5 shadow bg-white">
                  <form onSubmit={handleSubmit} className="px-5 pt-5 pb-3">
                     <div className="text-center">
                        <p className="fw-bold fs-3 text-muted">SIGN <span className="text-primary">UP</span></p>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                           type="email"
                           className="form-control rounded-start-pill rounded-end-pill"
                           placeholder="example@mail.com"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           required
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                           type="password"
                           className="form-control rounded-start-pill rounded-end-pill"
                           placeholder="*********"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           required
                        />
                     </div>
                     <button type="submit" className="btn btn-primary form-control rounded-start-pill rounded-end-pill mb-1 mt-2">Sign Up</button>
                  </form>
                  <div className="text-center mb-4 text-muted">
                     Already a member? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}