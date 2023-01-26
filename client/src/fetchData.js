import { message } from "antd";
import axios from "axios";
import { errorHandler, getAllProducts } from "./reducer/productSlice";


export const fetchData = (category, price, page) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/products`, {
      params: {
        category: category,
        sort: price,
        page: page,
      }
    });
    dispatch(getAllProducts({
      products: response.data.products, count: response.data.count,
      length: response.data.length
    }))
  } catch (error) {
    message.error(error);
    dispatch(errorHandler(error));
  }
}