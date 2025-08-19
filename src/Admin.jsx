import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Admin() {

    const navigate = useNavigate()

    const [addLecture, setAddLecture] = useState(false)
    const [addQuiz, setAddQuiz] = useState(false)
    const [addTest, setAddTest] = useState(false)
    const [showUser, setShowUser] = useState(false)

    const [activeBtn, setActiveBtn] = useState(0)
    const [showContent, setShowContent] = useState(0)

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [link, setLink] = useState("")

    const handleClick = (id) => {
        setActiveBtn(id);
        setShowContent(id)
    };

    function handleAddLecture() { }

    return (
        <div className="admin">


            <div className="sticky-top admin-nav px-4 d-flex align-items-center justify-content-between" style={{ height: '8vh' }}>

                <h1 className="mt-1 fw-bold LMS ms-2">LMS</h1>
                <h1 className="mt-2 fs-3 ms-4">Admin Panel</h1>
                <button className="btn border-0 text-danger rounded-3 d-flex align-items-center gap-2 me-3" onClick={() => navigate('/')}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                        <path d="M7.5 1v7h1V1z" />
                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                    </svg>
                    Logout

                </button>

            </div>


            <div className="content">
                <div className={`${showContent === 0 ? "d-block" : "d-none"}`}>

                    <div className="main-area d-flex">

                        <button className={`btn d-flex flex-column align-items-center gap-3 px-3 ${activeBtn === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-collection-play" viewBox="0 0 16 16">
                                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z" />
                                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z" />
                            </svg>
                            Upload Lectures
                        </button>

                        <button className={`btn d-flex flex-column align-items-center gap-3 px-3 ${activeBtn === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                            </svg>
                            Upload Quiz
                        </button>

                        <button className={`btn d-flex flex-column align-items-center gap-3 px-3 ${activeBtn === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                            </svg>
                            Upload Tests
                        </button>

                    </div>

                </div>

                <div className={`${showContent === 1 ? "d-block" : "d-none"} lecture`}>
                    <div className="page-path fw-medium d-flex justify-content-center">
                        <button className="btn border-0 p-0 me-2" onClick={() => handleClick(0)} style={{ color: '#7830ff' }}>Home</button>
                        <div className="me-2">/</div>
                        Uploaded Lectures
                    </div>
                    <div className="px-5 d-flex justify-content-center align-items-center mt-5 w-100 gap-3">

                        <input type="search" name="" id="" placeholder="Search Lecture" className="px-2 py-2 w-50" />
                        <button className="btn upload-btn py-2 px-3 d-flex align-items-center gap-2" onClick={() => setAddLecture(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                            <div>Add New Lecture</div>
                        </button>
                    </div>

                    {
                        addLecture && (
                            <div className="modal d-block modal-bg" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-fade-in">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <form onSubmit={handleAddLecture} className="d-flex flex-column align-items-center gap-3" style={{ width: '' }}>

                                                <h4>Add New Lecture</h4>
                                                <div className="d-flex flex-column gap-1 couple">
                                                    <label htmlFor="title">Lecture Title:</label>
                                                    <input type="text" id="title" placeholder="Enter Lecture Title" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setTitle(e.target.value)} required value={title} />
                                                </div>
                                                <div className="d-flex flex-column gap-1 couple">
                                                    <label htmlFor="category">Lecture Category:</label>
                                                    <select name="category" id="category" className="p-2 rounded-2 border-1 w-100" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                        <option value="">Select</option>
                                                        <option value="YouTube">YouTube Lecture</option>
                                                        <option value="Live">Live Lecture</option>
                                                    </select>
                                                </div>
                                                {
                                                    category === "YouTube" && (
                                                        <div className="d-flex flex-column gap-1 couple">
                                                            <label htmlFor="link">YouTube Link:</label>
                                                            <input type="text" id="link" placeholder="Enter YouTube Link" className="p-2 rounded-2 border-1 w-100" onChange={(e) => setLink(e.target.value)} required value={link} />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    category === "Live" && (
                                                        <div className="d-flex flex-column gap-1 couple">
                                                            <label htmlFor="thumbnail">Lecture Thumbnail:</label>
                                                            <input type="file" name="thumbnail" id="thumbnail" className="p-2 rounded-2 border-1 w-100" />
                                                        </div>
                                                    )
                                                }

                                                <div className="mt-4 d-flex gap-2 align-items-center justify-content-center">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ width: '6rem' }} onClick={() => setAddLecture(false)}>Cancel</button>
                                                    <button type="button" className="btn text-white" style={{ backgroundColor: '#7830ff', width: '6rem' }}>Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className={`${showContent === 2 ? "d-block" : "d-none"} quiz h-50 bg-warning`}>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => handleClick(0)}>BACK</button>
                        Quiz Here</div>
                </div>

                <div className={`${showContent === 3 ? "d-block" : "d-none"} test h-25 bg-secondary`}>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => handleClick(0)}>BACK</button>
                        Tests Here</div>
                </div>
            </div>
        </div>
    )
}

export default Admin