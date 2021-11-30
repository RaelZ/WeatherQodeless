import {
  faCloud,
  faCloudMoon,
  faCloudShowersHeavy,
  faCloudSun,
  faIcicles,
  faMoon,
  faSmog,
  faSnowflake,
  faSun,
  faTint,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { bigWeatherWidgetModel } from '../models/bigWeatherWidgetModel';
import { bigWidget } from '../styles/bigWidget';

const BigWidget = (info: bigWeatherWidgetModel) => {
  const [weatherInfo] = useState(info);

  const toUpperFirst = (text: any) => {
    var words = text.toLowerCase().split(' ');
    for (var a = 0; a < words.length; a++) {
      var w = words[a];
      words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(' ');
  };
  return (
    <Box style={bigWidget.box} display="flex" flexDirection="column" p={2}>
      <Grid display="flex" flexDirection="column" justifyContent="center">
        <Grid>
          <Typography fontSize="48px" color="#5EA8EC">
            {weatherInfo.city}
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontSize="24px">
            {weatherInfo.currently
              ? `${toUpperFirst(weatherInfo.currently)} - ${
                  weatherInfo.description
                }`
              : null}
          </Typography>
          <Grid display="flex" alignItems="center" pl={4}>
            {weatherInfo.condition_slug === 'storm' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faCloudShowersHeavy}
              />
            ) : null}
            {weatherInfo.condition_slug === 'snow' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faSnowflake}
              />
            ) : null}
            {weatherInfo.condition_slug === 'hail' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faIcicles}
              />
            ) : null}
            {weatherInfo.condition_slug === 'fog' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faSmog}
              />
            ) : null}
            {weatherInfo.condition_slug === 'clear_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.condition_slug === 'clear_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.condition_slug === 'cloud' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faCloud}
              />
            ) : null}
            {weatherInfo.condition_slug === 'cloudly_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faCloudSun}
              />
            ) : null}
            {weatherInfo.condition_slug === 'cloudly_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faCloudMoon}
              />
            ) : null}
            {weatherInfo.condition_slug === 'none_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.condition_slug === 'none_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.condition_slug === 'rain' ? (
              <FontAwesomeIcon
                style={{ fontSize: '48px', paddingRight: 10 }}
                color="#ccc"
                icon={faUmbrella}
              />
            ) : null}
            <Typography fontSize="48px">{weatherInfo.temp}ºc</Typography>
          </Grid>
        </Grid>
        <Grid display="flex" alignItems="center">
          <FontAwesomeIcon
            style={{ paddingRight: 10 }}
            color="#5EA8EC"
            icon={faTint}
          />
          <Typography fontSize="20px">
            Humidade do ar: {weatherInfo.humidity}m³
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center">
          <FontAwesomeIcon
            style={{ paddingRight: 10 }}
            color="#727272"
            icon={faWind}
          />
          <Typography fontSize="20px">
            Velocidade do vento: {weatherInfo.wind_speedy}
          </Typography>
        </Grid>
        <Grid display="flex">
          <Typography fontSize="20px">
            Nascer do sol: {weatherInfo.sunrise}
          </Typography>
        </Grid>
        <Grid display="flex">
          <Typography fontSize="20px">
            Pôr do sol: {weatherInfo.sunset}
          </Typography>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Typography fontSize="32px">
            {weatherInfo.forecast[0].weekday}
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Grid display="flex" alignItems="center">
            <Typography fontSize="32px">
              Min: {weatherInfo.forecast[0].min}ºc
            </Typography>
            {weatherInfo.forecast[0].condition === 'storm' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudShowersHeavy}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'snow' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSnowflake}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'hail' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faIcicles}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'fog' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSmog}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'clear_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'clear_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloud' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloud}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloudly_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloudly_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'none_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'none_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'rain' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faUmbrella}
              />
            ) : null}
          </Grid>
          <Grid display="flex" alignItems="center">
            <Typography fontSize="32px">
              Max: {weatherInfo.forecast[0].max}ºc
            </Typography>
            {weatherInfo.forecast[0].condition === 'storm' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudShowersHeavy}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'snow' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSnowflake}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'hail' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faIcicles}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'fog' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSmog}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'clear_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'clear_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloud' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloud}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloudly_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'cloudly_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faCloudMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'none_day' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faSun}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'none_night' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faMoon}
              />
            ) : null}
            {weatherInfo.forecast[0].condition === 'rain' ? (
              <FontAwesomeIcon
                style={{ fontSize: '32px', paddingLeft: 16 }}
                color="#ccc"
                icon={faUmbrella}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        color="#727272"
      >
        <Grid display="flex">
          <Typography fontSize="24px">{weatherInfo.date}</Typography>
        </Grid>
        <Grid display="flex">
          <Typography fontSize="24px">{weatherInfo.time}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigWidget;
