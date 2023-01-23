import { useEffect } from "react";
import axios from 'axios';
import ProductList from './ProductList'
import FilterBar from "./FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler, getAllProducts, productsLength, setPage, totalValue } from "../reducer/productSlice";
import { Alert, message, Pagination } from "antd";
import Typography from "antd/es/typography/Typography";
const { Title } = Typography

const ProductContainer = () => {
  const products = useSelector((state) => state.products);
  const { price, category, page, error } = useSelector((state) => state)
  const dispatch = useDispatch();


  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/products`, {
          params: {
            category: category,
            sort: price,
            page: page,
          }
        });
        dispatch(getAllProducts(response.data.products));
        dispatch(productsLength(response.data.length));
        dispatch(totalValue(response.data.count));

      } catch (error) {
        message.error(error)
        dispatch(errorHandler(error))
      }
    }
    allProducts()

  }, [dispatch, category, price, page]);

  const handlePagination = (e) => {
    dispatch(setPage(e))
  }

  return (
    <>
      {error && <Alert message={error} type="error" />}
      {products && <FilterBar />}

      <div className="product-page">
        {products && products.map((e) => <ProductList data={e} key={e.id} />)}
        {!products.length && <Title level={4} style={{ margin: '0 auto' }}>No Products Found</Title>}
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} onChange={handlePagination} />
      </div>
    </>

  );
}

export default ProductContainer;