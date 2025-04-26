import { useState } from "react";
import Players from "../../Players/Players";
import ChoosedPlayer from "../../Choosed/ChoosedPlayer.jsx";

const Cart = ({
  coins,
  setCoins,
  selectedPlayers,
  setSelectedPlayers,
  handleSelectedPlayer,
}) => {
  const [activeTab, setActiveTab] = useState("available");

  const tabs = [
    { id: "available", label: "Available" },
    {
      id: "select",
      label: `Select (${selectedPlayers.length}) /6`, // Show selected player count
    },
  ];

  return (
    <div className="p-4">
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
        <Players
          selectedPlayers={selectedPlayers}
          handleSelectedPlayer={handleSelectedPlayer}
        />
      )}
      {activeTab === "select" && (
        <ChoosedPlayer
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers} // Pass setSelectedPlayers here
        />
      )}
    </div>
  );
};

export default Cart;
