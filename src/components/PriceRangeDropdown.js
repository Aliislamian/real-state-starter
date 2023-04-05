import React, {useState,  useContext} from 'react';
// import icons
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

//import handeles  ui
import {Menu } from '@headlessui/react';
// import house context
import {HouseContext} from './HouseContext';
const PriceRangeDropdown = () => {
  const {price , setPrice} = useContext(HouseContext);
  // console.log(properties);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value : 'price range (any)'
    },
    {
      value : '110000 - 170000'
    },
    {
      value : '130000 - 160000'
    },
    {
      value : '160000 - 190000'
    },
    {
      value : '220000 - 250000'
    },
    {
      value : '250000 - 280000'
    },
    {
      value : '310000 - 340000'
    },
    {
      value : '340000 - 400000'
    },
  ]

  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
      <div className='text-[15px] font-medium leading-tight'>{price}</div>
      <div className='text-[13px]'>Choose Price range</div>
      </div>
      {
        isOpen ? (  <RiArrowDownSLine className='dropdown-icon-secondary' />  ) : ( < RiArrowUpSLine className='dropdown-icon-secondary' /> )
      }
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item className='cursor-pointer hover:text-violet-700 transition' onClick={() => setPrice(price.value)} as='li' key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
    </Menu.Items>
    </Menu>
};

export default PriceRangeDropdown;


