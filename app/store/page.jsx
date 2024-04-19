'use client' 
import transition from "../transition";
import StoreItem from '@components/StoreItem';
import { ItemsList } from '@public/data/items';

const Store = () => {
  return (
    <div className='store font-poppinsfont'>
      <div className='mt-2 text-2xl font-poppinsfont'>Currently in Store</div>
      <div className='storeList'>
        {ItemsList.map((item) => (
          <StoreItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            company={item.company}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default transition(Store);
