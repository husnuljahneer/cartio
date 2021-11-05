import React from "react";
import { Card } from "react-bootstrap";
import products from "../products";
import './font.css'

const Products = () => {
  return (
    <div className="flex row justify-content-center">
      {products.map((product) => (
        
        <Card
          className="bg-transparent"
          style={{ width: "20rem", border: "0" }}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="font-link">{product.name}</Card.Title>
            <Card.Text className="font-link ">
              $ {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;
