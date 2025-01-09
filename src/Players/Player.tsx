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

interface PlayerProps {
  player: PlayerType;
  handleSelectedPlayer: (player: PlayerType) => void;
}

const Player: React.FC<PlayerProps> = ({ player, handleSelectedPlayer }) => {
  const {
      name,
      country,
      image,
      role,
      battingType,
      bowlingType,
      biddingPrice,
  } = player;

  return (
      <div className="p-4 border rounded shadow">
          <div className="flex flex-col gap-4">
              <div className="border-2 rounded-lg overflow-hidden">
                  <img className="h-64 w-full " src={image} alt={`${name}`} />
              </div>
              <div className="flex items-center gap-2">
                  <img className="w-5 h-5" src="asset/person.png" alt="icon" />
                  <h3 className="font-bold text-xl">{name}</h3>
              </div>
              <div className="flex justify-between font-bold mb-2">
                  <div className="flex gap-2 items-center">
                      <img className="w-6" src="asset/flag.png" alt="country" />
                      <p>{country}</p>
                  </div>
                  <div className="bg-slate-300 px-4 py-2 rounded-lg">
                      <p>{role}</p>
                  </div>
              </div>
              <hr />
              <div className="font-bold">
                  <p>Rating</p>
              </div>
              <div className="flex justify-between font-bold">
                  <h6>{battingType}</h6>
                  <p>{bowlingType}</p>
              </div>
              <div className="flex justify-between items-center font-bold">
                  <h1 className="text-xl">Price: ${biddingPrice}</h1>
                  <button
                      onClick={() => handleSelectedPlayer(player)}
                      className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-orange-400"
                  >
                      Choose Player
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Player;
