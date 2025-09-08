import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function User() {

    const navigate = useNavigate()

    const [toggleNav, setToggleNav] = useState(true)
    const [showUser, setShowUser] = useState(false)
    const [hoverUser, setHoverUser] = useState(false)

    const [activeBtn, setActiveBtn] = useState(1)
    const [showContent, setShowContent] = useState(1)

    const handleClick = (id) => {
        setActiveBtn(id);
        setShowContent(id)
    };

    return (
        <div className="user">


            <div className="sticky-top user-nav px-4 d-flex align-items-center" style={{ height: '8vh' }}>

                <button className="ms-1 btn border-0 rounded-0 p-0" onClick={() => setToggleNav(!toggleNav)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>

                <h1 className="mt-1 ms-5 fw-bold LMS">LMS</h1>

                {/* <input type="text" placeholder="Search here" name="" id="" className="ms-2 p-1 px-3 rounded border-1 search-box"/> */}

                <button className="btn border-0 ms-auto d-flex align-items-center gap-2 user-name py-0" onClick={() => setShowUser(!showUser)} onMouseEnter={() => setHoverUser(true)} onMouseLeave={() => setHoverUser(false)}>

                    <div className="fw-medium">User Name</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" className="mt-1">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>


                    {
                        showUser && (
                            <div className="user-options py-2 d-flex flex-column">
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                                        <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
                                    </svg>
                                    Dashboard

                                </button>
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                    Profile

                                </button>
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3 border-top border-2" onClick={() => navigate('/')}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1z" />
                                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                    </svg>
                                    Logout

                                </button>
                            </div>
                        )
                    }

                    {
                        hoverUser && (
                            <div className="user-options py-2 d-flex flex-column">
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                                        <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
                                    </svg>
                                    Dashboard

                                </button>
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                    Profile

                                </button>
                                <button className="btn border-0 rounded-0 d-flex align-items-center gap-3 border-top border-2" onClick={() => navigate('/')}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1z" />
                                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                    </svg>
                                    Logout

                                </button>
                            </div>
                        )
                    }

                </button>

            </div>



            <div className="main-area d-flex">

                {
                    toggleNav ? (
                        <div className="left-nav d-flex flex-column px-3 py-3" style={{ height: '92vh', width: '17vw' }}>

                            <button className={`btn border-0 d-flex align-items-center gap-3 px-3 ${activeBtn === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-collection-play" viewBox="0 0 16 16">
                                    <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z" />
                                    <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z" />
                                </svg>
                                Lectures

                            </button>

                            <button className={`btn border-0 d-flex align-items-center gap-3 px-3 ${activeBtn === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg>
                                Quiz

                            </button>

                            <button className={`btn border-0 d-flex align-items-center gap-3 px-3 ${activeBtn === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                </svg>
                                Tests

                            </button>

                        </div>
                    ) : (
                        <div className="left-nav2 d-flex flex-column py-3" style={{ height: '92vh', width: '' }}>

                            <button className={`btn border-0 d-flex flex-column align-items-center gap-1 ${activeBtn === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-collection-play" viewBox="0 0 16 16">
                                    <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z" />
                                    <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z" />
                                </svg>


                            </button>

                            <button className={`btn border-0 d-flex flex-column align-items-center gap-1 ${activeBtn === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg>

                            </button>

                            <button className={`btn border-0 d-flex flex-column align-items-center gap-1 ${activeBtn === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                </svg>

                            </button>

                        </div>
                    )
                }


                <div className="content">
                    <div className={`${showContent === 1 ? "d-block" : "d-none"} p-3 pt-0`}>
                        <div className="sticky-top pt-3 bg-whit">
                            <div className="container d-flex gap-2 p-0 align-items-center">
                                <button className="btn border-black rounded-1">All</button>
                                <button className="btn border-black rounded-1">YouTube Lectures</button>
                                <button className="btn border-black rounded-1">Live Lectures</button>
                                <button className="btn border-black rounded-1">Completed Lectures</button>
                            </div>
                            <div className="container mt-2" style={{ backgroundColor: '#a1a1a1ff', height: '0.05rem' }}></div>
                        </div>

                        <div className="content">
                            <div className="d-flex justify-content-center fw-bold fs-5 text-secondary mt-5"  style={{ height: '150vh' }}>No Lecture found!</div>
                        </div>
                    </div>
                    <div className={`${showContent === 2 ? "d-block" : "d-none"} p`} style={{ height: '150vh' }}>
                        <div className="d-flex justify-content-center fw-bold fs-5 text-secondary mt-5">No Quiz found!</div>
                    </div>
                    <div className={`${showContent === 3 ? "d-block" : "d-none"} p`} style={{ height: '150vh' }}>
                        <div className="d-flex justify-content-center fw-bold fs-5 text-secondary mt-5">No Test found!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User