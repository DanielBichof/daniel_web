import { getStaticRoute } from '../common/commons.js'
import express from "express";

var router = express.Router();

export { router as projectsRouter };

router.get('/', function (req, res, next) {
  const filePath = getStaticRoute("projects.html");
  res.sendFile(filePath);
});

