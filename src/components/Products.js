import React from "react";
import { Card } from "react-bootstrap";
import products from "../products";
import './font.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="flex row justify-content-center">
         <Carousel responsive={responsive}>
      {products.map((product) => (
         
        <Card
          className="bg-transparent"
          style={{ width: "25rem", border: "0" }}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="font-link" ><h6 style={{fontsize:'0.5rem'}}>{product.name}</h6></Card.Title>
            <Card.Text className="font-link ">
              $ {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
          
          ))}
         </Carousel>;

    </div>
  );
};

export default Products;