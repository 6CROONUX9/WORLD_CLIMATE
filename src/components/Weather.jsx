import { useState } from "react"

const Weather = ({weatherInfo,countryInfo}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const kelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFahrenheit = (tempKelvin) => {
        return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
    }

    const handleChangeUnitTemp = ()=> {
        setIsCelsius(!isCelsius)
    }

    const resultSearch = countryInfo === null  ? weatherInfo : countryInfo

    console.log();

    const resultTempConversion = isCelsius ? kelvinToCelsius(resultSearch?.main.temp): kelvinToFahrenheit(resultSearch?.main.temp)



return (
    <section className="text-center ">
        <h2 className="font-extrabold mt-4">{resultSearch?.name}</h2>
        <section className={`grid gap-4 mt-4 sm:grid-cols-[auto_auto] `}>
            {/* seccion Superior  -> esto es un ejemplo <span>{weatherInfo?.main.temp - 273.15}°K</span>*/}
            <section className="bg-white/60 text-slate-600 dark:bg-slate-500/60 dark:text-white/60 rounded-2xl grid grid-cols-2 items-center">
                <h4 className="col-span-2 text-slate-600 dark:text-white" >{resultSearch?.weather[0].description}</h4>
                <span className="text-4xl dark:text-white">{resultTempConversion}{isCelsius?"Cº":"Fº"}</span>
                <div>
                    <img src={resultSearch && `https://openweathermap.org/img/wn/${resultSearch?.weather[0].icon}@4x.png `} alt="" />
                </div>
            </section>

        {/* seccion inferior */}
            <section className="bg-white/60 text-slate-600 dark:bg-slate-500/60 dark:text-white p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
                <article className="flex gap-2 items-center">
                    <div className="w-[18px]">
                        <img src="/images/img1.png" alt="" />
                    </div> 
                    <span>{resultSearch?.wind.speed} m/s</span> 
                </article>

                <article className="flex gap-2 items-center">
                    <div className="w-[18px]">
                        <img src="/images/img2.png" alt="" />
                    </div>
                    <span>{resultSearch?.main.humidity}%</span>
                </article>

                <article className="flex gap-2 items-center">
                    <div className="w-[18px]">
                        <img src="/images/img3.png" alt="" />
                    </div>
                    <span>{resultSearch?.main.pressure}hPa</span>
                </article>

                
            </section>
        </section>


        <button onClick={handleChangeUnitTemp} className="mt-4 p-2 bg-blue-500 text-white dark:bg-white dark:text-blue-500  rounded-2xl hover:bg-white hover:text-blue-500 ">{isCelsius?"Cambiar a Fº":"Cambiar a Cº"}</button>
    </section>
)
}
export default Weather