import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Navbar from "./Pages/Navbar";
import Banner from "./Pages/Banner/Banner";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Footer from "./Pages/Footer/Footer";
import Cart from "./Pages/Card/Cart";

const Home = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  const handleSelectedPlayer = (player) => {
    // Prevent selection if more than 6 players have already been selected
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

    // Check if the player is already selected
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

    // Check if the user has enough coins
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

    // Add player to selected players and deduct coins
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
