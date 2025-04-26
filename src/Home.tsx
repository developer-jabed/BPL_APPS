import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Navbar from "./Pages/Navbar";
import Banner from "./Pages/Banner/Banner";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Footer from "./Pages/Footer/Footer";
import Cart from "./Pages/Card/Cart";

interface PlayerType {
  playerId: number | string;
  name: string;
  role: string;
  country: string;
  biddingPrice: number;
  image: string;
}

const Home = () => {
  const [coins, setCoins] = useState<number>(0);
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

  const handleClaimCredit = () => {
    toast.success("🦄🦄 Successfully added Free credit!!", {
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

  const handleSelectedPlayer = (player: PlayerType) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select 6 players!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const isAlreadySelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.playerId === player.playerId
    );

    if (isAlreadySelected) {
      toast.error(`${player.name} has already been purchased!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (coins < player.biddingPrice) {
      toast.error("Not enough coins to buy this player.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setSelectedPlayers((prev) => [...prev, player]);
    setCoins((prevCoins) => prevCoins - player.biddingPrice);

    toast.success(`${player.name} has been successfully purchased!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar coins={coins} />
      </div>
      <div className="w-11/12 mx-auto rounded-lg">
        <Banner onClaimCredit={handleClaimCredit} />
      </div>
      <div>
        <Cart
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          handleSelectedPlayer={handleSelectedPlayer}
          coins={coins}
          setCoins={setCoins}
        />
      </div>

      <div className="relative bottom-[-100px]">
        <Newsletter />
      </div>
      <div className="bg-black">
        <Footer />
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
