import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#11284b] h-400px w-full ">
      <div className="flex justify-around py-20 font-extrabold px-40 mx-40">
        <h1 className="text-5xl">
          Made remotely with Love by <br />
          Stark Lab, Inc.
        </h1>
        <svg
          width="60"
          height="60"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex justify-around font-bold px-60 mx-40 text-sm list-none">
        <div>
          <ul className="py-2">PRODUCT</ul>
          <li className="py-1">Home</li>
          <li className="py-1">Collection</li>
          <li className="py-1">Category</li>
        </div>
        <div>
          <ul className="py-2">RESOURCES</ul>
          <li className="py-1">Blog</li>
          <li className="py-1">Library</li>
          <li className="py-1">Release Notes</li>
        </div>
        <div>
          <ul className="py-2">HELP</ul>
          <li className="py-1">My Account</li>
          <li className="py-1">Support Docs</li>
          <li className="py-1">Contact Us</li>
          <li className="py-1">Feature Requests</li>
        </div>
        <div>
          <ul className="py-2">COMPANY</ul>
          <li className="py-1">Press Release</li>
          <li className="py-1">Privacy Policy</li>
          <li className="py-1">Terms of Service</li>
        </div>
      </div>
      <div className="py-10 mx-40 flex justify-around">
        <div className="flex gap-3 justify-start">
          <a href="https://twitter.com/getstarkco">
            <img
              alt="Stark's Twitter account link"
              src="https://images.getstark.co/marketing/social-media/twitter.png"
              width={30}
            />
          </a>
          <a href="https://www.instagram.com/getstarkco/" target="_blank">
            <img
              alt="Stark's Instagram account link"
              src="https://images.getstark.co/marketing/social-media/instagram.png"
              width={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCnhYIgXU1GsrLnLv-NFqVNw/featured"
            target="_blank"
          >
            <img
              alt="Stark's YouTube account link"
              src="https://images.getstark.co/marketing/social-media/youtube.png"
              width={30}
            />
          </a>
          <a href="https://www.linkedin.com/company/getstarkco" target="_blank">
            <img
              alt="Stark's LinkedIn account link"
              src="https://images.getstark.co/marketing/social-media/share-linkedin.webp"
              width={30}
            />
          </a>
        </div>
        <h1 className="text-yellow-300 text-sm">
          STARK LAB, INC. COPYRIGHT 2023
        </h1>
      </div>
    </div>
  );
};

export default Footer;
