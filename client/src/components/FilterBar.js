import { Dropdown, Button } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
import PriceMenu from "./priceMenu";
import Title from "antd/es/typography/Title";

const items = [
  {
    label: "men's clothing",
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: "women's clothing",
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'jewelry',
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: 'electronics',
    key: '4',
  },
];


const FilterBar = () => {
  return (
    <>
      <div className="filter-bar">
        <Title level={5} style={{ margin: 0 }}>Total Products:</Title>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Button
            type="button"
            onClick={(e) => e.preventDefault()}
            style={{
              border: '1px solid grey',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            Category
            <CaretDownOutlined />
          </Button>
        </Dropdown>
        <PriceMenu />
        <Title level={5} style={{ margin: 0 }}>Current products:</Title>
      </div >
    </>

  );
}

export default FilterBar;