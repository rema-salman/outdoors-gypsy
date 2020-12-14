import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { DangerMsgDto } from './dto/danger.dto';
import { LocationService } from './location.service';

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('danger-messages')
  async getDangerMsgs(): Promise<any> {
    let dangerMsgs = await this.locationService.getAllDangerMsg();
    return dangerMsgs;
  }

  @Post('danger-messages')
  async createDangerMsgs(@Body() dangerMsgDto: DangerMsgDto): Promise<any> {
    // check user if not exist then creates a new one
    await this.locationService.postDangerMsg(
      dangerMsgDto.title,
      dangerMsgDto.msg,
      dangerMsgDto.lat,
      dangerMsgDto.lng,
      dangerMsgDto.createdAt,
    );
    throw new HttpException('Message created', HttpStatus.CREATED);
  }
}
