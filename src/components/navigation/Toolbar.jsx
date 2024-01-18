import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiMenu2Fill, RiSubtractLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Secondary, contentAndDevices, shopByDepartment } from "./Navdata";
import { MdSearch } from "react-icons/md";
import { IoIosAdd, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useCart } from "../../hoc/context/CartContext";
import { MdDelete } from "react-icons/md";

const Toolbar = () => {
  const {
    state: { cart,TotalAmount },
    dispatch,setCount
  } = useCart();
  console.log("cart Length:", cart.length);
  console.log("Total Amount:",TotalAmount)

  const [isDropDown, setDropDown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [stocks] = useState(Math.trunc(Math.random() * 10) + 1);
 

  // const addItemToCart = () => {

  //   dispatch({type: 'ADD_TO_CART',
  //   payload:{
  //     id,
  //     category, image, title, description, price
  //   }})
  // }

  // const removeItemFromCart =()=>{
  //   dispatch({type:"REMOVE_FROM_CART",payload:{
  //     id,
  //     category, image, title, description, price

  //   }}
  //   )
  // }



  const handleSidebar = () => {
    // alert("hsfad");
    setIsToggle(true);
  };

  const handleMouseEnter = () => {
    setDropDown(true);
  };
  const handleMouseLeave = () => {
    setDropDown(false);
  };
  const options = [
    { label: "All Departments", value: 1 },
    { label: "Beauty", value: 2 },
    { label: "Fashion", value: 3 },
    { label: "Baby", value: 4 },
    { label: "Computers", value: 5 },
  ];

  return (
    <header>
      {/* First */}
      <div className="bg-primary px-6 py-3 mx-auto  flex justify-between flex-grow gap-4 items-center relative">
        {/*Logo */}
        <Link className="w-20 flex items-center mt-2" to={"/"}>
          <img src={logo} alt="Amazon Logo" className="w-full object-contain" />
        </Link>

        {/*Location */}
        <div className="md:grid hidden  grid-cols-3  items-center justify-centers whitespace-nowrap">
          <div className="flex col-span-1  justify-end items-end  pt-3  ">
            <HiOutlineLocationMarker className="text-xl text-white " />
          </div>

          <div className=" col-span-2  items-center ml-0 ">
            <h1 className="text-xs mr-1 font-normal font-sans text-[#cccccc] ">
              Deliver to
            </h1>
            <h1 className="font-semibold text-sm  leading-none mr-1 pr-px text-white font-sans">
              Nepal
            </h1>
          </div>
        </div>

        {/*Search Bar */}
        <div className=" flex-grow hidden md:flex ">
          <div className="border  border-gray-300 rounded-bl-sm rounded-tl-sm max-w-max min-w-min ">
            <select className=" w-full h-full bg-gray-200 text-gray-500 text-sm font-thin outline-none ">
              {options.map((val, i) => {
                return (
                  <option key={i} className="p-4 text-black " value={val.value}>
                    {val.label}
                  </option>
                );
              })}
            </select>
          </div>

          <input
            className="px-3 py-2 text-black outline-none flex-grow  text-sm w-full"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search Amazon"
          />

          <button className="bg-pink-200 hover:bg-pink-400 p-2  outline-none rounded-tr-sm rounded-br-sm">
            <MdSearch className="text-black text-2xl font-semibold" />
          </button>
        </div>

        <div className="text-sm flex items-center lg:gap-4 text-white whitespace-nowrap ">
          {/*Sign In */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="parent relative  "
          >
            <div>
              <p className="text-xs">
                Hello, <span>sign in</span>
              </p>
              <h1 className=" flex leading-none text-sm  font-semibold  ">
                Account & Lists
                <IoMdArrowDropdown className="text-xl text-gray-400" />
              </h1>
            </div>

            <div
              className={`${
                isDropDown ? "block" : "hidden"
              } absolute top-10 left-0 border border-black z-30 text-black`}
            >
              <p>Dropdown</p>
            </div>
          </div>

          {/*Returns and Order */}
          <div className="hidden md:block">
            <p className="text-xs  ">Returns</p>
            <h1 className="font-semibold  leading-none">
              <span>&</span> Orders
            </h1>
          </div>

          {/*Carts */}
          <div
            onClick={() => setToggleCart((pre) => !pre)}
            className="flex items-center relative cursor-pointer"
          >
            <AiOutlineShoppingCart className="text-5xl font-thin text-white" />
            <div className="bg-pink-200 w-5 h-5 rounded-full flex justify-center items-center absolute top-0 right-0 md:left-1/2">
              <p className=" font-semibold text-xs text-black ">
                {cart.length}
              </p>
            </div>
            <h1 className=" font-semibold text-sm hidden md:inline-block mt-2 ">
              Cart
            </h1>
          </div>

          {cart.length > 0 && toggleCart && (
            <div className="z-50 absolute top-0 right-0 bg-black bg-opacity-20 w-full h-screen flex items-center justify-center gap-3">
              <div className="bg-white  text-gray-700 p-4 rounded relative grid 
               items-center justify-center gap-4">
                <button
                  onClick={() => setToggleCart((pre) => !pre)}
                  className=" absolute top-1 right-2 bg-red-500 text-white p-1 rounded-sm items-center flex"
                >
                  Clear <MdDelete className="text-2xl font-bold" />
                </button>

                <div className="flex flex-col gap-4 mt-4">
                  {cart.length > 0 ? (
                    cart.map((val,i) => {
                      return (
                        <div className="shadow-sm p-1 " key={i}>
                          <img
                            src={val.image}
                            className="w-20 h-20 rounded-lg"
                            alt="fdsaasf"
                          />
                          <div className=" mt-4 flex gap-4">
                            <p className=" font-bold">{val.title}</p>
                            <p className="font-thin">${val.price}</p>
                            <h1 className="font-sm font-thin  text-gray-700">
                              No of Stocks:{stocks}
                            </h1>
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: { ...val },
                                });
                              }}
                            >
                              <MdDelete className="text-2xl font-bold" />
                            </button>
                          </div>
                          <div className="flex gap-4 mt-1">
                            <h1 className="font-sm font-thin  text-gray-700">
                              Quantity:{cart.length}
                            </h1>
                            <button
                              className="font-bold text-xl bg-blue-500 rounded-sm"
                              onClick={() => {
                                if (stocks === cart.length) {
                                  return stocks;
                                } else {
                                  setCount((pre) => pre + 1);
                                  
                                }
                                dispatch({
                                  type: "UPDATE_CART_QTY",
                                  payload: { ...val,qty:1 },
                                });
                              }}
                            >
                              <IoIosAdd className="text-white" />
                            </button>
                            <button
                              className="font-bold text-xl bg-red-500 rounded-sm"
                              onClick={() => {
                                if (cart.length === 0) {
                                  return cart.length;
                                } else {
                                  setCount((pre) => pre - 1);
                                }
                              }}
                            >
                              <RiSubtractLine className="text-white" />
                            </button>
                          </div>
                          <div className=" h-1/2 bg-gray-600 flex justify-center items-center rounded mt-4" >
                  <h1 className="font-bold text-white text-xl" onChange={()=>{
                    
                 
                    
                  }}></h1>
                </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <p className="text-gray-700 font-bold">Cart is Empty</p>
                    </>
                  )}
                </div>
              


              </div>
              

            </div>
          )}

        </div>
      </div>

      {/*Second */}

      <div
        className="bg-secondary whitespace-nowrap px-6 py-2 flex items-center gap-4"
        style={{
          overflowX: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        <button
          onClick={() => {
            handleSidebar();
          }}
          className="flex items-center gap-px text-white text-sm font-bold"
        >
          <RiMenu2Fill className="text-xl font-bold " />
          All
        </button>

        {Secondary.map((val, i) => {
          return (
            <h1 key={i} className="text-white text-sm ">
              {val.title}
            </h1>
          );
        })}
      </div>

      {/* Sidebar */}
      <div
        className={` fixed top-0  ${
          isToggle ? "left-0" : "-left-full"
        } bg-black bg-opacity-50 w-full h-screen flex z-30     `}
      >
        <div
          className={` w-1/4 h-screen ${
            isToggle ? "left-0" : "-left-full"
          } transition-all ease-in-out duration-500`}
        >
          <div className="bg-[#232f3e] flex gap-2 items-center py-3 px-4 ">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img src="" alt="Profile " />
            </div>
            <h1 className="text-white font-bold text-xl">
              Hello,<span>Sign In</span>
            </h1>
          </div>

          <div className="bg-white">
            <div className="">
              <h1 className="font-semibold text-gray-700 text-lg py-3 px-4">
                Digital Content & Devices
              </h1>

              {contentAndDevices.map((val, i) => {
                return (
                  <div key={i} className="hover:bg-gray-100 cursor-pointer">
                    <div className="flex justify-between  py-3 px-4  text-gray-700 hover:text-gray-950 items-center gap-2   rounded">
                      <h1 className="text-sm font-poppins font-bold ">
                        {val.title}
                      </h1>
                      <button>
                        {
                          <MdOutlineKeyboardArrowRight className="font-bold text-xl" />
                        }
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-200 w-full h-px"></div>
            <div>
              <h1 className="font-semibold text-gray-700 text-lg py-3 px-4">
                {" "}
                Shop By Departments
              </h1>
              {shopByDepartment.map((val, i) => {
                return (
                  <div key={i} className="hover:bg-gray-100 cursor-pointer">
                    <div className="flex justify-between items-center gap-2  py-3 px-4  text-gray-700 hover:text-gray-950 rounded">
                      <h1 className="text-sm font-poppins font-bold ">
                        {val.title}
                      </h1>
                      <button>
                        {
                          <MdOutlineKeyboardArrowRight className="font-bold text-xl" />
                        }
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="  ">
          <button className="mt-3" onClick={() => setIsToggle((pre) => !pre)}>
            {" "}
            <RxCross2 className="text-3xl font-bold text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
