import { useEffect, useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import gallery1 from "../../../assets/61CiqVTRBEL._SX3000_.jpg";
import gallery2 from "../../../assets/61lwJy4B8PL._SX3000_.jpg";
import gallery3 from "../../../assets/717RUPA1bDL._SX3000_.jpg";
import gallery4 from "../../../assets/71Ie3JXGfVL._SX3000_.jpg";
import gallery5 from "../../../assets/71j8damPo5L._SX3000_.jpg";
import gallery6 from "../../../assets/81KkrQWEHIL._SX3000_.jpg";



const Caraousel = () => {
  const images = [
    {
      imgs: gallery1,
    },
    {
      imgs: gallery2,
    },
    {
      imgs: gallery3,
    },
    {
      imgs: gallery4,
    },
    {
      imgs: gallery5,
    },
    {
      imgs: gallery6,
    },
  ];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    // alert("sfd");
    console.log("Next");
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((pre) => pre + 1);
    }
  };
  const handlePrevious = () => {
    console.log("PRevious");
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((pre) => pre - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((pre) => (pre + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative ">
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <div className=" relative overflow-hidden h-[20vh] lg:h-[60vh]">
        {images.map((val, i) => {
          return (
            <img
              key={i}
              src={val.imgs}
              alt="Banner"
              className={` transition-transform absolute duration-500 delay-200 ${
                i === index ? "translate-x-0" : "translate-x-full"
              }`}
            />
          );
        })}
        <div className="w-full h-1/2 absolute top-0 left-0 flex justify-between items-center px-1">
          <button
            className=""
            onClick={() => {
              handlePrevious();
            }}
          >
            <TfiAngleLeft className="text-3xl lg:text-5xl font-extrabold" />
          </button>
          <button
            onClick={() => {
              handleNext();
            }}
          >
            <TfiAngleRight className="text-2xl lg:text-5xl font-extrabold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
