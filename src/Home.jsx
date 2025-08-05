
import { Link, Element } from "react-scroll"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {

    const [userModal, setUserModal] = useState(false)
    const [adminModal, setAdminModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false);

    const [loginError, setLoginError] = useState('');

    const [toggleNav, setToggleNav] = useState(false)

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

        <div className="d-flex flex-column home">
            <div className="sticky-top" >
                <div className="container d-flex justify-content-between align-items-center nav" style={{ height: '10vh' }}>

                    <Link to="hero" offset={-window.innerHeight * 0.15}>
                        <h1 className="fw-bold LMS link">LMS</h1>
                    </Link>

                    <div className="nav-btns">
                        <button className="btn sub-btn rounded-5 px-3 me-3 fw-medium" onClick={() => setAdminModal(true)}>Admin Login</button>
                        <button className="btn main-btn rounded-5 px-3 fw-medium" onClick={() => setUserModal(true)}>Login / Register</button>
                    </div>

                    {
                        toggleNav ? (
                            <FontAwesomeIcon icon={faXmark} className="d-none toggle" onClick={() => setToggleNav(false)} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="d-none toggle" onClick={() => setToggleNav(true)} />
                        )
                    }


                </div>
            </div>

            {
                toggleNav && (
                    <div className="bottom-nav d-none">
                        <button className="btn sub-btn rounded-5 px-3 me-3 fw-medium" onClick={() => {setAdminModal(true), setToggleNav(false)}}>Admin Login</button>
                        <button className="btn main-btn rounded-5 px-3 fw-medium" onClick={() => {setUserModal(true), setToggleNav(false)}}>Login / Register</button>
                    </div>
                )
            }

            <div className="main">
                <Element name="hero" className="hero">
                    <div className="container d-flex p-0" style={{ height: '75vh' }}>
                        <div className="w-50 d-flex flex-column justify-content-center align-items-start box">
                            <h1 className="fw-bold home-title" style={{ fontSize: '4rem' }}>
                                <div>Empower Your Learning Journey</div>
                                <div className="text-secondary mt-1" style={{ fontSize: '3rem' }}>Anywhere Anytime</div>
                            </h1>
                            <h5 className="home-subtitle w-75">Access quality courses from top instructors who are passionate about your success.</h5>
                            <div className="d-flex gap-3 btn-box">
                                <button className="hero-btn fw-medium btn main-btn fs-5 py-2 px-4 rounded-0" onClick={() => setUserModal(true)}>Start Learning ⟶</button>
                                <Link to="after-hero" offset={-window.innerHeight * 0.1} className="text-center hero-btn link fw-medium fs-5 py-2 px-4 rounded-0 view-btn text-decoration-none">
                                    View Details ⟶
                                </Link>
                            </div>
                        </div>
                        <div className="w-50 d-flex align-items-center justify-content-end mt-4 img-box" >
                            <img src="/homeimage.png" alt="" width="800vw" className="hero-img" />
                        </div>
                    </div>
                </Element>

                <Element id="after-hero" className="after-hero d-flex flex-column justify-content-center mt-3 mb-5" >

                    <div className="div-box container rounded-3 d-flex align-items-center">
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/live-icon.png" alt="" className="my-2" height="50vh" />
                            <h5 className="mt-2">Real-Time</h5>
                            <h6>Interactive Classes</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/test-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">1000+</h5>
                            <h6>Quizzes & Tests</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/dashboard-icon.png" alt="" className="" height="60vh" />
                            <h5 className="mt-2">Progress</h5>
                            <h6>Monitoring Dashboard</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRight: '#6a00ff' }}>
                            <img src="/247-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">24/7</h5>
                            <h6>Unlimited Access</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center" style={{ height: '5rem', width: '100%' }}>
                            <img src="/learn-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">Learn From</h5>
                            <h6>Qualified Teachers</h6>
                        </div>
                    </div>

                </Element>
            </div>

            <div className="my-4 container last-box" >
                <h2 className="text-center fw-bold">Students’ Choice for Smarter Learning</h2>
                <p className="text-center fs-5 mt-3">Experience personalized learning, expert guidance & real results — all in one place.</p>

                <div className="card-box d-flex justify-content-center mt-5 d-flex gap-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#f1eaffff' }}>
                        <h1 className="fw-bold text">15000+</h1>
                        <div className="text">Happy Students</div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#fffeefff' }}>
                        <h1 className="fw-bold text">1000+</h1>
                        <div className="text">Quizzes & Tests</div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#fef0f0ff' }}>
                        <h1 className="fw-bold text">200+</h1>
                        <div className="text">Video Lectures</div>
                    </div>
                </div>
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
                                                <div onClick={() => navigate('/reset')} className="link text-decoration-none">Forgot Password?</div>
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
                                            <div className="d-flex gap-1 align-items-center justify-content-center">
                                                <p>Have no account?</p>
                                                <p onClick={() => navigate('/register')} className="text-decoration-none link">Register</p>
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
                                                <div onClick={() => navigate('/reset')} className="text-decoration-none link">Forgot Password?</div>
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