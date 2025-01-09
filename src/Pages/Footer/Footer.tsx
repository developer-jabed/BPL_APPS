const Footer = () => {
  return (
    <div>
      <div className="p-20 font-bold text-white">
        <div className="flex mt-14 justify-center items-center ">
          <img src="asset/logo-footer.png" alt="" />
        </div>
        <div className="flex flex-col  justify-center lg:flex-row lg:justify-between mt-4 lg:gap-4">
          <div className="flex flex-col gap-2">
            <h1>About us</h1>
            <p>
              We are a passionate team dedicated <br /> to providing the best
              services to <br /> our customers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Quick Links</h1>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </div>
          <div>
            <h2 className="text-white">Subscribe</h2>
            <p>
              {" "}
              Subscribe to our newsletter for <br /> the latest updates.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <input
                placeholder="Enter your email"
                className="p-2 rounded-lg h-10"
                type="text"
              />
              <button className=" p-2 border-2 bg-purple-500 rounded-lg hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>
        <p className="text-center  text-white mt-4"> @2024 Your Company All Rights Reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
