import React from "react";
import "./ProductionLineManagement.css";
import { Card, Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../Pages/Header";
import Sidebar from "../../Pages/Sidebar";

const ProductionLineManagement = () => {

  const navigate = useNavigate();

  const goTosetup = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="material-container card">
        <Container className="mt-4">
          <div className="card-header d-flex justify-content-between align-items-center">
          <button
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={goTosetup}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="text-center">Production Line Page</h2>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
          <Col>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      <i className="bi bi-funnel"></i> Filters
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-download"></i> Download
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr class="table-header">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Product Count</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Col>
          <br />
          <hr />
          <Col>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="text-center">
                    Product List For Production Line
                  </h2>
                </div>
                

                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Product To Production Line
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div className="card p-3">
                        <h3 class="text-center">
                          Select To Add Product To Production Line
                        </h3>
                          <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                              <thead>
                                <tr class="table-header">
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th>Variance</th>
                                  <th>Category</th>
                                  <th>Product Family</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                          </div>
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end">
                              <li className="page-item disabled">
                                <a
                                  className="page-link"
                                  href="#"
                                  tabIndex="-1"
                                  aria-disabled="true"
                                >
                                  Previous
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-success">
                          Add Selected
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default ProductionLineManagement;