import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Reset() {

    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')

    const [error, setError] = useState('')

    async function handleReset(e) {
        e.preventDefault()

        setLoading(true)

        const res = await fetch("", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email})
        })

        if (!res.ok) {
            if (data?.error === "Email not registered") {
                setError("No account found with this email");
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
        }, 2000)
    }


    return (

        <div className="reset d-flex justify-content-center align-items-center">

            <div className="d-flex flex-row align-items-center" style={{ width: '62rem' }}>
                <div className="bg-info img-box w-50 d-flex justify-content-center" style={{ paddingRight: '10rem' }}>
                    <img src="https://img.freepik.com/premium-vector/lms-learning-management-system-vector_116137-2872.jpg" alt="" width="500rem" />
                </div>
                <div className="reset-div card w-50 d-flex align-items-center justify-content-center">

                    <form onSubmit={handleReset} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>
                        <h2 className="card-title pb-0 mb-0">Reset Password</h2>
                        <p>We'll send a reset link, If you registered.</p>
                        {
                            error && <p className="text-danger my-0 w-100 p-2 rounded-2" style={{ backgroundColor: '#ffe5e5' }}>{error}</p>
                        }
                        <div className="input-group">
                            <input type="email" id="email" placeholder=" " className="p-2 rounded-2 border-1 w-100" onChange={(e) => setEmail(e.target.value)} required value={email} />
                            <label htmlFor="email">Enter Registered Email</label>
                        </div>
                        <button type="submit" className="btn main-btn w-100 submit-btn">
                            {
                                loading ? (
                                    <div className="loading-content d-flex align-items-center justify-content-center gap-3">
                                        <div className="spinner"></div>
                                        <span className="loading-text">Loading...</span>
                                    </div>
                                ) : ('Request Link')
                            }
                        </button>
                        <div className="d-flex gap-2">
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
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-4 py-4 w-100">

                                        <div className="modal-icon-box">
                                            <FontAwesomeIcon icon={faEnvelope} className="modal-icon" />
                                        </div>
                                        <h3 className="mb-3 fw-bold modal-title text-center">Reset Link Sent Successfully!</h3>
                                        <p className="mb-3 text-center">Please check your email inbox and follow the link to reset your password.</p>

                                    </div>
                                    <div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}></button>
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

export default Reset