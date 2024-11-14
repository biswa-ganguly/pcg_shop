import React from "react";
import logo from "/assets/logo.webp";
import youtube from "/assets/youtube.png";
import facebook from "/assets/facebook.png";
import twitter from "/assets/twitter.png";
import instagram from "/assets/instagram.png";

function Footer() {
  return (
    <footer className="bg-[#19325b] text-white">
      <div className="container mx-auto px-16 py-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="flex items-center  mb-4">
            <div className="bg-white p-4">
              <img src={logo} alt="" />
            </div>
          </div>
          <h2 className="text-lg font-bold mb-2">
            Perfect Companion India Private Limited
          </h2>
          <p className="mb-2">
            Plot No 26, Industrial Area, Kasna, Ecotech 1 Extn,
          </p>
          <p className="mb-2"> GREATER NOIDA,</p>
          <p className="mb-2">Gautam Buddha Nagar, Uttar Pradesh, 201308</p>
          <p className="mb-2">Mob: +91 9940625518</p>
          <p className="mb-2">Email: care.smartheart@gmail.com</p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className="list-disc ml-4">
            <li>Company Background</li>
            <li>Vision and Mission</li>
            <li>Manufacturing Plant</li>
            <li>News & Events</li>
            <li>Contact Office</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-lg font-bold mb-4">Product</h2>
          <ul className="list-disc ml-4">
            <li>Dog Foods</li>
            <li>Cat Foods</li>
            <li>Fish Foods</li>
            <li>Horse Foods</li>
            <li>Bird Foods</li>
            <li>Rabbit Foods</li>
            <li>Hamster Foods</li>
            <li>Pet Supplies</li>
            <li>Veterinary Diet</li>
          </ul>
        </div>
        <div className=" text-white ">
          <div className="container mx-auto text-center">
            <h2 className="text-lg font-bold mb-4">Follow news</h2>
            <div className="flex justify-center gap-4">
              <a href="#" className="size-14">
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M23.49 6.4c-.27-1.02-1.07-1.83-2.09-2.09C19.14 4 12 4 12 4s-7.14 0-9.39.31C1.58 4.58.77 5.39.5 6.4.22 7.61 0 10.06 0 12s.22 4.39.5 5.6c.27 1.02 1.07 1.83 2.09 2.09 2.25.31 9.39.31 9.39.31s7.14 0 9.39-.31c1.02-.27 1.83-1.07 2.09-2.09.27-1.21.5-3.66.5-5.6s-.23-4.39-.5-5.6zM9.7 15.5v-7l6.3 3.5-6.3 3.5z"
                    fill="#FF0000"
                  />
                </svg> */}
                <img src={youtube} alt="Youtube" />
              </a>
              <a href="#" className="size-9">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg> */}
                <img src={facebook} alt = "" />
              </a>
              <a href="#" className="size-10">
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M23.63 4.99c-.86.38-1.78.63-2.75.74a4.76 4.76 0 0 0 2.1-2.62 9.55 9.55 0 0 1-3.03 1.16A4.78 4.78 0 0 0 16.86 4c-2.65 0-4.79 2.14-4.79 4.79 0 .38.04.75.11 1.11a13.62 13.62 0 0 1-9.91-5.03A4.82 4.82 0 0 0 2.87 8c0 1.66.85 3.12 2.13 3.98a4.77 4.77 0 0 1-2.17-.6v.06c0 2.32 1.64 4.25 3.82 4.69a4.78 4.78 0 0 1-2.17.08c.61 1.91 2.37 3.31 4.46 3.35a9.55 9.55 0 0 1-5.92 2.04c-.39 0-.77-.02-1.15-.07a13.62 13.62 0 0 0 7.37 2.16c8.83 0 13.67-7.31 13.67-13.67 0-.21-.01-.42-.02-.62a9.68 9.68 0 0 0 2.38-2.46z"
                    fill="#1DA1F2"
                  />
                </svg> */}
                <img src={twitter} alt = "" />
              </a>
              <a
                href="#"
                className="size-10"
              >
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M12 2.2c3.2 0 3.6.01 4.9.07 1.2.06 2.16.29 2.66.62.56.35.98.79 1.33 1.33.33.5.56 1.48.62 2.66.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.06 1.2-.29 2.16-.62 2.66-.35.56-.79.98-1.33 1.33-.5.33-1.48.56-2.66.62-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.2-.06-2.16-.29-2.66-.62-.56-.35-.98-.79-1.33-1.33-.33-.5-.56-1.48-.62-2.66-.06-1.3-.07-1.7-.07-4.9s.01-3.6.07-4.9c.06-1.2.29-2.16.62-2.66.35-.56.79-.98 1.33-1.33.5-.33 1.48-.56 2.66-.62 1.3-.06 1.7-.07 4.9-.07zm0-2.2c-3.3 0-3.7.01-5 .07-1.5.07-2.84.31-3.87.78-1.1.5-2.04 1.22-2.72 2.09-.5.8-.8 1.72-.94 2.68-.05 1.3-.07 1.7-.07 5s.02 3.7.07 5c.14 1.26.44 2.45.94 3.46.68 1.36 1.62 2.59 2.72 3.54.84.54 1.84.87 2.89.95 1.3.06 1.7.07 5 .07s3.7-.01 5-.07c1.05-.08 2.05-.41 2.89-.95 1.1-.95 2.04-2.18 2.72-3.54.5-1.01.8-2.2.94-3.46.05-1.3.07-1.7.07-5s-.02-3.7-.07-5c-.14-1.26-.44-2.45-.94-3.46-.68-1.36-1.62-2.59-2.72-3.54-.84-.54-1.84-.87-2.89-.95-1.3-.06-1.7-.07-5-.07zm0 7.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.4a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4zm4.9-6.4a.9.9 0 1 1 .01-1.8.9.9 0 0 1-.01 1.8z"
                    fill="#E1306C"
                  />
                </svg> */}
                <img src={instagram} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] mb-2 bg-[#787e87]"></div>

      <div className="bg-[#19325b] text-white">
        <div className="container mx-auto text-center lg:flex justify-between items-center">
          <p>
            COPYRIGHT @ 2003 2021 PERFECT COMPANION GROUP ALL RIGHTS RESERVED
          </p>
          <div className="mt-2 flex justify-center items-center">
            <a href="#" className="hover:underline ">
              Privacy Policy
            </a>
            <div className="w-[2px] h-6 mx-2 bg-[#ffffff]"></div>
            <a href="#" className="hover:underline ">
              Cookie Policy
            </a>
            <div className="w-[2px] h-6 mx-2 bg-[#ffffff]"></div>
            <a href="#" className="hover:underline ">
              International Network
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
