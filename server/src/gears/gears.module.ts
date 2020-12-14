import { HttpModule, Module } from '@nestjs/common';
import { GearsController } from './gears.controller';
import { GearsService } from './gears.service';

@Module({
  imports: [HttpModule],
  providers: [GearsService],
  controllers: [GearsController],
})
export class GearsModule {}
