import Image from "next/image";
import {FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
<div>
<footer className="bg-[#EEEFFB] h-auto sm:h-[500px] md:h-[500px] py-8 text-[#8A8FB9] items-center">

  <div className="container mx-auto px-12 items-center">

    {/* Responsive Grid */}
    <div className="mt-[94px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left lg:text-left">
            <div className="mt-2 sm:mt-0">
              
          {/* Logo */}
          <Image
            src="/lodo.00.png"
            width={98}
            height={34}
            alt="logo"
          />
              <div className="mt-4 flex items-center gap-x-2 justify-center sm:justify-start">
               
             
    <div className="flex w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
     {/* Search Input */}
        <input
          type="search"
    className="w-2/3 h-12 px-4 text-gray-700 bg-white border-none outline-none placeholder-gray-400"
    placeholder="Search"
  />
    {/* Sign Up Button */}
  <button className="w-1/3 h-12 bg-[#FB2E86] text-white font-medium hover:bg-[#e12b77] transition duration-300">
    Sign Up
  </button>
</div>

                {/* //////////// */}
              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
        GulsHAN Secror 17A Gulszarayhijri road karachi
              </p>
            </div>
  
            {/* Categories Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Categories</h3>
              <ul className="mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages Section */}
            <div className="mt-4 leading-6">
              <h3 className="text-[18px] text-black">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
  
         

        </div>
        
{/* bottom */}

        <div className="bg-[#E7E4F8]  ">
    <div className="container px-5  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">
      
    <p className="text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        </p>

           <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <div className="text-3xl ml-3 text-gray-900"><FaLinkedin  /></div>
      
              
               </span>
                 @Right Reserved
                
  </div>
        </div>
        </footer>
        </div>
    );
  };
  
  export default Footer;
  










  
