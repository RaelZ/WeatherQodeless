import React, { useEffect, useState } from "react";
import { Cidade } from "../models/cidade";
import { weather } from "../API/weather";

function Dados() {
  const [dados, setDados] = useState<Cidade>({
    temp: 0,
    date: "",
    time: "",
    condition_code: "",
    description: "",
    currently: "",
    cid: "",
    city: "",
    img_id: "",
    humidity: 0,
    wind_speedy: "",
    sunrise: "",
    sunset: "",
    condition_slug: "",
    city_name: "",
    forecast: [
      {
        date: "",
        weekday: "",
        max: 0,
        min: 0,
        description: "",
        condition: "",
      },
    ],
  });
  const [info, setInfo] = useState(<p>Aguardando...</p>);
  const [cidade, setCidade] = useState("");

  const getDados = async (city: string) => {
    try {
      const resposta = await weather.getWeather(city);
      setDados(resposta);
    } catch (error) {
      setDados({
        temp: 0,
        date: "Error",
        time: "Error",
        condition_code: "Error",
        description: "Error",
        currently: "Error",
        cid: "Error",
        city: "Error",
        img_id: "Error",
        humidity: 0,
        wind_speedy: "Error",
        sunrise: "Error",
        sunset: "Error",
        condition_slug: "Error",
        city_name: "Error",
        forecast: [
          {
            date: "Error",
            weekday: "Error",
            max: 0,
            min: 0,
            description: "Error",
            condition: "Error",
          },
        ],
      });
    }
  };
  useEffect(() => {
    setInfo(<p>{dados.description}</p>);
  }, [dados, cidade]);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setCidade(e.target.value);
          }}
        />
        <button onClick={() => getDados(cidade)}> Enter </button>
      </div>
      <div>
        <p>Tempo:</p>
      </div>
    </div>
  );
}
export default Dados;