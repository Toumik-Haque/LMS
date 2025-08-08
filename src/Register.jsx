import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Register() {

    const [modal, setModal] = useState(true)
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const [error, setError] = useState('')

    const isDisabled = loading;

    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    async function handleRegister(e) {
        e.preventDefault()

        if (password !== confPassword) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true)
        setError('')

        const res = await fetch("", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (!res.ok) {
            if (data?.error === "User already exists") {
                setError("User already exists with this email");
            } else {
                setError("Registration failed. Please try again.");
            }
            setLoading(false);
            return;
        }

        setTimeout(() => {

            setLoading(false)
            setModal(true)
            setEmail('')
            setPassword('')
            setConfPassword('')

        }, 3000)
    }


    return (

        <div className="register d-flex justify-content-center align-items-center">

            <div className="d-flex flex-row align-items-center " style={{ width: '70rem', height: '75vh' }}>
                
                <div className="img-box w-50 d-flex justify-content-center " style={{height: '100%'}}>
                    <img src="/LMS/register-img.png" alt="" />
                </div>

                <div className="register-div w-50 d-flex align-items-center justify-content-center" style={{ height: '100%'}}>

                    <form onSubmit={handleRegister} className="d-flex flex-column align-items-center gap-3" style={{ width: '20rem'}}>
                        <h2 className="card-title pb-0 mb-0">Register</h2>
                        <p className="mb-4">Create Your New Account</p>
                        {
                            error && <p className="text-danger my-0 w-100 p-2 rounded-2" style={{ backgroundColor: '#ffe5e5' }}>{error}</p>
                        }
                        <div className="input-group">
                            <input type="email" id="email" placeholder=" " className="p-2 rounded-2 border-1 w-100" onChange={(e) => setEmail(e.target.value)} required value={email} />
                            <label htmlFor="email">Enter Email</label>
                        </div>
                        <div className="input-group">
                            <input type={showPassword ? "text" : "password"} id="password" placeholder=" " className="p-2 rounded-2 border-1 w-100" onChange={(e) => setPassword(e.target.value)} required value={password} />
                            <label htmlFor="password">Create Password</label>
                            {
                                password && (
                                    <span onClick={() => setShowPassword(!showPassword)} className="pass-icon">
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                )
                            }
                        </div>
                        <div className="input-group">
                            <input type={showConfPassword ? "text" : "password"} id="confirm-pass" placeholder=" " className="p-2 rounded-2 border-1 w-100" onChange={(e) => setConfPassword(e.target.value)} required value={confPassword} />
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            {
                                confPassword && (
                                    <span onClick={() => setShowConfPassword(!showConfPassword)} className="pass-icon">
                                        <FontAwesomeIcon icon={showConfPassword ? faEyeSlash : faEye} />
                                    </span>
                                )
                            }
                        </div>

                        <button type="submit" className="btn main-btn w-100 submit-btn" disabled={isDisabled}>
                            {
                                loading ? (
                                    <div className="loading-content d-flex align-items-center justify-content-center gap-3">
                                        <div className="spinner"></div>
                                        <span className="loading-text">Loading...</span>
                                    </div>
                                ) : ('Submit')
                            }
                        </button>
                        <div className="d-flex gap-2">
                            <p>Already registered?</p>
                            <Link to={'/'} className="text-decoration-none">Back to Homepage</Link>
                        </div>
                    </form>
                </div>

            </div>

            {
                modal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered modal-fade-in">
                            <div className="modal-content">
                                <div className="px-4">
                                    <div className="d-flex flex-column align-items-center py-4 w-100">

                                        <div className="modal-icon-box">
                                            <FontAwesomeIcon icon={faCheck} className="modal-icon" style={{ width: '2.8rem' }} />
                                        </div>
                                        <h3 className="mb-3 fw-bold modal-title">You Registered Successfully!</h3>
                                        <p className="mb-4">Please go back to Homepage for Login</p>
                                        <button className="btn main-btn" onClick={() => setModal(false)}>OK</button>

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

export default Register