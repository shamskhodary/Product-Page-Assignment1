import { useEffect } from "react";
import ProductList from './ProductList'
import FilterBar from "./FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../reducer/productSlice";
import { Alert, Pagination } from "antd";
import Typography from "antd/es/typography/Typography";
import { fetchData } from "../fetchData";
const { Title } = Typography

const ProductContainer = () => {
  const data = useSelector((state) => state.products);
  const { price, category, page, error } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    const cacheKey = `products`;
    const expiration = localStorage.getItem(`${cacheKey}-expiration`);

    if (!expiration || new Date() >= new Date(expiration)) {
      dispatch(fetchData(category, price, page))
    }
  }, [dispatch, category, price, page]);

  const handlePagination = (e) => {
    dispatch(setPage(e))
  }

  let len = data?.length;
  let count = data?.count;

  return (
    <>
      {error && <Alert message={error} type="error" />}
      {data && <FilterBar length={len} count={count} />}

      <div className="product-page">

        {data?.products && data?.products.map((e) => <ProductList data={e} key={e.id} />)}
        {data?.products.length === 0 && <Title level={4} style={{ margin: '0 auto' }}>No Products Found</Title>}
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} onChange={handlePagination} />
      </div>
    </>

  );
}

export default ProductContainer;