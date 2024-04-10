import express from "express";
import Geolocation from "./Geolocation";

const router = express.Router();

export default (): express.Router => {
    router.get('/', (req, res) => {
        res.send('Hello World');
    });

    Geolocation(router);
    
    return router;
}