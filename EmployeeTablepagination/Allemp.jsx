/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllEmployes = () => {
  const [activeItem, setActiveItem] = useState("one");
  const [showComponent, setshowComponent] = useState("one");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <div class="page-wrapper">
        <div class="content container-fluid pb-0">
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title text-start">Employee</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Employee</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_employee"
                >
                  <i class="fa-solid fa-plus"></i> Add Employee
                </a>

                <div className="view-icons">
                  <Link
                    onClick={() => {
                      handleItemClick("one");
                      setshowComponent("one");
                    }}
                    className={`grid-view btn btn-link ${
                      activeItem === "one" ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-th"></i>
                  </Link>
                  <Link
                    onClick={() => {
                      handleItemClick("two");
                      setshowComponent("two");
                    }}
                    className={`list-view btn btn-link ${
                      activeItem === "two" ? "active" : ""
                    }`}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="input-block mb-3 form-focus">
                <input type="text" class="form-control floating" />
                <label class="focus-label">Employee ID</label>
              </div>
            </div>

            <div class="col-sm-6 col-md-3">
              <div class="input-block mb-3 form-focus">
                <input type="text" class="form-control floating" />
                <label class="focus-label">Employee Name</label>
              </div>
            </div>

            {/* <div class="col-sm-6 col-md-3">
              <div class="input-block mb-3 form-focus select-focus">
                <select class="select floating">
                  <option>Select Designation</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Android Developer</option>
                  <option>Ios Developer</option>
                </select>
                <label class="focus-label">Designation</label>
              </div>
            </div>   */}

            <div class="col-sm-6 col-md-3">
              <div class="input-block mb-3 form-focus select-focus">
                <select class="select floating">
                  <option>Select Designation</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Android Developer</option>
                  <option>iOS Developer</option>
                </select>
                <label class="focus-label">Designation</label>
              </div>
            </div>

            <div class="col-sm-6 col-md-3">
              <div class="d-grid">
                <a href="#" class="btn btn-success w-100">
                  Search
                </a>
              </div>
            </div>
          </div>

          {showComponent === "one" && (
            <div class="row staff-grid-row">
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">John Doe</a>
                  </h4>
                  <div class="small text-muted">Web Designer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Richard Miles</a>
                  </h4>
                  <div class="small text-muted">Web Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">John Smith</a>
                  </h4>
                  <div class="small text-muted">Android Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Mike Litorus</a>
                  </h4>
                  <div class="small text-muted">IOS Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-11.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Wilmer Deluna</a>
                  </h4>
                  <div class="small text-muted">Team Leader</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-12.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Jeffrey Warden</a>
                  </h4>
                  <div class="small text-muted">Web Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Bernardo Galaviz</a>
                  </h4>
                  <div class="small text-muted">Web Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Lesley Grauer</a>
                  </h4>
                  <div class="small text-muted">Team Leader</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Jeffery Lalor</a>
                  </h4>
                  <div class="small text-muted">Team Leader</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Loren Gatlin</a>
                  </h4>
                  <div class="small text-muted">Android Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Tarah Shropshire</a>
                  </h4>
                  <div class="small text-muted">Android Developer</div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div class="profile-widget">
                  <div class="profile-img">
                    <a href="profile.html" class="avatar">
                      <img
                        src="assets/img/profiles/avatar-08.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                  <div class="dropdown profile-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">more_vert</i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_employee"
                      >
                        <i class="fa-solid fa-pencil m-r-5"></i> Edit
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_employee"
                      >
                        <i class="fa-regular fa-trash-can m-r-5"></i> Delete
                      </a>
                    </div>
                  </div>
                  <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                    <a href="profile.html">Catherine Manseau</a>
                  </h4>
                  <div class="small text-muted">Android Developer</div>
                </div>
              </div>
            </div>
          )}

          {/* ====== Employe List ====== */}
          {showComponent === "two" && (
            <div class="row text-start">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-striped custom-table datatable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Employee ID</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th class="text-nowrap">Join Date</th>
                        <th>Role</th>
                        <th class="text-end no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              John Doe <span>Web Designer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0001</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="4e242126202a212b0e2b362f233e222b602d2123"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              Richard Miles <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0002</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="99ebf0faf1f8ebfdf4f0f5fcead9fce1f8f4e9f5fcb7faf6f4"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>18 Mar 2014</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              John Smith <span>Android Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0003</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="f3999c9b9d809e9a879bb3968b929e839f96dd909c9e"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>1 Apr 2014</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              Mike Litorus <span>IOS Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0004</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="6b0602000e07021f04191e182b0e130a061b070e45080406"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>1 Apr 2014</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-11.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              Wilmer Deluna <span>Team Leader</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0005</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="0c7b656061697e68696079626d4c69746d617c6069226f6361"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>22 May 2014</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              Jeffrey Warden <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0006</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="93f9f6f5f5e1f6eae4f2e1f7f6fdd3f6ebf2fee3fff6bdf0fcfe"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>16 Jun 2013</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar">
                              <img
                                src="assets/img/profiles/avatar-13.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">
                              Bernardo Galaviz <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0007</td>
                        <td>
                          <a
                            href="https://smarthr.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="a6c4c3d4c8c7d4c2c9c1c7cac7d0cfdce6c3dec7cbd6cac388c5c9cb"
                          >
                            [email&#160;protected]
                          </a>
                        </td>
                        <td>9876543210</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div class="dropdown">
                            <a
                              href="#"
                              class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a class="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a class="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a class="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="text-end">
                          <div class="dropdown dropdown-action">
                            <a
                              href="#"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="material-icons">more_vert</i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_employee"
                              >
                                <i class="fa-solid fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i class="fa-regular fa-trash-can m-r-5"></i>
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <div id="add_employee" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Employee</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          First Name <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Username <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Email <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" type="email" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" type="password" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Employee ID <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Joining Date
                          <span class="text-danger">*</span>
                        </label>
                        <div class="cal-icon">
                          <input
                            class="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Phone </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Company</label>
                        <select class="select">
                          <option value>Global Technologies</option>
                          <option value="1">Delta Infotech</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Department <span class="text-danger">*</span>
                        </label>
                        <select class="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Designation <span class="text-danger">*</span>
                        </label>
                        <select class="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="edit_employee" class="modal custom-modal fade" role="dialog">
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Employee</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          First Name <span class="text-danger">*</span>
                        </label>
                        <input class="form-control" value="John" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" value="Doe" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Username <span class="text-danger">*</span>
                        </label>
                        <input
                          class="form-control"
                          value="johndoe"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Email <span class="text-danger">*</span>
                        </label>
                        <input
                          class="form-control"
                          value="johndoe@example.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Password</label>
                        <input
                          class="form-control"
                          value="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Confirm Password</label>
                        <input
                          class="form-control"
                          value="johndoe"
                          type="password"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Employee ID <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          value="FT-0001"
                          readonly
                          class="form-control floating"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Joining Date
                          <span class="text-danger">*</span>
                        </label>
                        <div class="cal-icon">
                          <input
                            class="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Phone </label>
                        <input
                          class="form-control"
                          value="9876543210"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Company</label>
                        <select class="select">
                          <option>Global Technologies</option>
                          <option>Delta Infotech</option>
                          <option selected>International Software Inc</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Department <span class="text-danger">*</span>
                        </label>
                        <select class="select">
                          <option>Select Department</option>
                          <option>Web Development</option>
                          <option>IT Management</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">
                          Designation <span class="text-danger">*</span>
                        </label>
                        <select class="select">
                          <option>Select Designation</option>
                          <option>Web Designer</option>
                          <option>Web Developer</option>
                          <option>Android Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Clients</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Chats</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Assets</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input type="checkbox" checked />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                          <td class="text-center">
                            <label class="custom_check">
                              <input
                                type="checkbox"
                                name="rememberme"
                                class="rememberme"
                              />
                              <span class="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="modal custom-modal fade" id="delete_employee" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-primary continue-btn"
                      >
                        Delete
                      </a>
                    </div>
                    <div class="col-6">
                      <a
                        href="javascript:void(0);"
                        data-bs-dismiss="modal"
                        class="btn btn-primary cancel-btn"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmployes;
