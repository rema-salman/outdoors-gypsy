import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationsService } from 'src/services/recommendations.service';

@Controller()
export class RecommendationsController {
  constructor(private readonly servicesService: RecommendationsService) {}

  @Get('hiking-trails')
  async getTrails(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<any> {
    let hikingTrails = await this.servicesService.getTrails({
      lat,
      lng,
    });
    return hikingTrails;
  }

  @Get('get-trail-by-id')
  async getTrailInfo(@Query('id') id: number): Promise<any> {
    let hikingTrailInfo = await this.servicesService.getTrailInfo(id);
    return hikingTrailInfo;
  }

  @Get('get-conditions')
  async getTrailConditions(@Query('id') id: number): Promise<any> {
    let hikingTrailConditions = await this.servicesService.getTrailConditions(
      id,
    );
    return hikingTrailConditions;
  }

  @Get('nature-preserves')
  async getNaturePreserve(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let naturePreserves = await this.servicesService.getNaturePreserve({
      lat,
      lng,
    });
    return naturePreserves;
  }

  @Get('campgrounds')
  async getCampgrounds(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<any> {
    let Campgrounds = await this.servicesService.getCampgrounds({
      lat,
      lng,
    });
    return Campgrounds;
  }

  @Get('outdoor-stores')
  async getOutdoorstores(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<any> {
    let stores = await this.servicesService.getStores({
      lat,
      lng,
    });
    return stores;
  }

  @Get('services')
  async getDetails(@Query('id') id: string): Promise<any> {
    let result = await this.servicesService.getSingleServiceDetail(id);
    return result;
  }
}
