import { Card } from "antd";

const ProductList = ({ data }) => {
  return (
    <div className="cards">
      <Card
        hoverable
        style={{ width: 240, }}
        title={data.title} bordered={false}>
        <img src={data.image} alt="example" style={{
          width: '80%',
          margin: "auto",
          height: "200px",
          display: "block",
          marginBottom: '1rem'
        }} />
        {"$" + data.price}
      </Card>
    </div>
  );
}

export default ProductList;