import { Controller, Get } from '@nestjs/common';

import { NewsService } from './news.service';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('news')
  async getNews(): Promise<any> {
    let news = await this.newsService.getNews();
    return news;
  }
}
