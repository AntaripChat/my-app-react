import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
export default function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className=" flex">
        <div
          className={`bg-blue-900 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          Antarip
          <BsArrowLeftCircle
            className={` text-white text-3xl bg-blue-950 rounded-full absolute -right-3 top-9 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="p-7">
          <h1 className=" text-2xl font-semibold">Home</h1>
        </div>
      </div>
    </>
  );
}
