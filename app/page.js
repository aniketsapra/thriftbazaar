'use client'
import transition from "./transition";

const Home = ({ setShowLogin }) => {

    return (
      <div>
      <div className="mainback">
        <div className="overlay"></div>
        <div className="content">       
          <h1 className="font-satisfyfont font-extrabold text-4xl md:text-6xl lg:text-8xl">ThriftBazaar</h1>
          <p className="mt-4 font-satisfyfont text-2xl font-semibold md:text-3xl">"Discover More, Spend Less!"</p>
         </div>       
       </div>
       </div>   
    );
}

export default transition(Home);

