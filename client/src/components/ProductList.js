import { Card } from "antd";

const ProductList = ({ data }) => {
  return (
    <div className="cards">
      <Card
        hoverable
        style={{ width: 240, }}
        title={data.title} bordered={false}>
        <img src={data.image} alt="example" style={{
          width: '100px',
          margin: "0 auto",
          height: "170px",
          display: "block",
          marginBottom: '1rem'
        }} />
        {"$" + data.price}
      </Card>
    </div>
  );
}

export default ProductList;