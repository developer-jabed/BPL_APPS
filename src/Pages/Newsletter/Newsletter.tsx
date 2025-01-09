const Newsletter = () => {
  return (
    <div>
      <div className="w-3/4 top-10 left-20 z-10 mx-auto   p-4 blur-0 border-2 rounded-lg ">
        <div style={{ backgroundImage: "url('/asset/bg-shadow.png')" }} className="p-6 flex bg-[#fed7aa] flex-col justify-center items-center border-2 rounded-lg ">
          <h1 className="text-3xl font-bold text-black">
            {" "}
            Subscribe to our Newsletter
          </h1>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="flex items-center gap-2 mt-3">
            <input
              placeholder="Enter your email"
              className="p-2 bg-black rounded-lg h-10"
              type="text"
            />
            <button className=" p-2 border-2 bg-purple-500 rounded-lg hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
