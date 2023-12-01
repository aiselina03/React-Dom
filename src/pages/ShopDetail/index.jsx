import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss"
function ShopDetail() {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((api) => setData(api));
  }, [id]);
  return (
  <div className="shopdetail">
      <div className="card">
        <img width={280} src={data.image} alt="" />
        <p className="price">
          <span>$</span>
          {data.price}
        </p>
      </div>
  </div>
  );
}

export default ShopDetail;
