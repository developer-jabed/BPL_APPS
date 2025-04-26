import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from "prop-types";

const Players = ({ selectedPlayers, handleSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <h1 className="text-xl text-blue-500 font-bold">Available Players</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-6 lg:grid-cols-4 gap-4 flex-1">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            handleSelectedPlayer={handleSelectedPlayer}
          />
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
};

export default Players;
