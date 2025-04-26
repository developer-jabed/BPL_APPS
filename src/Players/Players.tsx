import { useEffect, useState } from "react";
import Player from "./Player";

interface PlayerType {
  playerId: number | string;
  name: string;
  role: string;
  country: string;
  biddingPrice: number;
  image: string;
}

interface PlayersProps {
  handleSelectedPlayer: (player: PlayerType) => void;
}

const Players = ({ handleSelectedPlayer }: PlayersProps) => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-xl text-blue-500 font-bold mb-4">
          Available Players
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {players.map((player, index) => (
            <Player
              key={player.playerId || index}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
