import express from "express";
import Geolocation from "./Geolocation";

const router = express.Router();

export default (): express.Router => {
    
    Geolocation(router);
    
    return router;
}