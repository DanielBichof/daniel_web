// how to use a separate file in express
import { getStaticRoute, getStaticRouteScript } from '../common/commons.js'

import express from "express";

// instantiate a router (miniature version of the app object, capable of doing all the same things that the app object does)
const router = express.Router();
// export it with a name so you can tell them apart in the index.js file
export { router as ExampleRouter };

// here's an example route that you can use to test that this is working
// it's a good idea to only set routes under a specific path for each router,
// so it's easier to keep track of which router handles which routes
router.get("/exemple", (req, res) => {
  // res.send("This is an example of how to use a separate file in express");
  const filePath = getStaticRoute("home.html");
  res.sendFile(filePath);
});
