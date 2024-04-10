import express from 'express';
import { constructLocationAPI } from '../constants/env';
import axios from 'axios';

class GeolocationController {
  constructor() {
    this.getLocationData = this.getLocationData.bind(this);
  }

  public async getLocationData(request: express.Request, response: express.Response) {
    let location;

    try {
      const city = this.extractCity(request);
      location = await this.getLocation(city);

      return response.status(200).json(location);

    } catch (err) {
      console.error(err); 
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }

  private extractCity(request: express.Request): string {
    const city: string | undefined = request.query.q as string | undefined;
    console.log("city: ", city);

    if (!city) {
      throw new Error('City parameter is missing');
    }

    return city;
  }

  private async getLocation(city: string): Promise<any> { 
    const URL = constructLocationAPI(city);
    console.log("URL: ", URL);

    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      console.error(err); 
      throw err; 
    }
  }
}

export default new GeolocationController();
