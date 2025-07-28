import { Link, useNavigate } from "react-router-dom"

function Admin() {

    const navigate = useNavigate()

    return (
        <div className="user d-flex">
            <div className="d-flex flex-column px-3 bg-primary" style={{ height: '100vh', width: '17vw' }}>

                <h1 className="fw-bold text-white my-3 ">LMS</h1>
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="nav-links">
                        <Link className="text-white nav-link">Admin Dashboard</Link>
                    </div>
                    <button className="btn btn-danger rounded-5 mb-5" onClick={() => navigate('/')}>Logout</button>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Admin