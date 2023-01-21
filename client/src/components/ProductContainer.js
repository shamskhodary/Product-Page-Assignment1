import { useEffect } from "react";
import axios from 'axios';
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { cachedAPI, errorHandler, getAllProducts } from "../reducer/productSlice";

const ProductContainer = () => {
  const products = useSelector((state) => state.cached.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      console.log('new')
      const allProducts = async () => {
        try {
          const response = await axios.get('/api/v1/products');
          dispatch(getAllProducts(response.data));
          dispatch(cachedAPI(response.data));
        } catch (error) {
          dispatch(errorHandler(error))
        }
      }
      allProducts()
    } else {
      console.log('old');
      dispatch(getAllProducts(products));
    }

  }, [products, dispatch]);

  return (
    <>
      <FilterBar />
      <div className="product-page">
        {products && products.map((e) => <ProductList data={e} key={e.id} />)}
      </div>

    </>

  );
}

export default ProductContainer;