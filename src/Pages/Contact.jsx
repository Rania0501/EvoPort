// Contact.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhone,FaEnvelope,FaMapMarkerAlt,FaPaperPlane } from "react-icons/fa";
function Contact({id}) {
  const [state, handleSubmit] = useForm("xyzpvpkj");
  const handleEmailClick=()=>{
    window.location.href="mailto:raniafellousehsain@gmail.com"
  }
  const handleTelClick=()=>{
    window.location.href="tel:+212 638 780 247"
  }
  if (state.succeeded) {
  
    return (
      <div   className="flex items-center justify-center min-h-[50vh] ">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md text-center animate-fadeIn">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-800">Thank You!</h2>
          <p className="text-gray-600 mt-2">
            Your message has been successfully sent. We’ll get back to you as soon as possible.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen relative p-10 gap-6 dark:border-blue-steel">
    {/* LEFT CARD - Contact Us */}
    <div className="relative z-10 sm:w-[90%] md:w-[45%] lg:w-[30%] bg-gradient-to-br from-ocean-slate via-blue-muted to-steel-sky text-white rounded-xl shadow-2xl flex flex-col justify-center p-16">
      <h2 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-6">
        Contact Us
      </h2>

      <div className="space-y-4 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
        {/* Adresse */}
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> Gzenaya, Tanger
        </p>

        {/* Email */}
        <button
          onClick={handleEmailClick}
          className="flex items-center gap-2 text-left text-white hover:text-blue-200 transition"
        >
          <FaEnvelope /> raniafellousehsain@gmail.com
        </button>

        {/* Téléphone */}
        <button
          onClick={handleTelClick}
          className="flex items-center gap-2 text-left text-white hover:text-green-200 transition"
        >
          <FaPhone /> +212 638 780 247
        </button>
      </div>
    </div>

  {/* RIGHT CARD - Get in Touch */}
  <div className="relative z-0 sm:w-[90%] md:w-[45%] lg:w-[70%]bg-white p-8 rounded-xl shadow-lg flex-1 -ml-16 flex justify-center p-10 dark:border dark:border-blue-steel dark:shadow-blue-steel ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 md:p-8 bg-white space-y-4 dark:bg-gray-900  "
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 text-center">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Feel free to drop us a line below!</p>

        {/* Name */}
        <div>
        <input
  id="name"
  type="text"
  name="name"
  className="mt-1 block w-full border-2 border-gray-300 p-2 dark:bg-gray-900 dark:border-blue-steel
   rounded-lg
   focus:outline-none focus:ring-0
   focus:rounded-lg
   focus:border-transparent
   focus:border-[3px] focus:[border-image:linear-gradient(to_right,#3F6E8C,#87A3B5,#c9d8e1e7)_1]
   dark:focus:bg-gray-900"
  placeholder="Your Name"
/>

          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 p-2 dark:bg-gray-900 dark:border-blue-steel
   focus:outline-none focus:ring-0 
   focus:border-transparent
    dark:focus:bg-gray-900
   focus:border-[3px] focus:border-transparent focus:[border-image:linear-gradient(to_right,#3F6E8C,#87A3B5,#c9d8e1e7)_1]"
            placeholder="Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Subject */}
        <div>
          <select
            id="subject"
            name="subject"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 p-2 dark:bg-gray-900 dark:text-gray-400 dark:border-blue-steel
   focus:outline-none focus:ring-0 
   
   focus:border-transparent
    dark:focus:bg-gray-900
   focus:border-[3px] focus:border-transparent focus:[border-image:linear-gradient(to_right,#3F6E8C,#87A3B5,#c9d8e1e7)_1]"
          >
            <option value="" className="dark:text-gray-300 dark:hover:bg-blue-steel">Select a subject</option>
            <option value="info" className="dark:text-gray-300 dark:hover:bg-blue-steel">Request for information</option>
            <option value="support" className="dark:text-gray-300 dark:hover:bg-blue-steel">Technical support</option>
            <option value="collaboration" className="dark:text-gray-300 dark:hover:bg-blue-steel">Collaboration proposal</option>
          </select>
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 p-2 dark:bg-gray-900 dark:border-blue-steel
            focus:outline-none focus:ring-0 
            focus:border-transparent
             dark:focus:bg-gray-900
            focus:border-[3px] focus:border-transparent focus:[border-image:linear-gradient(to_right,#3F6E8C,#87A3B5,#c9d8e1e7)_1]"
            placeholder="Write your message here..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
             className="inline-flex items-center gap-2 px-7 py-2 rounded-full border-2 border-blue-steel text-blue-steel hover:text-white hover:bg-gradient-to-r hover:from-blue-steel hover:to-steel-sky hover:shadow-lg hover:shadow-blue-steel transition-all duration-300"
          >
            Send <FaPaperPlane/>
          </button>
        </div>
      </form>
    </div>
    </div>


  );
}

export default Contact;
