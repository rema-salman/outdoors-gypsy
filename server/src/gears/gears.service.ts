import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class GearsService {
  httpService: HttpService;
  constructor() {
    this.httpService = new HttpService();
  }
  unsplashURL = 'https://source.unsplash.com/600x600/?'; // unsplash based URL

  // hard coded list of items based on
  // personal preference and:https://www.rei.com/learn/expert-advice/backpacking-checklist.html
  essentials = [
    { name: 'Backpack', img: this.unsplashURL + 'Backpack' },
    { name: 'Tent', img: this.unsplashURL + 'Tent' },
    { name: 'Sleeping bag', img: this.unsplashURL + 'Sleeping%20bag' },
    { name: 'Sleeping pad', img: this.unsplashURL + 'Sleeping%20pad' },
    { name: 'Headlamp', img: this.unsplashURL + 'Hiking%20Headlamp' },
    { name: 'Hiking compass', img: this.unsplashURL + 'Hiking%20compass' },
    {
      name: 'Hiking walking sticks',
      img: this.unsplashURL + 'Hiking%20walking%20sticks',
    },
    {
      name: 'Hiking fleece pants',
      img: this.unsplashURL + 'Hiking%20fleece%20pants',
    },
    { name: 'Hiking boots', img: this.unsplashURL + 'Hiking%20boots' },
    { name: 'Hiking socks', img: this.unsplashURL + 'Hiking%20socks' },
    { name: 'Multi-tool Knife', img: this.unsplashURL + 'Multi-tool%20Knife' },
    {
      name: 'Moisture-wicking T-shirt',
      img: this.unsplashURL + 'Moisture-wicking%20T-shirt',
    },
    {
      name: 'Moisture-wicking long-sleeve t-shirt',
      img: this.unsplashURL + 'Moisture-wicking%20long-sleeve%20t-shirt',
    },
    {
      name: 'Compact first aid kit',
      img: this.unsplashURL + 'Compact%20first%20aid%20kit',
    },
    {
      name: 'Compact backpacking water filter',
      img: this.unsplashURL + 'Compact%20backpacking%20cookware',
    },
    {
      name: 'Compact backpacking cookware',
      img: this.unsplashURL + 'Compact%20backpacking%20cookware',
    },
    {
      name: 'Micro-fiber towel compact',
      img: this.unsplashURL + 'Micro-fiber%20towel%20compact',
    },
  ];
  warm = [
    { name: 'Sandals', img: this.unsplashURL + 'Hiking%20Sandals' },
    { name: 'Hiking shorts', img: this.unsplashURL + 'Hiking%20shorts' },
  ];
  cold = [
    { name: 'Beanie', img: this.unsplashURL + 'Beanie' },
    { name: 'Neck Gaiter', img: this.unsplashURL + 'Neck%20Gaiter' },
    { name: 'Hiking gloves', img: this.unsplashURL + 'Hiking%20gloves' },
    { name: 'Wool socks', img: this.unsplashURL + 'Wool%20socks' },
    {
      name: 'Lightweight jacket',
      img: this.unsplashURL + 'Lightweight%20jacket',
    },
    {
      name: 'Thermal long underware',
      img: this.unsplashURL + 'Thermal%20long%20underware',
    },
  ];
  sunny = [
    { name: 'Sunglasses', img: this.unsplashURL + 'Sunglasses' },
    { name: 'Sunglass straps', img: this.unsplashURL + 'Sunglass%20straps' },
    { name: 'Cap', img: this.unsplashURL + 'Cap' },
  ];

  rainy = [
    {
      name: 'Backpack raincover',
      img: this.unsplashURL + 'Backpack%20raincover',
    },
    { name: 'Rain suit', img: this.unsplashURL + 'Rain%20suit' },
    { name: 'Leg gaiters', img: this.unsplashURL + 'Leg%20gaiters' },
  ];
  ///gets average temperature
  getAverageTemp(min, max): number {
    return (min + max) / 2;
  }

  /**
   * A list of Gears sorted based on daily weather conditions.
   * while role and organization from the sign in provider.
   * @param {number} lat/lng - the user's location
   * @returns {Promise} Promise a list of sorted list according to daily forcast
   */
  async getGears(lat: number, lng: number): Promise<any> {
    let weather = await this.getWeatherConditions(lat, lng);
    let gearsResult = [];
    //loop throught the daily weather
    weather.daily.forEach(day => {
      let avrgTem = this.getAverageTemp(day.temp.min, day.temp.max);
      let condition = day.weather[0].main;
      if (avrgTem <= 10 && condition == 'Rain') {
        gearsResult.push({
          weather: day,
          essentials: this.essentials,
          cold: this.cold,
          rain: this.rainy,
        });
      } else if (avrgTem <= 10 && condition == 'Sun') {
        gearsResult.push({
          weather: day,
          essentials: this.essentials,
          cold: this.cold,
          sunny: this.sunny,
        });
      } else if (avrgTem >= 25 && condition == 'Rain') {
        gearsResult.push({
          weather: day,
          essentials: this.essentials,
          warm: this.warm,
          rain: this.rainy,
        });
      } else if (avrgTem >= 25 && condition == 'Sun') {
        gearsResult.push({
          weather: day,
          essentials: this.essentials,
          warm: this.warm,
          sunny: this.sunny,
        });
      } else gearsResult.push({ weather: day, essentials: this.essentials });
    });
    return gearsResult;
  }

  /**
   * A list of daily weather conditions, allowing max 7 days.
   * @param {number} lat/lng - the user's location
   * @returns {Promise} Promise a list of sorted list according to daily forcast
   */
  openweatherURL = 'https://api.openweathermap.org/data/2.5/onecall?';
  async getWeatherConditions(lat: number, lng: number): Promise<any> {
    const weather = await this.httpService
      .get(
        this.openweatherURL +
          `lat=${lat}&lon=${lng}&exclude=current,minutely,hourly,alerts&units=metric&` +
          `appid=${process.env.OPEN_WEATHER_API_KEY}`,
      )
      .toPromise();
    return weather.data;
  }
}
