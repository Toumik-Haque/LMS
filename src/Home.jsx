import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {

    const [userModal, setUserModal] = useState(false)
    const [adminModal, setAdminModal]  = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function userLogin() {
        navigate("/user")
    }

    function adminLogin() {
        navigate("/admin")
    }


    return (

        <div className="home d-flex flex-column justify-content-center" style={{ height: '100vh' }}>
            <div className="d-flex justify-content-between align-items-center px-5 nav fixed-top" style={{ height: '10vh', width: '100vw' }}>

                <h1 className="fw-bold text-primary">LMS</h1>
                <div className="nav-links">
                    <button className="btn btn-outline-primary rounded-5 px-3 me-3" onClick={() => setAdminModal(true)}>Admin Block</button>
                    <button className="btn btn-primary rounded-5 px-3" onClick={() => setUserModal(true)}>Login / Register</button>
                </div>
            </div>

            <div className="home-img" style={{ height: '80vh' }}></div>

            {
                userModal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100">

                                        <h2 className="mb-3 fw-bold">Login</h2>
                                        <p className="mb-4">Please Enter Your Login Credential</p>
                                        <form onSubmit={userLogin} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>

                                            <input type="email" placeholder="Email" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setEmail(e.target.value)} />
                                            <input type="password" placeholder="Password" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setPassword(e.target.value)} />
                                            <div className="d-flex" style={{gap: '5.8rem', fontSize: '0.9rem'}}>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input border-1 border-dark" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                                </div>
                                                <Link to={'/reset'} className="text-decoration-none">Forgot Password?</Link>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                            <div className="d-flex gap-1">
                                                <p>Have no account?</p>
                                                <Link to={'/register'} className="text-decoration-none">Register</Link>
                                            </div>
                                        </form>

                                    </div>
                                    <div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setUserModal(false)}></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }

            {
                adminModal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100">

                                        <h2 className="mb-3 fw-bold">Admin Login</h2>
                                        <p className="modal-title  mb-4">Please Enter Admin Login Credential</p>
                                        <form onSubmit={adminLogin} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>

                                            <input type="email" placeholder="Email" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setEmail(e.target.value)} />
                                            <input type="password" placeholder="Password" className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setPassword(e.target.value)} />
                                            <div className="d-flex" style={{gap: '5.8rem', fontSize: '0.9rem'}}>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input border-1 border-dark" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                                </div>
                                                <Link to={'/reset'} className="text-decoration-none">Forgot Password?</Link>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                                        </form>

                                    </div>
                                    <div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setAdminModal(false)}></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )

}

export default Home