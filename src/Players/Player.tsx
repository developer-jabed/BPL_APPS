import PropTypes from "prop-types";

const Player = ({ player, handleSelectedPlayer }) => {
  return (
    <div className="p-4 border rounded-2xl shadow-md bg-gradient-to-r from-white to-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
      {/* Player Image */}
      <img
        src={player.image || "https://via.placeholder.com/150"} // fallback if no image
        alt={player.name}
        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-300"
      />

      {/* Player Name */}
      <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>

      {/* Player Role */}
      <p className="text-sm text-blue-600 font-medium mt-1">{player.role}</p>

      {/* Country */}
      <div className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
        {player.country}
      </div>

      {/* Bidding Price */}
      <p className="text-md mt-2 text-gray-700">
        Price:{" "}
        <span className="text-purple-700 font-extrabold">
          ${player.biddingPrice}
        </span>
      </p>

      {/* Select Button */}
      <button
        onClick={() => handleSelectedPlayer(player)}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold rounded-full shadow-lg"
      >
        Select Player
      </button>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    biddingPrice: PropTypes.number.isRequired,
    image: PropTypes.string, // Added image in propTypes
  }).isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
};

export default Player;
