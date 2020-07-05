const urls = {
  getSearchById: (cityId) => (`https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.REACT_APP_WEATHER_API_KEY}&id=${cityId}&units=metric`),
};

export default urls;
