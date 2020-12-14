import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { DangerMsgDto } from './dto/danger.dto';

@Injectable()
export class LocationService {
  constructor() {}

  /**
   * Creates a new Danger Point
   * @param {string} title - title as "Alert"
   * @param {number} msg - message "A bear was seen around"
   * @param {number} lng,lat - user's location
   * @param {string} createdAt - date of creation
   * @returns {Promise} object of the created message
   */

  async postDangerMsg(
    title: string,
    msg: string,
    lat: number,
    lng: number,
    createdAt: string,
  ): Promise<DangerMsgDto> {
    const createdMsg = await getConnection().query(
      `
      INSERT INTO DangerMsg( Title, Message, Latitude, Longitude, CreatedAt )
       VALUES (?,?,?,?,?)
      `,
      [title, msg, lat, lng, createdAt],
    );
    return createdMsg;
  }

  /**
   * Gets all Danger Points/messages
   * @returns {Promise} - array of all danger messages
   */
  async getAllDangerMsg(): Promise<DangerMsgDto[]> {
    let results: DangerMsgDto[] = await getConnection().query(
      `SELECT * FROM DangerMsg`,
    );
    return results;
  }
}
