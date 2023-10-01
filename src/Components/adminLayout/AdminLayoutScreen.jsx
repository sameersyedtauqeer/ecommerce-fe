import React, { useEffect, useState } from "react";
import { Dropdown, NavLink } from "react-bootstrap";
import {
    BiBell,
    BiChat,
    BiCheckCircle,
    BiCog,
    BiComment,
    BiHomeCircle,
    BiIdCard,
    BiLineChart,
    BiLogOutCircle,
    BiMenu,
    BiRadioCircleMarked,
    BiSearch,
    BiUser,
    BiPaperPlane,
    BiHome,
    BiAddToQueue,
} from "react-icons/bi";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import profile from "../../assets/Images/r-img1.png";
// import useAccountMaster from "./useAdmin";
// import AppImages from "../../Helpers/AppImages";
// import { Applogger } from "../../Helpers/AppLogger";
// import useAccountMaster from "./Hooks/useAccountMaster";
// import useMaster from "./Hooks/useAccountMaster";
import "../../assets/css/sidebar.css";
import { logout } from "../../Redux/Slices/authSlice";
import { fetchData, putData } from "../../ApiConstant/api";

const AdminLayout = () => {
    // const { themes } = useSelector((state) => state.themeReducer);
    // const { user } = useSelector((state) => state.authReducer);
    // const { token } = useSelector((state) => state.auth);
    const [notifi, setNotifi] = useState([]);
    const [status, setStatus] = useState("");

    const handleNotification = () => {
        fetchData("notification")
            .then((res) => {
                setNotifi(res?.data)
            })
    }

    const handleUpdateStatus = (event) => {
        event.preventDefault();
        const data = { orderStatus: status }
        putData("notification", data)
            .then((result) => {
                // setEditValue("")
                // setShow(false)
                // setRefresh(!refresh)
                // toast.success(result?.message)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        handleNotification();
    }, [])

    console.log("notifi ====== ", notifi)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    const [onHover, setOnHover] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleShow = (show, active) => {
        document.getElementById(active).classList.toggle("mm-active");
        document.getElementById(show).classList.toggle("mm-show");
    };



    // const [
    //     toggle,
    //     setToggle,
    //     onHover,
    //     setOnHover,
    //     theme,
    //     setTheme,
    //     handleShow,
    //     handleSwitch,
    //     handleThemeswitch,
    //     handleLogout,
    // ] = useAccountMaster();

    // if (!user?.access_token) {
    //     console.log("/login");
    //     return <Navigate to="/login" replace={true} />;
    // }
    // if (user?.data?.role_name === "Franchise") {
    //     return (
    //         <Navigate
    //             to={`${user?.data?.franchise?.business_hash}/home`}
    //             replace={true}
    //         />
    //     );
    // }
    return (
        <>
            <div
                className={`wrapper ${toggle ? "toggled" : ""} ${onHover ? "sidebar-hovered" : ""
                    }`}
            >
                {/*sidebar wrapper */}
                <div
                    className="sidebar-wrapper"
                    data-simplebar="true"
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                >
                    <div className="sidebar-header">
                        {/* <div>
              <img
                src="assets/images/logo-icon.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div> */}
                        <div>
                            <h4 className="logo-text">PetaCare</h4>
                        </div>
                        <div
                            className="toggle-icon ms-auto"
                            onClick={() => setToggle(!toggle)}
                        >
                            <BsArrowLeftSquareFill />
                        </div>
                    </div>
                    {/*navigation*/}
                    <ul className="metismenu mm-show" id="menu">
                        {/* <li className="menu-label">UI Elements</li> */}
                        {/* <li>
              <Link to="/home" className="text-decoration-none">
                <div className="parent-icon d-flex">
                  <BiHomeCircle />
                </div>
                <div className="menu-title">Home</div>
              </Link>
            </li> */}

                        {/* <li>
              <Link to="/pipeline" className="text-decoration-none">
                <div className="parent-icon d-flex">
                  <BiCheckCircle />
                </div>
                <div className="menu-title">Pipeline</div>
              </Link>
            </li> */}

                        {/* <li>
              <Link to="/conversation" className="text-decoration-none">
                <div className="parent-icon d-flex">
                  <BiChat />
                </div>
                <div className="menu-title">Conversation</div>
              </Link>
            </li> */}

                        {/* <li>
              <Link to="/contact" className="text-decoration-none">
                <div className="parent-icon d-flex">
                  <BiIdCard />
                </div>
                <div className="menu-title">Contacts</div>
              </Link>
            </li> */}

                        {/* <li id="active1">
              <a
                className="has-arrow"
                onClick={() => handleShow("show1", "active1")}
                role="button"
              >
                <div className="parent-icon">
                  <BiLineChart />
                </div>
                <div className="menu-title">Funnels & Websites</div>
              </a>
              <ul className="mm-collapse mm-colapsing" id="show1">
                <li>
                  <Link to="/websites">
                    <BiRadioCircleMarked className="s-3" />
                    Websites
                  </Link>
                </li>
                <li>
                  <Link to="/funnels">
                    <BiRadioCircleMarked className="s-3" />
                    Funnels
                  </Link>
                </li>
              </ul>
            </li> */}

                        {/* <li id="account">
                            <a
                                className="has-arrow"
                                onClick={() => handleShow("show2", "account")}
                                role="button"
                            >
                                <div className="parent-icon">
                                    <BiLineChart />
                                </div>
                                <div className="menu-title">Hmme</div>
                            </a>
                            <ul className="mm-collapse mm-colapsing" id="show2">
                                <li>
                                    <Link to="/account">
                                        <BiRadioCircleMarked className="s-3" />
                                        Accounts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add-account">
                                        <BiRadioCircleMarked className="s-3" />
                                        Add Account
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        {/* <li id="role">
                            <a
                                className="has-arrow"
                                onClick={() => handleShow("show3", "role")}
                                role="button"
                            >
                                <div className="parent-icon">
                                    <BiLineChart />
                                </div>
                                <div className="menu-title">Roles & Permissions</div>
                            </a>
                            <ul className="mm-collapse mm-colapsing" id="show3">
                                <li>
                                    <Link to="/roles">
                                        <BiRadioCircleMarked className="s-3" />
                                        Roles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/permissions">
                                        <BiRadioCircleMarked className="s-3" />
                                        Permissions
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        <li>
                            <Link to="/" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiHome />
                                </div>
                                <div className="menu-title">Home</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/products" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiAddToQueue />
                                </div>
                                <div className="menu-title">Add Products</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/add-category" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiAddToQueue />
                                </div>
                                <div className="menu-title">Category</div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/add-brands" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiAddToQueue />
                                </div>
                                <div className="menu-title">Brands</div>
                            </Link>
                        </li>

                        <li>
                            <Link to={"/orders"} className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiAddToQueue />
                                </div>
                                <div className="menu-title">Orders</div>
                            </Link>
                        </li>

                        <li>
                            <Link to={"/admin-setting"} className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <AiFillSetting />
                                </div>
                                <div className="menu-title">Setting</div>
                            </Link>
                        </li>

                        <li>
                            <Link onClick={handleLogout} className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiLogOutCircle />
                                </div>
                                <div className="menu-title">Logout</div>
                            </Link>
                        </li>

                        {/* <li>
                            <Link to="/setting" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    <BiCog />
                                </div>
                                <div className="menu-title">Setting</div>
                            </Link>
                        </li> */}
                    </ul>
                    {/*end navigation*/}
                </div>

                <header>
                    <div className="topbar d-flex align-items-center">
                        <nav className="navbar navbar-expand">
                            <div
                                className="mobile-toggle-menu"
                                onClick={() => setToggle(!toggle)}
                            >
                                <BiMenu />
                            </div>
                            {/* <div className="search-bar flex-grow-1">
                                <div className="position-relative search-bar-box">
                                    <input
                                        type="text"
                                        className="form-control bg-transparent search-control"
                                        placeholder="Type to search..."
                                    />
                                    <span className="position-absolute top-50 search-show translate-middle-y">
                                        <BiSearch />
                                    </span>
                                    <span className="position-absolute top-50 search-close translate-middle-y">
                                        <i className="bx bx-x" />
                                    </span>
                                </div>
                            </div> */}
                            <div className="top-menu ms-auto">
                                <ul className="navbar-nav align-items-center">
                                    {/* <li className="nav-item mobile-search-icon">
                                        <a className="nav-link" href="#">
                                            <BiSearch />
                                        </a>
                                    </li> */}

                                    {/* <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-category" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="row row-cols-3 g-3 p-3">
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-group" />
                          </div>
                          <div className="app-title">Teams</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-atom" />
                          </div>
                          <div className="app-title">Projects</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-shield" />
                          </div>
                          <div className="app-title">Tasks</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-notification" />
                          </div>
                          <div className="app-title">Feeds</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-file" />
                          </div>
                          <div className="app-title">Files</div>
                        </div>
                        <div className="col text-center">
                          <div className="app-box mx-auto">
                            <i className="bx bx-filter-alt" />
                          </div>
                          <div className="app-title">Alerts</div>
                        </div>
                      </div>
                    </div>
                  </li> */}

                                    <Dropdown className="nav-item dropdown dropdown-large notification-dropdown">
                                        <Dropdown.Toggle
                                            as={NavLink}
                                            className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative "

                                        >
                                            <span className="alert-count">7</span>
                                            <BiBell />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                            <a href="!#">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Notifications</p>
                                                    <p className="msg-header-clear ms-auto">
                                                        Marks all as read
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="header-notifications-list overflow-auto">

                                                {Array.isArray(notifi) && notifi.length > 0 ? (
                                                    notifi.map((items, index) => {
                                                        return (
                                                            <>
                                                                <Link key={index} to={`/orders-detail/${items?.order_id}/${items?._id}`} className={`dropdown-item ${items?.is_read ? "" : "bg-light"}`} >
                                                                    <div className={`d-flex py-1 align-items-center`}>
                                                                        {/* <div className="notify">
                                                            <i className="bx bx-group" />
                                                        </div> */}
                                                                        <div className="flex-grow-1">

                                                                            <h6 className="msg-name text-secondary">
                                                                                {items?.title}
                                                                                <span className="msg-time float-end text-secondary">
                                                                                    #{items?.order_no}
                                                                                </span>
                                                                            </h6>
                                                                            {/* <p className="msg-info text-secondary">#10201</p> */}
                                                                            <p className="msg-info text-secondary">
                                                                                {items?.address}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </>
                                                        )
                                                    })
                                                ) :
                                                    <>
                                                        No Notification Found
                                                    </>}


                                                {/* <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex py-1 align-items-center">
                                                       
                                                        <div className="flex-grow-1">

                                                            <h6 className="msg-name text-secondary">
                                                                New Customers
                                                                <span className="msg-time float-end text-secondary">
                                                                    #10201
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info text-secondary">1 j gulshan-e-iqbal sector 2</p>
                                                        </div>
                                                    </div>
                                                </a> */}

                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer bg-dark">
                                                    View All Notifications
                                                </div>
                                            </a>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="nav-item dropdown dropdown-large">
                                        <Dropdown.Toggle
                                            as={NavLink}
                                            className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        // href="#"
                                        // role="button"
                                        // data-bs-toggle="dropdown"
                                        // aria-expanded="false"
                                        >
                                            <span className="alert-count">8</span>
                                            <BiComment />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end me">
                                            <a href="javascript:;">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Messages</p>
                                                    <p className="msg-header-clear ms-auto">
                                                        Marks all as read
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="header-message-list overflow-auto">
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Daisy Anderson
                                                                <span className="msg-time float-end">
                                                                    5 sec ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                The standard chunk of lorem
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Althea Cabardo
                                                                <span className="msg-time float-end">
                                                                    14 sec ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                Many desktop publishing packages
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Oscar Garner
                                                                <span className="msg-time float-end">
                                                                    8 min ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                Various versions have evolved over
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Katherine Pechon
                                                                <span className="msg-time float-end">
                                                                    15 min ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                Making this the first true generator
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Amelia Doe
                                                                <span className="msg-time float-end">
                                                                    22 min ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                Duis aute irure dolor in reprehenderit
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Cristina Jhons
                                                                <span className="msg-time float-end">
                                                                    2 hrs ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                The passage is attributed to an unknown
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                James Caviness
                                                                <span className="msg-time float-end">
                                                                    4 hrs ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                The point of using Lorem
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Peter Costanzo
                                                                <span className="msg-time float-end">
                                                                    6 hrs ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                It was popularised in the 1960s
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                David Buckley
                                                                <span className="msg-time float-end">
                                                                    2 hrs ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                Various versions have evolved over
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Thomas Wheeler
                                                                <span className="msg-time float-end">
                                                                    2 days ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                If you are going to use a passage
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img
                                                                src={profile}
                                                                className="msg-avatar"
                                                                alt="user avatar"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">
                                                                Johnny Seitz
                                                                <span className="msg-time float-end">
                                                                    5 days ago
                                                                </span>
                                                            </h6>
                                                            <p className="msg-info">
                                                                All the Lorem Ipsum generators
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer">
                                                    View All Messages
                                                </div>
                                            </a>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ul>
                            </div>

                            {/* <Dropdown className="user-box">
                                <Dropdown.Toggle
                                    as={NavLink}
                                    className="d-flex align-items-center nav-link dropdown-toggle-nocaret"
                                >
                                    <img
                                        src={profile}
                                        className="user-img"
                                        alt="user avatar"
                                    />
                                    <div className="user-info ps-3">
                                        <p className="user-name mb-0">Pauline Seitz</p>
                                        <p className="designattion mb-0">Web Designer</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="javascript:;">
                                            <BiUser size={16} className="me-2" />
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="javascript:;">
                                            <BiCog size={16} className="me-2" />
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="javascript:;">
                                            <BiHomeCircle size={16} className="me-2" />
                                            <span>Dashboard</span>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="dropdown-divider mb-0" />
                                    </li>
                                    <li>
                                        <a
                                            role="button"
                                            className="dropdown-item"
                                            onClick={handleLogout}
                                        >
                                            <BiLogOutCircle size={16} className="me-2" />
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </nav>
                    </div>
                </header >

                <div className="page-wrapper">
                    <div className="page-content">
                        <Outlet />
                    </div>
                </div>

                <div className="overlay toggle-icon"></div>

                {/* <footer className="page-footer">
          <p className="mb-0">Copyright © 2023. All right reserved.</p>
        </footer> */}
            </div >
            {/* 
            <div className="switcher-wrapper " id="switcher">
                <div className="switcher-btn" >
                    <BiCog className="bx-spin" />
                </div>
                <div className="switcher-body">
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0 text-uppercase s-12">Theme Customizer</h5>
                        <button
                            type="button"
                            className="btn-close ms-auto close-switcher"
                            aria-label="Close"

                        ></button>
                    </div>
                    <hr />
                    <p className="mb-0 text-center">Gaussian Texture</p>
                    <hr />

                    <ul className="switcher">
                        <li
                            id="themeSeasside"
                            onClick={() => handleThemeswitch("bg-theme bg-theme-seaside")}
                        ></li>

                        <li
                            id="theme1"
                            onClick={() => handleThemeswitch("bg-theme bg-theme1")}
                        ></li>
                        <li
                            id="theme2"
                            onClick={() => handleThemeswitch("bg-theme bg-theme2")}
                        ></li>
                        <li
                            id="theme3"
                            onClick={() => handleThemeswitch("bg-theme bg-theme3")}
                        ></li>
                        <li
                            id="theme4"
                            onClick={() => handleThemeswitch("bg-theme bg-theme4")}
                        ></li>
                        <li
                            id="theme5"
                            onClick={() => handleThemeswitch("bg-theme bg-theme5")}
                        ></li>
                        <li
                            id="theme6"
                            onClick={() => handleThemeswitch("bg-theme bg-theme6")}
                        ></li>
                    </ul>
                    <hr />
                    <p className="mb-0 text-center">Gradient Background</p>
                    <hr />

                    <ul className="switcher">
                        <li
                            id="theme7"
                            onClick={() => handleThemeswitch("bg-theme bg-theme7")}
                        ></li>
                        <li
                            id="theme8"
                            onClick={() => handleThemeswitch("bg-theme bg-theme8")}
                        ></li>
                        <li
                            id="theme9"
                            onClick={() => handleThemeswitch("bg-theme bg-theme9")}
                        ></li>
                        <li
                            id="theme10"
                            onClick={() => handleThemeswitch("bg-theme bg-theme10")}
                        ></li>
                        <li
                            id="theme11"
                            onClick={() => handleThemeswitch("bg-theme bg-theme11")}
                        ></li>
                        <li
                            id="theme12"
                            onClick={() => handleThemeswitch("bg-theme bg-theme12")}
                        ></li>
                        <li
                            id="theme13"
                            onClick={() => handleThemeswitch("bg-theme bg-theme13")}
                        ></li>
                        <li
                            id="theme14"
                            onClick={() => handleThemeswitch("bg-theme bg-theme14")}
                        ></li>
                        <li
                            id="theme15"
                            onClick={() => handleThemeswitch("bg-theme bg-theme15")}
                        ></li>
                    </ul>
                </div>
            </div> */}
        </>
    );
};

export default AdminLayout;