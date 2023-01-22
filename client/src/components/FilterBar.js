import { Menu } from 'antd';
import Title from 'antd/es/typography/Title';
import { useEffect } from 'react';
import axios from 'axios';
import { setPrice, setCategory, setFields } from '../reducer/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const FilterBar = () => {
  const { total, length, fields } = useSelector((state) => state);
  const dispatch = useDispatch();

  const items = [
    {
      label: 'Category',
      children: fields,
    },
  ];

  const items2 = [
    {
      label: 'Price',
      children: [
        {
          label: 'Highest to lowest',
          key: '0',
        },
        {
          label: 'Lowest to highest',
          key: '1',
        },
      ],
    },
  ];

  useEffect(() => {
    const allCategories = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/v1/products/categories`,
      );
      dispatch(setFields(response.data));
    };
    allCategories();
  }, [dispatch]);

  const handleFilter = (key) => {
    const selected = fields.find((e) => +e['key'] === +key);
    dispatch(setCategory(selected['label']));
  };

  const handlePrice = (val) => {
    if (+val === 0) {
      dispatch(setPrice('highest'));
    }

    if (+val === 1) {
      dispatch(setPrice('lowest'));
    }
  };
  return (
    <>
      <div className="filter-bar">
        <Title level={5} style={{ margin: 0 }}>
          Total Products: {length}
        </Title>
        <Menu
          onClick={(e) => handleFilter(e.key)}
          mode="horizontal"
          items={items}
        />
        <Menu
          mode="horizontal"
          items={items2}
          onClick={(e) => handlePrice(e.key)}
        />

        <Title level={5} style={{ margin: 0 }}>
          Total price: {total}
        </Title>
      </div>
    </>
  );
};

export default FilterBar;
