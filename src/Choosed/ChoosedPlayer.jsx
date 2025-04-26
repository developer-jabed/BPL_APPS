import React from "react";
import PropTypes from "prop-types";
import { toast, Bounce } from "react-toastify";
import { motion } from "framer-motion"; // For animations

const ChoosedPlayer = ({ selectedPlayers = [], setSelectedPlayers }) => {
  const handleDeletePlayer = (playerToRemove) => {
    setSelectedPlayers((prev) =>
      prev.filter((player) => player.playerId !== playerToRemove.playerId)
    );

    toast.success(`${playerToRemove.name} has been successfully removed!`, {
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
      <h1 className="text-2xl font-bold mb-4 text-center">
        Selected Players ({selectedPlayers.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {selectedPlayers.map((player, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg shadow-lg bg-white flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Player Image */}
            <img
              src={player.image || "https://via.placeholder.com/150"}
              alt={player.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {player.name}
              </h2>
              <p className="text-sm text-gray-600">{player.role}</p>
              <p className="text-sm text-gray-600">Country: {player.country}</p>
              <p className="text-sm text-gray-600">
                Price:{" "}
                <span className="text-purple-700 font-bold">
                  ${player.biddingPrice}
                </span>
              </p>
            </div>
            {/* Delete Button */}
            <button
              onClick={() => handleDeletePlayer(player)}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              🗑️
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

ChoosedPlayer.propTypes = {
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedPlayers: PropTypes.func.isRequired,
};

export default ChoosedPlayer;
