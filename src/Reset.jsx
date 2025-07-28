import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Reset() {

    const [modal, setModal] = useState(false)

    const [email, setEmail] = useState('')

    function handleReset(e) {
        e.preventDefault()
        setModal(true)
        setEmail('')
    }


    return (

        <div className="register d-flex justify-content-center align-items-center pt-5">

            <div className="card d-flex flex-row" style={{ width: '62rem' }}>
                <div className="w-50 d-flex justify-content-center">
                    <img src="https://img.freepik.com/premium-vector/lms-learning-management-system-vector_116137-2872.jpg" alt="" width="500rem" />
                </div>
                <div className="w-50 d-flex align-items-center justify-content-center">

                    <form onSubmit={handleReset} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>
                        <h2 className="card-title pb-0 mb-0">Reset Password</h2>
                        <p>We'll send a reset link, If you registered.</p>
                        <input type="email" placeholder="Enter Registered Email" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setEmail(e.target.value)} required value={email} />                      
                        <button type="submit" className="btn btn-primary w-100">Request Link</button>
                        <div className="d-flex gap-2">
                            <Link to={'/'} className="text-decoration-none">Back to Homepage</Link>
                        </div>
                    </form>
                </div>
            </div>

            {
                modal && (
                    <div className="modal d-block modal-bg" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header d-flex align-items-start">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100">

                                        <h3 className="mb-3 fw-medium text-warning">Reset Link Sent Successfully!</h3>
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