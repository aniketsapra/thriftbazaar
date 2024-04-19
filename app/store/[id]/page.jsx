'use client'
import { ItemsList } from "@public/data/items";
import Image from "next/image";
import transition from "@app/transition"; 
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function Page({ params }) {
  const selectedItem = ItemsList.find(item => item.id === parseInt(params.id)); 
  
  return (
    <div className="container flex justify-center items-center lg:mb-20 lg:mt-10">
      {selectedItem ? (
        <>
          <div className="font-poppins p-5 grid col-1 lg:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
              <Image src={selectedItem.image} alt={selectedItem.name} width={300} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-600 mb-2">{selectedItem.name}</h1> 
              <p className="text-xl lg:text-2xl font-semibold text-gray-600 mb-2">
                Description: {selectedItem.description}
              </p>
              <p className="text-lg lg:text-xl text-gray-600 mb-2">Company: {selectedItem.company}</p>
              <p className="text-lg lg:text-xl text-gray-600 mb-2">Age: {selectedItem.age}</p>
              <p className="text-lg lg:text-xl text-gray-600 mb-2">Price: {selectedItem.price}</p>
            </div>
          </div>
        </>
      ) : (
        
        <p className="flex justify-center items-center h-screen text-3xl text-gray-600">
          No item found 
          <SentimentVeryDissatisfiedIcon className="text-gray-600 ml-2" sx={{ fontSize: 50 }}/>
        </p>
        
        
      )}
    </div>
  );
}

export default transition(Page);


