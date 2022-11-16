import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="/">
            <span className="align-middle">Jobs</span>
          </Link>
          <div className="sidebar-user">
            <div className="d-flex justify-content-center">
              <div className="flex-shrink-0">
                <img
                  src="img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />
              </div>
              <div className="flex-grow-1 ps-2">
                <Link
                  className="sidebar-user-title"
                  to="/"
                  data-bs-toggle="dropdown"
                >
                  Charles Hall
                </Link>

                <div className="sidebar-user-subtitle">Designer</div>
              </div>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/interview">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Interview Platform</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/applied-jobs">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Applied Jobs</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/trained-jobs">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Trained Jobs</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/summery">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Summery</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="index.html">
                <i className="align-middle" data-feather="home"></i>{" "}
                <span className="align-middle">Home</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="add-skill.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Add Skills</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="job-rec.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Job Recommndation</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="add-questions.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Add Questions</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="assesment.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Assesment</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="profile.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Profile</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="leader-board.html">
                <i className="align-middle" data-feather="layout"></i>{" "}
                <span className="align-middle">Leader Board</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
