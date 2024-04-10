import  express  from "express";
import GeolocationController from "../controllers/GeolocationController";

export default (router: express.Router): express.Router =>{

    console.log('router  geo')

    router.get('/api/location',GeolocationController.getLocationData);


    return router;
}