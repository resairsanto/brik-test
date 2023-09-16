import { useState } from "react"

export default function LoginPage() {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const handleSubmit = async (e) => {
      e.preventDefault()
      setEmail("")
      setPassword("")
   }

   return (
      <div>
         <div className="container-fluid vh-100 bg-light top-padding">
            <div className="row justify-content-center vh-100 align-items-center">
               <div className="col-lg-5 col-md-6 col-sm-8 rounded-5 shadow bg-white">
                  <form onSubmit={handleSubmit} className="p-5">
                     <div className="text-center">
                        <p className="fw-bold fs-3 text-muted">SIGN <span className="text-primary">IN</span></p>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                           type="email"
                           className="form-control rounded-start-pill rounded-end-pill"
                           placeholder="example@mail.com"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
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
                        />
                     </div>
                     <button type="submit" className="btn btn-primary form-control rounded-start-pill rounded-end-pill mb-3 mt-2">Sign In</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}