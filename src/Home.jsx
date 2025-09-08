
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

        <div className="d-flex flex-column">
            <div className="sticky-top nav-box" >
                <div className="container d-flex justify-content-between align-items-center nav" style={{ height: '10vh' }}>

                    <Link to="hero" offset={-window.innerHeight * 0.15}>
                        <h1 className="mt-2 fw-bold LMS link">LMS</h1>
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
                        <button className="btn sub-btn rounded-5 px-3 me-3 fw-medium" onClick={() => { setAdminModal(true), setToggleNav(false) }}>Admin Login</button>
                        <button className="btn main-btn rounded-5 px-3 fw-medium" onClick={() => { setUserModal(true), setToggleNav(false) }}>Login / Register</button>
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
                            <img src="/LMS/homeimage.png" alt="" width="800vw" className="hero-img" />
                        </div>
                    </div>
                </Element>

                <Element id="after-hero" className="after-hero d-flex flex-column justify-content-center mt-3 mb-5" >

                    <div className="div-box container rounded-3 d-flex align-items-center">
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/LMS/live-icon.png" alt="" className="my-2" height="50vh" />
                            <h5 className="mt-2">Real-Time</h5>
                            <h6>Interactive Classes</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/LMS/test-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">1000+</h5>
                            <h6>Quizzes & Tests</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRightColor: '#6a00ff' }}>
                            <img src="/LMS/dashboard-icon.png" alt="" className="" height="60vh" />
                            <h5 className="mt-2">Progress</h5>
                            <h6>Monitoring Dashboard</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center border-end border-2" style={{ height: '5rem', width: '100%', borderRight: '#6a00ff' }}>
                            <img src="/LMS/247-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">24/7</h5>
                            <h6>Unlimited Access</h6>
                        </div>
                        <div className="py-0 d-flex flex-column align-items-center justify-content-center" style={{ height: '5rem', width: '100%' }}>
                            <img src="/LMS/learn-icon.png" alt="" className="" height="65vh" />
                            <h5 className="mt-2">Learn From</h5>
                            <h6>Qualified Teachers</h6>
                        </div>
                    </div>

                </Element>
            </div>

            <div className="mt-4 container last-box mb-5" >
                <h2 className="text-center fw-bold">Students’ Choice for Smarter Learning</h2>
                <p className="text-center fs-5 mt-3">Experience personalized learning, expert guidance & real results — all in one place.</p>

                <div className="card-box d-flex justify-content-center mt-5 d-flex gap-4">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#eae0ffff' }}>
                        <h1 className="fw-bold text">15000+</h1>
                        <div className="text">Happy Students</div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#fffde2ff' }}>
                        <h1 className="fw-bold text">1000+</h1>
                        <div className="text">Quizzes & Tests</div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-4 card border-0" style={{ height: '15rem', width: '17rem', backgroundColor: '#dbffe5ff' }}>
                        <h1 className="fw-bold text">200+</h1>
                        <div className="text">Video Lectures</div>
                    </div>
                </div>
            </div>

            <div className="review-section mt-5">
                <h2 className="text-center fw-bold mt-3">Discover the Joy of Learning</h2>
                <p className="text-center fs-5 mt-3">Real experiences from learners</p>

                <div className="d-flex container justify-content-between mt-5">

                    <div className="review-card link p-4 d-flex flex-column" style={{ height: '15rem', width: '26rem' }}>
                        <div className="fw-bold fs-5 d-flex gap-2 align-items-center LMS">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            Aditi Sharma
                        </div>
                        <p className="mt-3">"This LMS made my learning so much easier! The live classes and quizzes kept me engaged, and I love how I can access everything anytime, anywhere."</p>
                        <button className="py-1 px-2 rounded-2 verify-badge ms-auto mt-auto d-flex align-items-center gap-1 border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                            </svg>
                            <p className="m-0">Verified Learner</p>
                        </button>
                    </div>

                    <div className="review-card link p-4 d-flex flex-column" style={{ height: '15rem', width: '26rem' }}>
                        <div className="fw-bold fs-5 d-flex gap-2 align-items-center LMS">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            Rahul Verma
                        </div>
                        <p className="mt-3">"The progress dashboard really helped me track my improvement. It feels like I have a personal mentor guiding me step by step."</p>
                        <button className="py-1 px-2 rounded-2 verify-badge ms-auto mt-auto d-flex align-items-center gap-1 border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                            </svg>
                            <p className="m-0">Verified Learner</p>
                        </button>
                    </div>

                    <div className="review-card link p-4 d-flex flex-column" style={{ height: '15rem', width: '26rem' }}>
                        <div className="fw-bold fs-5 d-flex gap-2 align-items-center LMS">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            Sneha Patel
                        </div>
                        <p className="mt-3">"I’ve attended many online platforms, but this LMS stands out with its interactive classes and clear video lectures. Highly recommended for every student!"</p>
                        <button className="py-1 px-2 rounded-2 verify-badge ms-auto mt-auto d-flex align-items-center gap-1 border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                            </svg>
                            <p className="m-0">Verified Learner</p>
                        </button>
                    </div>

                </div>
            </div>


            <div className="container new-box d-flex justify-content-center mb-5">
                <div className="d-flex justify-content-between rounded-2 border-0 big-box" style={{ height: '25rem', width: '100%', backgroundColor: '#ae89feff' }}>
                    <div className="d-flex flex-column p-5 ms-3 justify-content-center">
                        <h3 className="fw-bold">Building a Strong Foundation for Every Learner’s Future</h3>
                        <p className="fs-5 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill me-3" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                            Personalized study plans for better results.
                        </p>
                        <p className="fs-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill me-3" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                            Learn with the support of experienced teachers.
                        </p>
                        <p className="fs-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill me-3" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                            All covered from concept clarity to skill-building.
                        </p>
                        <button className="w-25 mt-4 btn main-btn fs-5 py-1 rounded-0" onClick={() => setUserModal(true)}>Start Now</button>
                    </div>
                    <div className="w-25 d-flex align-items-end justify-content-end" >
                        <img src="/LMS/new-box.png" alt="" height="85%" className="me-5" />
                    </div>
                </div>
            </div>


            <div className="footer mt-5 pt-3" style={{ height: '20rem', backgroundColor: 'rgba(238, 238, 238, 1)' }}>
                <div className="container px-0 d-flex">
                    <div className="" style={{ width: '65%' }}>
                        <div className="d-flex align-items-end py-0">
                            <span className="p-0 fs-1 fw-bold LMS" >LMS</span>
                            <div className="ms-3 mb-3" style={{ backgroundColor: '#7830ff', height: '0.2rem', width: '10rem' }}></div>
                        </div>
                        <p className="footer-text">The Learning Management System (LMS) is designed to make education smarter and simpler. From live interactive classes and quizzes to video lectures and progress tracking, we bring everything together to ensure students learn effectively anytime, anywhere.</p>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end pb-2" style={{ width: '35%' }}>
                        <div className="d-flex gap-5 mb-2">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin text-black" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x text-black" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook text-black" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram text-black" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                        </div>
                        <Link to="hero" offset={-window.innerHeight * 0.15}>
                            <button className="border-1 mb-3 py-2 px-5 mt-4">BACK TO TOP</button>
                        </Link>
                    </div>
                </div>

                <div className="container mt-3" style={{ backgroundColor: '#a1a1a1ff', height: '0.05rem', width: '' }}></div>
                
                <div className="container px-0 mt-4 d-flex justify-content-between">
                    <div className="">© 2025 LMS. All rights reserved.</div>
                    <div className="">
                        Designed by Mark 10,
                        <a href="https://webdzen.in/" target="_blank" className="link LMS text-decoration-none"> WebDzen</a>
                    </div>
                </div>
            </div>

            {
                userModal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered modal-fade-in">
                            <div className="modal-content">

                                <button type="button" className="btn-close align-self-end mt-3 me-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setUserModal(false); setLoginError(''); }}></button>
                                <div className="px-5 d-flex flex-column align-items-center pb-4">
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
                                        <div className="d-flex remember-box justify-content-between w-100" style={{ fontSize: '0.9rem' }}>
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
                                <button type="button" className="btn-close align-self-end mt-3 me-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setAdminModal(false); setLoginError(''); }}></button>
                                <div className="px-5 d-flex flex-column align-items-center pb-5">


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
                                        <div className="d-flex remember-box justify-content-between w-100" style={{ fontSize: '0.9rem' }}>
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

                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    )

}

export default Home