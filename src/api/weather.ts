import axios from "axios";
import { bigWeatherWidgetModel } from "../models/bigWeatherWidgetModel";
import { days } from "../models/days";

const url = "https://aps-weather-app.herokuapp.com/weather";

class Weather {
    async getWeather(cidade: string): Promise<bigWeatherWidgetModel> {
        return axios.get<bigWeatherWidgetModel>(url,{params:{cityName: cidade}})
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            const forecastInfo: days[] = [
              {
                date: null as any,
                weekday: null as any,
                max: null as any,
                min: null as any,
                description: null as any,
                condition: null as any,
              },
            ];
            const infoError: bigWeatherWidgetModel = {
              temp: null as any,
              date: null as any,
              time: null as any,
              condition_code: null as any,
              description: null as any,
              currently: null as any,
              cid: null as any,
              city: null as any,
              img_id: null as any,
              humidity: null as any,
              wind_speedy: null as any,
              sunrise: null as any,
              sunset: null as any,
              condition_slug: null as any,
              city_name: null as any,
              forecast: forecastInfo,
            };

            return infoError;
        });
    }
}

export const weather = new Weather();