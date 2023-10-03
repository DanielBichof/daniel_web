import { getStaticRoute } from '../common/commons.js'
import express from "express";

var router = express.Router();
export { router as aboutRouter };

router.get('/', function (req, res) {
  const filePath = getStaticRoute("about.html");
  res.sendFile(filePath);
});
