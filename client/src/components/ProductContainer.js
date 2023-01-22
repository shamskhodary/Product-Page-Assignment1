import { useEffect, useState } from "react";
import axios from 'axios';
import ProductList from './ProductList'
import FilterBar from "./FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler, getAllProducts, productsLength, totalValue } from "../reducer/productSlice";
import { Pagination } from "antd";


const ProductContainer = () => {
  const products = useSelector((state) => state.products);
  const { price, category } = useSelector((state) => state)
  const dispatch = useDispatch();


  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/products`, {
          params: {
            category: category,
            sort: price
          }
        });
        dispatch(getAllProducts(response.data.products));
        dispatch(productsLength(response.data.length));
        dispatch(totalValue(response.data.count));

      } catch (error) {
        dispatch(errorHandler(error))
      }
    }
    allProducts()

  }, [dispatch, category, price]);

  return (
    <>
      {products && <FilterBar />}

      <div className="product-page">
        {products && products.map((e) => <ProductList data={e} key={e.id} />)}
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>

  );
}

export default ProductContainer;