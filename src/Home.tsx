import React, { useState } from "react";

import { Bounce, toast, ToastContainer } from "react-toastify";
import Navbar from "./Pages/Navbar";
import Banner from "./Pages/Banner/Banner";
import Cart from "./Pages/Card/Cart";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Footer from "./Pages/Footer/Footer";



const Home: React.FC = () => {
  const [coins, setCoins] = useState<number>(0);

  const handleClaimCredit = () => {
    toast.success('🦄🦄 Successfully added Free credit!!"', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    setCoins((prevCoins) => prevCoins + 6000000);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar coins={coins} />
      </div>
      <div className="w-11/12 mx-auto rounded-lg">
        <Banner onClaimCredit={handleClaimCredit} />
      </div>
      <div className=" rounded-lg">
        <Cart coins={coins} setCoins={setCoins} />
      </div>

      <div className="relative bottom-[-100px]">
        <Newsletter></Newsletter>
      </div>
      <div className="bg-black ">
        <Footer></Footer>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Home;
