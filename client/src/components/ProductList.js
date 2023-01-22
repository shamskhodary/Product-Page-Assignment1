import { Card } from "antd";

const ProductList = ({ data }) => {
  return (
    <div className="cards">
      <Card
        hoverable
        style={{ width: 240, }}
        title={data.title} bordered={false}>
        <img src={data.image} alt="example" style={{ width: '100%', marginBottom: '1rem' }} />
        {"$" + data.price}
      </Card>
    </div>
  );
}

export default ProductList;