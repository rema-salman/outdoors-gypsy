import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { LocationModule } from './location/location.module';
import { LocationService } from './location/location.service';
import { GearsModule } from './gears/gears.module';
import { GearsService } from './gears/gears.service';
import { RecommendationsService } from './services/recommendations.service';
import { RecommendationsModule } from './services/recommendations.module';
import { NewsService } from './news/news.service';
import { NewsModule } from './news/news.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
/**
 * IMPORTS the connections with DB, Firebase API, and client app
 * ALL Other Modules used in server
 */
@Module({
  imports: [
    ConfigModule.forRoot({}), //dotenv file globaly

    TypeOrmModule.forRoot({
      // connection to mysql DB
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'), //change this to the build in react (cleint later)
    }),

    LocationModule,
    RecommendationsModule,
    GearsModule,
    NewsModule,
  ],

  providers: [
    LocationService,
    GearsService,
    RecommendationsService,
    NewsService,
  ],
})
export class AppModule {}
