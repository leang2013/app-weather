import axios from 'axios';
import urls from '../config/urls';

async function getWeatherByCity(cityId) {
  if (!cityId) return;

  try {
    const res = await axios({
      url: urls.getSearchById(cityId),
      method: 'get',
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export default getWeatherByCity;
