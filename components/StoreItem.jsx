// components/StoreItem.jsx

import Image from 'next/image';
import Link from 'next/link';

function StoreItem({ id, image, name, company, price }) {
  return (
    <Link href={`/store/${id}`} className='storeItem'>
    
        <Image src={image} alt={name} className='storeItemImage' width={200} height={200} />
        <h1 className='font-semibold'>{name}</h1>
        <h2 className='font-semibold'>{company}</h2>
        <p>{price}</p>
   
    </Link>
  );
}

export default StoreItem;
