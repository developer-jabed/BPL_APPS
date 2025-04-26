import { useState } from "react";
import Players from "../../Players/Players";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ChoosedPlayer from "../../Choosed/ChoosedPlayer";

interface PlayerType {
  playerId: number | string;
  name: string;
  role: string;
  country: string;
  biddingPrice: number;
  image: string;
}

interface CartProps {
  selectedPlayers: PlayerType[];
  setSelectedPlayers: (players: PlayerType[]) => void;
  handleSelectedPlayer: (player: PlayerType) => void;
  coins: number; // Add coins prop
  setCoins: (coins: number) => void; // Add setCoins prop
}

const Cart = ({
  selectedPlayers,
  setSelectedPlayers,
  handleSelectedPlayer,
  coins,
  setCoins,
}: CartProps) => {
  const [activeTab, setActiveTab] = useState<string>("available");

  const tabs = [
    { id: "available", label: "Available" },
    { id: "select", label: `Select (${selectedPlayers.length}) /6` },
  ];

  // Deduct coins when a player is selected
  const handleAddPlayer = (player: PlayerType) => {
    if (coins >= player.biddingPrice) {
      setCoins(coins - player.biddingPrice);
      handleSelectedPlayer(player);
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <div className="p-4">
      {/* Coins Display */}
      <div className="mb-4">
        <span className="text-lg font-semibold">Coins Left: {coins}</span>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-end gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "available" && (
        <Players handleSelectedPlayer={handleAddPlayer} />
      )}
      {activeTab === "select" && (
        <ChoosedPlayer
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}
    </div>
  );
};

export default Cart;
