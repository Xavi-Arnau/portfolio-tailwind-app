import React from "react";
import proj1 from "../assets/Food-Delivery-App.png";
import proj2 from "../assets/Rick-and-Morty-Characters.png";
import proj3 from "../assets/Trivia-App.png";
import proj4 from "../assets/Random-quote.png";
import proj5 from "../assets/Cards-game.png";
import proj6 from "../assets/Weather-App.png";
import proj7 from "../assets/Portfolio.png";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

export const Portfolio = () => {
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16">
      <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://quickdeli-food-app.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              src={proj1}
              alt=""
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              quickDeli Food Delivery App
            </h2>
            <p className="text-gray-400">
              Website for an imaginary restaurant to display their menu
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/food-delivery-app"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>
            <a
              target="blank_"
              className="flex align-items"
              href="https://quickdeli-food-app.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://some-portfolio-app.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              src={proj7}
              alt=""
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Some portoflio app
            </h2>
            <p className="text-gray-400">Portfolio with scroll</p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/portfolio-app"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>
            <a
              target="blank_"
              className="flex align-items"
              href="https://some-portfolio-app.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://rickandmorty-chars.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              alt=""
              src={proj2}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Rick and Morty Characters
            </h2>
            <p className="text-gray-400">
              Fun project with the characters from Rick and Morty using the rick
              and morty API
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/rickandmorty-app"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>

            <a
              target="blank_"
              className="flex align-items"
              href="https://rickandmorty-chars.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://trivia-tailwind.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              alt=""
              src={proj3}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Simple Trivia Game
            </h2>
            <p className="text-gray-400">
              Fun game with questions and answers using the open trivia api
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/trivia-tailwind"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>
            <a
              target="blank_"
              className="flex align-items"
              href="https://trivia-tailwind.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://react-random-quote-lotr.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              alt=""
              src={proj4}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Lord of the rings random quote app
            </h2>
            <p className="text-gray-400">
              Fun small game project about guessing the author of a Lords of the
              rings quote using The one API.
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/react-random-quote"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>
            <a
              target="blank_"
              className="flex align-items"
              href="https://react-random-quote-lotr.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://react-cards-game.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              alt=""
              src={proj5}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Cards pair game
            </h2>
            <p className="text-gray-400">
              Small game project about finding the paired cards
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/react-cards-game"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>

            <a
              target="blank_"
              className="flex align-items"
              href="https://react-cards-game.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <a
            target="blank_"
            href="https://some-weather-app.netlify.app/"
            className="group h-48 col-span-3 md:h-80"
          >
            <img
              alt=""
              src={proj6}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </a>

          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Weather app
            </h2>
            <p className="text-gray-400">
              Small app using the openweathermap API
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <a
              target="blank_"
              className="flex align-items"
              href="https://github.com/Xavi-Arnau/weather-app"
            >
              <AiFillGithub className="w-[55px] h-auto" />
            </a>

            <a
              target="blank_"
              className="flex align-items"
              href="https://some-weather-app.netlify.app/"
            >
              <AiFillChrome className="w-[55px] h-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
