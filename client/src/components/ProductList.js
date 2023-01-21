import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const ProductList = ({ data }) => {
  return (
    <div className="cards">
      <Card
        hoverable
        style={{ width: 240, }}
        cover={<img alt="example" src={data.image} />}
      >
        <Meta title={data.title} description="$price" />
      </Card>
    </div>
  );
}

export default ProductList;