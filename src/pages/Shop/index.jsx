import React from "react";
import "./style.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((api) => setData(api));
  });

  return (
    <div className="shop">
      <div className="cards">
        {data.map((item) => (
          <Link to={"/shop/" + item.id}>
            <div className="card" key={item.id}>
              <img  src={item.image} alt={item.name} />
              <button className="heart">
                <i class="fa-solid fa-heart"></i>
              </button>
              <p className="price">
                <span>$</span>
                {item.price}
              </p>
              <button className="add">Add basket</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
