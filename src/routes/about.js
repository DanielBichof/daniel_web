import { getStaticRoute } from '../common/commons.js'
import express from "express";

var router = express.Router();
export { router as aboutRouter };

router.get('/about', function (req, res, next) {
  const filePath = getStaticRoute("about.html");
  res.sendFile(filePath);
});
