import { Menu } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import axios from "axios";


const FilterBar = ({ length, total, setCategory }) => {
  const [fields, setFields] = useState([]);

  const items = [
    {
      label: 'Category',
      children: fields
    }
  ]

  useEffect(() => {
    const allCategories = async () => {
      const response = await axios.get(`http://localhost:3001/api/v1/products/categories`);
      setFields(response.data)
    }
    allCategories()
  }, [])

  const handleFilter = (key) => {
    const selected = fields.find((e) => +e['key'] === +key)
    setCategory(selected['label']);
  }

  const items2 = [
    {
      label: "Price",
      children: [
        {
          label: "highest to lowest",
          key: '0',
        },
        {
          label: "lowest to highest",
          key: '1',
        },
      ]
    },

  ]
  return (
    <>
      <div className="filter-bar">
        <Title level={5} style={{ margin: 0 }}>Total Products:  {length}</Title>
        <Menu onClick={(e) => handleFilter(e.key)} mode="horizontal" items={items} />
        <Menu mode="horizontal" items={items2} />

        <Title level={5} style={{ margin: 0 }}>Total price: {total}</Title>
      </div >
    </>

  );
}

export default FilterBar;