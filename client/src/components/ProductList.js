import { Card, Pagination } from "antd";
import Meta from "antd/es/card/Meta";

const ProductList = () => {
  return (
    <div className="product-page">
      <div className="cards">
        <Card
          hoverable
          style={{ width: 240, }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="$price" />
        </Card>
        <Card
          hoverable
          style={{ width: 240, }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="$price" />
        </Card>
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default ProductList;