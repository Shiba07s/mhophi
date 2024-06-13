import React, { useState } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import Header from "../../Pages/Header";
import Sidebar from "../../Pages/Sidebar";

const handleBackClick = (navigate) => {
  navigate(-1);
};

function ManageProducts() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productFamily, setProductFamily] = useState("");

  const handleAdd = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const handleSave = () => {
    if (productName && description && category && productFamily) {
      const newProduct = {
        name: productName,
        description,
        category,
        productFamily,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setDescription("");
      setCategory("");
      setProductFamily("");
      setShowForm(false);
    }
  };

  const handleRemove = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="material-container">
        <div className="card ">
          <div className="card m-2">
            <Row className="align-items-center">
              <Col xs="auto">
                <Button
                  className="custom-button"
                  onClick={() => handleBackClick(navigate)}
                >
                  <ArrowLeft />
                </Button>
              </Col>
              <Col>
                <Card.Title style={{ color: "black", textAlign: "center" }}>
                  <h2>Products Detail Page</h2>
                </Card.Title>
              </Col>
              <Col xs="auto">
                <Button
                  className="custom-button"
                  onClick={() => handleBackClick(navigate)}
                >
                  <CachedIcon />
                </Button>
              </Col>
              <Col xs="auto">
                <Button className="custom-button" onClick={handleAdd}>
                  <AddIcon />
                </Button>
              </Col>
            </Row>
          </div>

          {showForm && (
            <div className="form-overlay">
              <div className="form-container">
                <div className="card m-2 p-3">
                  <Form>
                    <Row className="justify-content-center mb-3">
                      <Col xs="auto">
                        <h4>Add New Product</h4>
                      </Col>
                    </Row>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formProductName"
                    >
                      <Form.Label column xs={5} md={3}>
                        Product Name
                      </Form.Label>
                      <Col xs={7} md={9}>
                        <Form.Control
                          type="text"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formDescription"
                    >
                      <Form.Label column xs={5} md={3}>
                        Description
                      </Form.Label>
                      <Col xs={7} md={9}>
                        <Form.Control
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formCategory"
                    >
                      <Form.Label column xs={5} md={3}>
                        Category
                      </Form.Label>
                      <Col xs={7} md={9}>
                        <Form.Control
                          type="text"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formProductFamily"
                    >
                      <Form.Label column xs={5} md={3}>
                        Product Family
                      </Form.Label>
                      <Col xs={7} md={9}>
                        <Form.Control
                          type="text"
                          value={productFamily}
                          onChange={(e) => setProductFamily(e.target.value)}
                        />
                      </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="primary"
                        className="me-2 mt-2"
                        onClick={() => {
                          setProductName("");
                          setDescription("");
                          setCategory("");
                          setProductFamily("");
                        }}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="secondary"
                        className="mt-2"
                        onClick={handleSave}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}

          <div className="card m-2">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr className="table-header">
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Product Family</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.category}</td>
                      <td>{product.productFamily}</td>
                      <td>
                        <Button
                          className="custom-button"
                          onClick={() => handleRemove(index)}
                        >
                          <HighlightOffIcon />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .form-container {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}

export default ManageProducts;
