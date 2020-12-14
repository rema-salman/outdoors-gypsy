import { Controller, Get, Query } from '@nestjs/common';
import { GearsService } from './gears.service';

@Controller()
export class GearsController {
  constructor(private readonly gearsService: GearsService) {}

  @Get('gears')
  async getGears(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<any> {
    let gears = await this.gearsService.getGears(lat, lng);
    return gears;
  }
}
