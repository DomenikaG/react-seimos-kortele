import React from "react";
import { Link } from "react-router-dom";

const Discount = ({ discountData }) => {
  return (
    <>
      <Link to={`/discount/${discountData.id}`}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            src={discountData.yoast_head_json.og_image[0].url}
            style={{ width: "10%", height: "10%" }}
            alt="Nothing"
          ></img>
          <div>
            <h4>{discountData.yoast_head_json.og_title}</h4>
            <p>{discountData.yoast_head_json.og_description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Discount;
