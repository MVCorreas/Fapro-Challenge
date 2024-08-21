"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MainButton } from "@/app/utility/Buttons";
import Modal from "./Modal/Modal";
import useEaseIn from "../hooks/useEaseIn";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showThanksMessage, setShowThanksMessage] = useState(false);

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

    setShowThanksMessage(true);
  };

  const closeModal = () => {
    setShowThanksMessage(false);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      ref={(el) => (sectionsRef.current[2] = el)}
      className="relative flex flex-col max-h-fit py-10 mb-10 z-10 text-gray-700 overflow-visible"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-700 via-amber-100 to-transparent rounded-full h-[500px] w-[500px] blur-xl absolute bottom-30 right-0 transform translate-x-1/4 translate-y-1/4 -z-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center z-10">
        <div className="flex justify-center">
          <Image
            src="/Telephone.jpg"
            alt="Contact Image"
            width={500}
            height={500}
            priority
            className="w-full h-[100vh] rounded-lg object-cover ml-7"
          />
        </div>
        <div className="flex flex-col w-full p-8">
          <h5 className="text-4xl font-light text-purple-800 mb-4">Contact Us</h5>
          <p className="text-xl leading-8 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit error architecto eveniet corporis vel! 
          </p>
          <div className="w-full p-8 mt-7 bg-purple-50/40 rounded-md">
            {!showThanksMessage ? (
              <form onSubmit={handleSubmit} className="relative z-20">
                <div className="mb-6">
                  <label htmlFor="name" className="text-xl text-purple-800 font-bold">Name</label>
                  <input
                    name="name"
                    type="name"
                    id="name"
                    required
                    placeholder="Type your name"
                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg text-lg text-gray-600"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="text-xl text-purple-800 font-bold">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className={`w-full p-4 mt-2 border ${emailError ? "border-red-600" : "border-gray-300"} rounded-lg text-lg text-gray-600`}
                    placeholder="email@google.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="text-xl text-purple-800 font-bold">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className={`w-full p-4 mt-2 border ${subjectError ? "border-red-600" : "border-gray-300"} rounded-lg text-lg text-gray-600`}
                    placeholder="Topic of conversation"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  {subjectError && <p className="text-red-600 text-sm mt-1">{subjectError}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-xl text-purple-800 font-bold">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className={`w-full p-4 mt-2 border ${messageError ? "border-red-600" : "border-gray-300"} rounded-lg text-lg text-gray-600`}
                    placeholder="How can we help you thrive?"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  {messageError && <p className="text-red-600 text-sm mt-1">{messageError}</p>}
                </div>
                <MainButton name="Submit" onClick={handleSubmit} />
              </form>
            ) : (
              <Modal message="Thank you for contacting Fapro! We will get back to you asap." onClose={closeModal} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
