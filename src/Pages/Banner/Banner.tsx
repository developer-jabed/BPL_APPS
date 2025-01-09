import React from "react";

interface BannerProps {
  onClaimCredit: () => void;
}

const Banner: React.FC<BannerProps> = ({ onClaimCredit }) => {
  return (
    <div
      className="bg-cover bg-center bg-cyan-900"
      style={{ backgroundImage: "url('/asset/bg-shadow.png')" }}
    >
      <div className="flex gap-5 flex-col justify-center items-center">
        <img className="mt-6" src="asset/banner-main.png" alt="Main Banner" />
        <h3 className="font-bold text-[40px] text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className="text-[#ffffffb3] text-2xl">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          className="text-[#ffffffb3] mb-6 p-2 border-2 text-xl font-bold rounded-lg hover:bg-[#e7fe29] hover:text-black"
          onClick={onClaimCredit}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
