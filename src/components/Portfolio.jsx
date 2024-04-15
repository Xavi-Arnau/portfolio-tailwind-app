import React from "react";
import proj1 from "../assets/Food-Delivery-App.png";
import proj2 from "../assets/Rick-and-Morty-Characters.png";
import proj3 from "../assets/Trivia-App.png";
import proj4 from "../assets/Random-quote.png";
import proj5 from "../assets/Cards-game.png";
import proj6 from "../assets/Weather-App.png";
import proj7 from "../assets/Portfolio.png";
import proj8 from "../assets/Recipes-App.png";
import proj9 from "../assets/Multi-step-form.png";
import proj10 from "../assets/News-Homepage.png";
import proj11 from "../assets/Hangman.png";
import proj12 from "../assets/Intro-with-dropdowns.png";
import Project from "./Project";

export const Portfolio = () => {
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16">
      <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
        <Project
          image={proj9}
          site={"https://some-multi-step-form.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/multi-step-form"}
          title={"Multi step form"}
          description={
            "Multi step form based on a challenge from Frontend Mentor."
          }
        />
        <Project
          image={proj12}
          site={"https://intro-with-dropdowns.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/intro-with-dropdowns"}
          title={"Site with dropdowns"}
          description={
            "Intro site with dropdowns and a sliding menu for mobile sizes. Based on a challenge from Frontend Mentor."
          }
        />
        <Project
          image={proj10}
          site={"https://some-news-homepage-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/news-homepage-app"}
          title={"News Homepage"}
          description={
            "News Homepage project based on a challenge from Frontend Mentor"
          }
        />
        <Project
          image={proj11}
          site={"https://some-hangman-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/hangman-app"}
          title={"Hangman game"}
          description={
            "The hangman game. Took the idea from a challenge from Frontend Mentor"
          }
        />
        <Project
          image={proj1}
          site={"https://quickdeli-food-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/food-delivery-app"}
          title={"quickDeli Food Delivery App"}
          description={
            "Website for an imaginary restaurant to display their menu"
          }
        />
        <Project
          image={proj7}
          site={"https://some-portfolio-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/portfolio-app"}
          title={"Some portoflio app"}
          description={"Portfolio with scroll"}
        />
        <Project
          image={proj2}
          site={"https://rickandmorty-chars.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/rickandmorty-app"}
          title={"Rick and Morty Characters"}
          description={
            "Fun project with the characters from Rick and Morty using the rick and morty API"
          }
        />
        <Project
          image={proj8}
          site={"https://some-recipes-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/recipe-app"}
          title={"Some recipes app"}
          description={"Recipes app using forkify API."}
        />
        <Project
          image={proj3}
          site={"https://trivia-tailwind.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/trivia-tailwind"}
          title={"Simple Trivia Game"}
          description={
            "Fun game with questions and answers using the open trivia api"
          }
        />
        <Project
          image={proj4}
          site={"https://react-random-quote-lotr.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/react-random-quote"}
          title={"Lord of the rings random quote app"}
          description={
            "Fun small game project about guessing the author of a Lords of the rings quote using The one API."
          }
        />
        <Project
          image={proj5}
          site={"https://react-cards-game.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/react-cards-game"}
          title={"Cards pair game"}
          description={"Small game project about finding the paired cards"}
        />
        <Project
          image={proj6}
          site={"https://some-weather-app.netlify.app/"}
          github={"https://github.com/Xavi-Arnau/weather-app"}
          title={"Weather app"}
          description={"Small app using the openweathermap API"}
        />
      </div>
    </div>
  );
};
