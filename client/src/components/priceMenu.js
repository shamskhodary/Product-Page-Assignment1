import { Button, Dropdown } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';


const items = [
  {
    label: "highest to lowest",
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: "lowest to highest",
    key: '1',
  },
]

const PriceMenu = () => {
  return (
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
        Price
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
}

export default PriceMenu;