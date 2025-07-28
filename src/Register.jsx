import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Register() {

    const [modal, setModal] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    function handleRegister(e) {
        e.preventDefault()
        setModal(true)
        setEmail('')
        setPassword('')
        setConfPassword('')
    }


    return (

        <div className="register d-flex justify-content-center align-items-center pt-5">

            <div className="card d-flex flex-row" style={{ width: '62rem' }}>
                <div className="w-50 d-flex justify-content-center">
                    <img src="https://img.freepik.com/premium-vector/lms-learning-management-system-vector_116137-2872.jpg" alt="" width="500rem" />
                </div>
                <div className="w-50 d-flex align-items-center justify-content-center">

                    <form onSubmit={handleRegister} className=" d-flex flex-column align-items-center gap-3" style={{ width: '20rem' }}>
                        <h2 className="card-title pb-0 mb-0">Register</h2>
                        <p className="mb-4">Create Your New Account</p>
                        <input type="email" placeholder="Enter Email" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setEmail(e.target.value)} required value={email} />
                        <input type="password" placeholder="Create Password" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setPassword(e.target.value)} required value={password} />
                        <input type="password" placeholder="Confirm Password" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setConfPassword(e.target.value)} required value={confPassword} />
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
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
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="d-flex flex-column align-items-center ms-3 py-4 w-100">

                                        <h3 className="mb-3 fw-bold text-success">You Registered Successfully!</h3>
                                        <p className="mb-4">Please go back to Homepage for Login</p>
                                        <button className="btn btn-success" onClick={() => setModal(false)}>OK</button>
                                    
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