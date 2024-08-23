import React from "react";
import { MainButton } from "@/app/components/Buttons";

export const Modal = ({ title, message, onClose }) => {
  return (

    <dialog id="my_modal_1" className="rounded-md p-4 w-[600px] h-40 bg-white">
    <h3 className="font-bold text-lg">{title}</h3>
       <p className="py-4">{message}</p>
       <div className="flex justify-end">
         <MainButton name="Close" onClick={onClose}/>
       </div>
     </dialog>

  
  );
};
