import { setStaticRoute } from '../common/setStaticRoute.js'
import express from "express";

var router = express.Router();
export { router as homeRouter };

router.get('/', function(req, res, next) {
  const filePath = setStaticRoute("index.html");
  // res.sendFile('index.html');
  res.sendFile(filePath);
  // res.send('respond with a resource');
});

