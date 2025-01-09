import { useEffect, useState } from "react";
import Player from "./Player";

interface PlayerType {
  id: number;
  name: string;
  team: string;
  country: string;
  image: string;
  role: string;
  battingType: string;
  bowlingType: string;
  biddingPrice: number;
}

interface PlayersProps {
  handleSelectedPlayer: (player: PlayerType) => void;
}

const Players: React.FC<PlayersProps> = ({ handleSelectedPlayer }) => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error fetching players:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleSelectedPlayer={handleSelectedPlayer}
        />
      ))}
    </div>
  );
};

export default Players;
