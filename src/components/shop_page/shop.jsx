/* eslint-disable no-unused-vars */
import { PRODUCTS } from "../../assets/products"
import { CreateProduct }  from "./create_product"
import banner from "../../assets/Downloads/banner.gif"
import "./shop.css"
import propaganda1 from "../../assets/Downloads/propaganda1.gif"
import propaganda2 from "../../assets/Downloads/propaganda2.gif"
import garantia from "../../assets/Downloads/garantia.png"
import entrega from "../../assets/Downloads/entrega.png"
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useEffect } from "react"

export const ShopPage = () => {

  //filter javascript


  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to handle changes in checkboxes
  const handleCheckboxChange = () => {
    const filters = [];
    
    const categories = document.querySelectorAll('.categoryItem:checked');
    categories.forEach((item) => filters.push(item.value));

    let filtered = PRODUCTS.map(a => {return {...a}});

    if (filters.length > 0) {
      filtered = PRODUCTS.filter((product) =>
        filters.some((filter) => product.tags.includes(filter))
      );
    }
    if (filtered.length === 0){
      filtered = PRODUCTS.map(a => {return {...a}});
    }else{
      setFilteredProducts(filtered);
    }
    setCurrentPage(0)
  };

  if (filteredProducts.length === 0){
    setFilteredProducts(PRODUCTS.map(a => {return {...a}}));
  }

  window.onload = handleCheckboxChange;

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 24;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = filteredProducts.slice(startIndex, endIndex);

    return <div className="shop-page">

    <div className="carrosel">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={banner} className="d-block w-100 carrosel-img" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={garantia} className="d-block w-100 carrosel-img" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={entrega} className="d-block w-100 carrosel-img" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className="propaganda">
    <img className="propagandaImg" src={propaganda1} alt="" />
</div>

<div className="shop-section">
<div className="filter">
  <ul className="categories">
    <li><input type="checkbox" onChange={handleCheckboxChange} className="categoryItem" value="pocao" /> Poções</li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="arma" /> Armas</li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="longo-alcance" /> Armas de longo alcance </li>
    <li><input type="checkbox" onChange={handleCheckboxChange} className="categoryItem" value="curto-alcance" /> Armas de curto alcance </li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="protecao" /> Proteções </li>
    <li><input type="checkbox" onChange={handleCheckboxChange} className="categoryItem" value="escudo" /> Escudos</li>
    <li><input type="checkbox" onChange={handleCheckboxChange} className="categoryItem" value="armadura" /> Armaduras</li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="tomo" /> Tomos</li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="cajado" /> Cajados</li>
    <li><input type="checkbox" onChange={handleCheckboxChange}  className="categoryItem" value="magico" /> Mágia</li>
  </ul>
</div>
    
<div className="products" id="products" >
        
        {subset.map((product) => (
          <CreateProduct key={product.id} data={product} />
        ))}
        <ReactPaginate
        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      </div>
  </div>
  <div className="propaganda">
    <img className="propagandaImg" src={propaganda2} alt="" />
  </div>
  </div>
}