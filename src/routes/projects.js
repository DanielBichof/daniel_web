import { setStaticRoute } from '../common/setStaticRoute.js'
import express from "express";

var router = express.Router();

export { router as projectsRouter };

router.get('/', function (req, res, next) {
  const filePath = setStaticRoute("projects.html");
  res.sendFile(filePath);
});

