import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [dark, setDark] = useState(null);
  const [language, setLanguage] = useState("en");
  const [loaderConfi, setLoaderConfi] = useState(true);
  const [eventsDark, setEventsDark] = useState(false);
  const [lenguageIcon, setLenguageIcon] = useState(false);
  const [eventIcono, setEventIcono] = useState(null);

  // funcion para la respuesta positiva del usuario
  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "23aeae3b457e6102c0db0a257e7f3f75";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${language}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [language]);

  // efecto para confi loader

  useEffect(() => {
    setTimeout(() => {
      setLoaderConfi(false);
    }, 3000);
  }, []);

  // https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png `
  const handleSubmit = (e) => {
    e.preventDefault();
    const countryName = e.target.countryName.value;
    const API_KEY = "23aeae3b457e6102c0db0a257e7f3f75";
    const urls = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}&lang=${language}`;

    axios
      .get(urls)
      .then(({ data }) => setCountryInfo(data))
      .catch((err) => console.log(err));
  };

  const resultSearch = countryInfo === null ? weatherInfo : countryInfo;

  const handleChangeDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
      setEventsDark(false);
      setEventIcono(<i className="bx bx-moon  text-slate-950 text-3xl"></i>);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", true);
      setEventsDark(true);
      setEventIcono(<i className="bx bx-sun  text-blue-500 text-3xl"></i>);
    }
  };

  const savedInfo = localStorage.getItem("dark");

  //savedInfo && document.documentElement.classList.add("dark")

  useEffect(() => {
    if (savedInfo) {
      document.documentElement.classList.add("dark");
      setEventIcono(<i className="bx bx-sun text-blue-500 text-3xl"></i>);
    } else {
      setEventIcono(<i className="bx bx-moon text-slate-950 text-3xl"></i>);
    }
  }, []);

  const handleLanguage = () => {
    setLenguageIcon(!lenguageIcon);
    language === "en" ? setLanguage("es") : setLanguage("en");
  };

  const routerImageWeather = {
    "01d": "bg-[url('/images/01d.jpg')]",
    "02d": "bg-[url('/images/02d.jpg')]",
    "03d": "bg-[url('/images/03d.jpg')]",
    "04d": "bg-[url('/images/04d.jpg')]",
    "09d": "bg-[url('/images/09d.jpg')]",
    "10d": "bg-[url('/images/10d.jpg')]",
    "11d": "bg-[url('/images/11d.jpg')]",
    "13d": "bg-[url('/images/13d.jpg')]",
    "50d": "bg-[url('/images/50d.jpg')]",
    "01n": "bg-[url('/images/01n.jpg')]",
    "02n": "bg-[url('/images/02n.jpg')]",
    "03n": "bg-[url('/images/03n.jpg')]",
    "04n": "bg-[url('/images/04n.jpg')]",
    "09n": "bg-[url('/images/09n.jpg')]",
    "10n": "bg-[url('/images/10n.jpg')]",
    "11n": "bg-[url('/images/11n.jpg')]",
    "13n": "bg-[url('/images/13n.jpg')]",
    "50n": "bg-[url('/images/50n.jpg')]",
  };
  // para aplicar una img bg-[url('/images/imagenapegar.png bg-black ${routerImageWeather[weatherInfo?.weather[0].icon]} ')]
  return (
    <main
      className={`min-h-screen text-white font-lato flex flex-col justify-center items-center px-4 relative ${
        routerImageWeather[resultSearch?.weather[0].icon]
      } bg-center bg-cover`}
    >
      <section className="flex flex-col  gap-4 sm:flex-row sm:justify-center sm:items-center  sm:p-2">
        <section className="flex">
          <button
            onClick={handleChangeDarkMode}
            className=" text-white px-4 mb-4 hover:animate-wiggle my-3"
          >
            {eventIcono}
          </button>

          <div
            onClick={handleLanguage}
            className={` bg-cover  my-3 px-4 mb-4 w-8 h-8 ${
              lenguageIcon
                ? "bg-[url('/images/imgUs.png')]"
                : "bg-[url('/images/imgCol.png')]"
            }`}
          ></div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="flex rounded-md overflow-hidden max-w-max mx-auto relative"
        >
          <input
            id="countryName"
            placeholder={lenguageIcon?"clima de la region ...":"climate of the region..."}
            className="text-black p-2 dark:bg-slate-500/60 dark:text-white dark:placeholder:text-white"
            type="text"
          />

          <div className="absolute top-[4px] left-[165px]">
            <i className="bx bx-world  hover:animate-wiggle  text-2xl text-slate-500 dark:text-white  hover:text-blue-500"></i>
          </div>

          <button className="bg-blue-500 text-white dark:bg-white dark:text-blue-500 px-4 hover:bg-white hover:text-blue-500 border-2 border-transparent hover:border-2 hover:border-blue-500 ">
            {lenguageIcon?"Buscar":"Searh"}
          </button>

        </form>
      </section>

      {loaderConfi && <Loader />}
      <Weather weatherInfo={weatherInfo} countryInfo={countryInfo} lenguageIcon={lenguageIcon} />
    </main>
  );
}

export default App;
