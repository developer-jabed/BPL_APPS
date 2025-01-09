import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Players from "../../Players/Players";



interface Player {
  playerId: number;
  name: string;
  image: string;
  battingType: string;
  biddingPrice: number;
}

interface CartProps {
  coins: number;
  setCoins: (coins: number) => void;
}



const Cart: React.FC<CartProps> = ({ coins, setCoins }) => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [activeSection, setActiveSection] = useState<string>("available");

  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectedPlayer = (player: any) => {
    const transformedPlayer: Player = {
      playerId: player.id,
      name: player.name,
      image: player.image,
      battingType: player.battingType,
      biddingPrice: player.biddingPrice,
    };

    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }

    if (selectedPlayers.some((p) => p.playerId === transformedPlayer.playerId)) {
      toast.error("You have already selected this player!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }

    if (coins < transformedPlayer.biddingPrice) {
      toast.error("Not enough coins to select this player!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      return;
    }

    setCoins(coins - transformedPlayer.biddingPrice); // Deduct coins
    setSelectedPlayers([...selectedPlayers, transformedPlayer]);

    // Show success toast
    toast.success(`Player ${transformedPlayer.name} successfully selected!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleDeleteSelectedPlayer = (playerId: number) => {
    const player = selectedPlayers.find((p) => p.playerId === playerId);
    if (player) {
      setCoins(coins + player.biddingPrice); // Refund coins
      setSelectedPlayers(
        selectedPlayers.filter((p) => p.playerId !== playerId)
      );
    }
  };

  return (
    <div>
      {/* Section Toggle */}
      <div className="flex justify-end gap-2 mt-6 w-11/12 mx-auto font-bold">
        <button
          onClick={() => setActiveSection("available")}
          className={`px-4 py-2 rounded ${
            activeSection === "available"
              ? "bg-yellow-100 text-black"
              : "bg-gray-200"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setActiveSection("select")}
          className={`px-4 py-2 rounded ${
            activeSection === "select"
              ? "bg-yellow-100 text-black"
              : "bg-gray-200"
          }`}
        >
          Selected <span>{selectedPlayers.length} / 6</span>
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-6 w-11/12 mx-auto">
        {activeSection === "available" && (
          <Players handleSelectedPlayer={handleSelectedPlayer} />
        )}
        {activeSection === "select" && (
          <div className="p-4 bg-yellow-100 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Selected Players</h2>
            {selectedPlayers.length > 0 ? (
              selectedPlayers.map((player) => (
                <div
                  key={player.playerId}
                  className="flex justify-between items-center border-2 p-3 bg-white rounded-lg gap-3"
                >
                  <img className="w-14" src={player.image} alt={player.name} />
                  <div>
                    <p>{player.name}</p>
                    <p>{player.battingType}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteSelectedPlayer(player.playerId)}
                    className="text-red-500 flex"
                  >
                    <img className="w-10" src="asset/delete.png" alt="" />
                  </button>
                </div>
              ))
            ) : (
              <p>No players selected yet.</p>
            )}
          </div>
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
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

export default Cart;
