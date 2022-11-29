import React from 'react'
import Cards from "../components/Cards";
import { useEffect, useState } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);

  function getAllProducts() {
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container">
      <h3 className="text-center mt-5 text-uppercase">Spaghetti makers</h3>
      <div className="container py-4">
        <div className="row">
          {products.length > 0 ? (
            products.map((item, index) => {
              return (
                
                <Cards
                key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  tagline={item.tagline}
                  price={item.price}
                />
              );
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
