import { getStaticRoute } from '../common/commons.js'
import express from "express";

var router = express.Router();

export { router as xpRouter };

router.get('/', function (req, res, next) {
  const filePath = getStaticRoute("XP.html");
  res.sendFile(filePath);
});

