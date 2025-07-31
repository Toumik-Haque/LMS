
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Home() {

    const [userModal, setUserModal] = useState(false)
    const [adminModal, setAdminModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false);

    const [loginError, setLoginError] = useState('');

    const isDisabled = isLoading;

    async function userLogin(e) {
        e.preventDefault()
        setIsLoading(true);
        setLoginError('');

        const res = await fetch("", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (res.ok && data?.token) {
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                setIsLoading(false);
                navigate("/user");
            }, 3000);
        } else {
            setLoginError(data?.error || "Wrong email or password");
            setIsLoading(false);
        }

    }

    async function adminLogin(e) {
        e.preventDefault()
        setIsLoading(true);
        setLoginError('');

        const res = await fetch("", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (res.ok && data?.token) {
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                setIsLoading(false);
                navigate("/admin");
            }, 3000);
        } else {
            setLoginError(data?.error || "Wrong email or password");
            setIsLoading(false);
        }
    }


    return (

        <div className="home d-flex flex-column" style={{ height: '100vh' }}>
            <div className="d-flex justify-content-between align-items-center px-5 nav" style={{ height: '10vh', width: '100vw' }}>

                <h1 className="fw-bold LMS">LMS</h1>
                <div className="nav-links">
                    <button className="btn sub-btn rounded-5 px-3 me-3 fw-medium" onClick={() => setAdminModal(true)}>Admin Block</button>
                    <button className="btn main-btn rounded-5 px-3 fw-medium" onClick={() => setUserModal(true)}>Login / Register</button>
                </div>
            </div>

            <div className="home-img d-flex align-items-end justify-content-center" style={{ height: '80vh' }}>
                <span className="fw-bold mb-5 home-text" style={{ fontSize: '2rem' }}>Learning Management System</span>
            </div>

            {
                userModal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered modal-fade-in">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100">

                                        <h2 className="mb-3 fw-bold">Login</h2>
                                        <p className="mb-4">Please Enter Your Login Credential</p>
                                        <form onSubmit={userLogin} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>

                                            {
                                                loginError && <p className="text-danger my-0 w-100 p-2 rounded-2" style={{ backgroundColor: '#ffe5e5' }}>{loginError}</p>
                                            }
                                            <div className="input-group">
                                                <input type="email" id="email" placeholder=" " className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="input-group">
                                                <input type={showPassword ? "text" : "password"} id="password" placeholder=" " className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="password">Password</label>
                                                {
                                                    password && (
                                                        <span onClick={() => setShowPassword(!showPassword)} className="pass-icon">
                                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                        </span>
                                                    )
                                                }
                                            </div>
                                            <div className="d-flex remember-box" style={{ gap: '5.8rem', fontSize: '0.9rem' }}>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input border-1 border-dark" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                                </div>
                                                <Link to={'/reset'} className="text-decoration-none">Forgot Password?</Link>
                                            </div>
                                            <button type="submit" className="btn main-btn w-100 submit-btn" disabled={isDisabled}>
                                                {
                                                    isLoading ? (
                                                        <div className="loading-content d-flex align-items-center justify-content-center gap-3">
                                                            <div className="spinner"></div>
                                                            <span className="loading-text">Loading...</span>
                                                        </div>
                                                    ) : ('Submit')
                                                }
                                            </button>
                                            <div className="d-flex gap-1">
                                                <p>Have no account?</p>
                                                <Link to={'/register'} className="text-decoration-none">Register</Link>
                                            </div>
                                        </form>

                                    </div>
                                    <div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setUserModal(false); setLoginError(''); }}></button>
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
                        <div className="modal-dialog modal-dialog-centered modal-fade-in">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100 my-3">

                                        <h2 className="mb-3 fw-bold">Admin Login</h2>
                                        <p className="mb-4">Please Enter Admin Login Credential</p>
                                        <form onSubmit={adminLogin} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>

                                            {
                                                loginError && <p className="text-danger my-0 w-100 p-2 rounded-2" style={{ backgroundColor: '#ffe5e5' }}>{loginError}</p>
                                            }
                                            <div className="input-group">
                                                <input type="email" id="email" placeholder=" " className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="input-group">
                                                <input type={showPassword ? "text" : "password"} id="password" placeholder=" " className="p-2 rounded-2 border-1 w-100" required onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="password">Password</label>
                                                {
                                                    password && (
                                                        <span onClick={() => setShowPassword(!showPassword)} className="pass-icon">
                                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                        </span>
                                                    )
                                                }
                                            </div>
                                            <div className="d-flex remember-box" style={{ gap: '5.8rem', fontSize: '0.9rem' }}>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input border-1 border-dark" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                                </div>
                                                <Link to={'/reset'} className="text-decoration-none">Forgot Password?</Link>
                                            </div>
                                            <button type="submit" className="btn main-btn w-100 submit-btn" disabled={isDisabled}>
                                                {
                                                    isLoading ? (
                                                        <div className="loading-content d-flex align-items-center justify-content-center gap-3">
                                                            <div className="spinner"></div>
                                                            <span className="loading-text">Loading...</span>
                                                        </div>
                                                    ) : ('Submit')
                                                }
                                            </button>
                                        </form>

                                    </div>
                                    <div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setAdminModal(false); setLoginError(''); }}></button>
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