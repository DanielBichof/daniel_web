import { getStaticRoute, getStaticRouteScript } from '../common/commons.js'
import express from "express";

const app = express();

var router = express.Router();
export { router as homeRouter };


router.get('/', function (req, res, next) {
  const filePath = getStaticRoute("home.html"); // *.html muda em cada rota
  res.sendFile(filePath);
});

