import { setStaticRoute } from '../common/setStaticRoute.js'
import express from "express";

var router = express.Router();
export { router as aboutRouter };

router.get('/about', function (req, res, next) {
  const filePath = setStaticRoute("about.html");
  res.sendFile(filePath);
});
