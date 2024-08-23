"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GradientButton, MainButton } from "@/app/components/Buttons";
import { Modal } from "./Modal";
import useEaseIn from "../hooks/useEaseIn";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const sectionsRef = useEaseIn();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (subject.length > 50) {
      setSubjectError("Subject should not exceed 50 characters.");
      return;
    } else {
      setSubjectError("");
    }

    if (message.length > 500) {
      setMessageError("Message should not exceed 500 characters.");
      return;
    } else {
      setMessageError("");
    }

    document.getElementById("my_modal_1").showModal();
  };

  const closeModal = () => {
   
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    document.getElementById("my_modal_1").close();
  };

 

  return (
    <section
      ref={(el) => (sectionsRef.current[2] = el)}
      className="relative flex flex-col max-h-fit py-10 p-10 z-10 text-gray-700 overflow-visible"
      id="contact"
      style={{
        backgroundImage: "url('/BackgroundCard.jpg')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40%',
      }} 
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700 via-amber-100 to-transparent rounded-full h-[300px] w-[300px] blur-xl absolute bottom-[350px] left-40 transform translate-x-1/4 translate-y-1/2 opacity-50 z-20"></div> 
     
      <div className="absolute inset-0 bg-amber-900 opacity-40 z-0 rounded-lg m-24" style={{ borderTopLeftRadius: '20%' }}></div>
  
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center z-10 m-24">

        <div className="flex flex-col w-full p-8 bg-zinc-900 bg-opacity-80 rounded-lg h-full justify-center" style={{ borderTopLeftRadius: '30%' }}>
          <p className="text-6xl font-light text-purple-300 mb-12 ">Contact Us</p>
          <p className="text-4xl leading-8 text-white mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit error architecto eveniet corporis vel! 
          </p>

        </div>
  
        <div className="w-full p-8 bg-transparent rounded-lg">
          <form onSubmit={handleSubmit} className="relative z-20">
            <div className="mb-6">
              <label htmlFor="name" className="text-xl text-white font-bold">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                required
                placeholder="Type your name"
                className="w-full p-4 mt-2 bg-slate-900 rounded-full text-lg text-white"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-xl text-white font-bold">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={`w-full p-4 mt-2 ${emailError && "border-red-600"} bg-slate-900 rounded-full text-lg text-white`}
                placeholder="email@google.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-xl text-white font-bold">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className={`w-full p-4 mt-2 border ${subjectError && "border-red-600"} bg-slate-900 rounded-full text-lg text-white`}
                placeholder="Topic of conversation"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              {subjectError && <p className="text-red-600 text-sm mt-1">{subjectError}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-xl text-white font-bold">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className={`w-full p-4 mt-2 border ${messageError && "border-red-600"} bg-slate-900 rounded-full text-lg text-white`}
                placeholder="How can we help you thrive?"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              {messageError && <p className="text-red-600 text-sm mt-1">{messageError}</p>}
            </div>
           <GradientButton name='Submit' onSubmit={handleSubmit} />
            <div className="flex flex-row space-x-4 justify-center mt-4">
            <Image
            src='/Google.png'
            alt="Google"
            width={50}
            height={50}
            priority
            className="rounded-full"
            />
             <Image
            src='/Github.png'
            alt="Google"
            width={50}
            height={50}
            priority
            className="rounded-full bg-white p-2"
            />
            </div>
            
          </form>
        </div>
      </div>
  
      <Modal title='Thank you for contacting us!' message='We will get back to you asap.' onClose={closeModal} />
    </section>
  );
}  