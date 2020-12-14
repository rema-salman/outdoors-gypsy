import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class RecommendationsService {
  httpService: HttpService;
  constructor() {
    this.httpService = new HttpService();
  }

  hikerProjectURL = `https://www.hikingproject.com/data/`;
  /**
   * Gets trails near by
   * @param {Object} location - the user's location
   * @returns {Promise} Promise -list of trails in the area
   */
  async getTrails(location: { lat: number; lng: number }): Promise<any[]> {
    const trailResultsWithConditions = [];
    const trailResults = await this.httpService
      .get(
        this.hikerProjectURL +
          'get-trails?' +
          `lat=${location.lat}&lon=${location.lng}&maxDistance=200&` +
          `key=${process.env.HIKING_PROJECT_API_KEY}`,
      )
      .toPromise();

    return trailResults.data;
  }

  /**
   * Gets trail Information
   * @param {number} id - the trail ID
   * @returns {Promise} Promise trail information
   */
  async getTrailInfo(id: number): Promise<any> {
    const result = await this.httpService
      .get(
        this.hikerProjectURL +
          `get-trails-by-id?ids=${id}&` +
          `key=${process.env.HIKING_PROJECT_API_KEY}`,
      )
      .toPromise();
    return result.data;
  }

  /**
   * Gets trail conditions
   * @param {number} id - the trail ID
   * @returns {Promise} Promise trail conditions
   */
  async getTrailConditions(id: number): Promise<any> {
    const result = await this.httpService
      .get(
        this.hikerProjectURL +
          `get-conditions?ids=${id}&` +
          `key=${process.env.HIKING_PROJECT_API_KEY}`,
      )
      .toPromise();

    return result.data;
  }

  /////////// /////////// ////////////////////// /////////// ///////////////
  ////// foursquareURL and params
  foursquarebaseURL = 'https://api.foursquare.com/v2/venues/explore?';
  foursquareParam = {
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    v: '20201201',
  };

  /**
   * Gets nature preseves near the location
   * @param {Object} location - the user's location
   * @returns {Promise} Promise list of nature preseves
   */
  async getNaturePreserve(location: {
    lat: number;
    lng: number;
  }): Promise<any> {
    const naturePreserves = await this.httpService
      .get(
        this.foursquarebaseURL +
          `ll=${location.lat},${location.lng}&query=Preserve&radius=100000&` +
          new URLSearchParams(this.foursquareParam),
      )
      .toPromise();
    return naturePreserves.data;
  }
  ////// Campgrounds
  async getCampgrounds(location: { lat: number; lng: number }): Promise<any> {
    const results = await this.httpService
      .get(
        this.foursquarebaseURL +
          `ll=${location.lat},${location.lng}&query=Campground&` +
          new URLSearchParams(this.foursquareParam),
      )
      .toPromise();
    return results.data;
  }

  /**
   * Gets outdoor stores near the location
   * @param {Object} location - the user's location
   * @returns {Promise} Promise list of outdoor stores
   */
  async getStores(location: { lat: number; lng: number }): Promise<any> {
    const results = await this.httpService
      .get(
        this.foursquarebaseURL +
          `ll=${location.lat},${location.lng}&query=Sporting%20Goods&` +
          new URLSearchParams(this.foursquareParam),
      )
      .toPromise();
    return results.data;
  }

  /**
   * Gets details of a specific recomendation (venue)
   * @param {String} venue_id - from the foursquare location(coming form client)
   * @returns {Array} - array of a structured data (objects)
   */
  async getSingleServiceDetail(id: string) {
    const result = await this.httpService
      .get(
        `https://api.foursquare.com/v2/venues/${id}?` +
          new URLSearchParams(this.foursquareParam),
      )
      .toPromise();
    return result.data;
  }
}
