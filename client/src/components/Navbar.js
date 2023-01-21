import { Typography } from "antd";
const { Title } = Typography;

const Navbar = () => {
  return (
    <>
      <header>
        <Title level={4}>Avion</Title>
      </header>
      <div className="image">
        <Title
          level={4}
          style={{
            color: "#eee",
            position: "absolute",
            top: "8rem",
            paddingLeft: "1rem",
          }}
        >
          All Products
        </Title>
      </div>
    </>
  );
};

export default Navbar;
