import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  httpService: HttpService;
  constructor() {
    this.httpService = new HttpService();
  }

  nyTimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

  /**
   * A list of news
   * @returns {Promise}
   */
  async getNews(): Promise<any> {
    const news = await this.httpService
      .get(
        this.nyTimesURL +
          `begin_date=20190101&q=outdoors&sort=newest` +
          `&api-key=${process.env.NYT_TIMES_API_KEY}`,
      )
      .toPromise();
    return news.data;
  }
}
