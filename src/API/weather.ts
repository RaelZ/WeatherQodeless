import axios from "axios";
import { Cidade } from "../models/cidade";

const url = "https://aps-weather-app.herokuapp.com/weather";

class Weather {
    async getWeather(cidade: string): Promise<Cidade> {
        return axios.get<Cidade>(url,{params:{cityName: cidade}}).then((response) => {
            return response.data;
        });
    }
}

export const weather = new Weather();