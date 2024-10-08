import React from "react";
import { Products } from "../data/Product";
const ProductCart = (props) => {
  // buat variable props dan mengambil data dari data product
  const handleClick = (nama) => {
    alert('Kamu klik mobil '+nama);
  };
  return (
    <div className="cards">
      <img style={{
        width: '100%',
        height: "200px",
        borderRadius: "10px 30px 0px 0px",
      }}
        src= {props.imageURL}
        alt=''
      />
      <div className="container">
        <h4>
                  <b>{props.nama}</b>
        </h4>
        <p>{props.deskripsi}</p>

        <button onClick={() => handleClick(props.nama)}>Klik dah coba</button>
        {/* button onClik={()} kurung kurawal sebagai pengganti Function */}
        {/* mengambil variable props yang udah disimpen nama buat lanjut function  */}
      </div>
    </div>
  );
};




export default ProductCart