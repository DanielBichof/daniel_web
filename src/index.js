import express from "express";
import { fileURLToPath } from 'url';
import path from "path";
import { } from 'dotenv/config'

import { homeRouter } from './routes/home.js';
import { ExampleRouter } from "./routes/router_example.js";
import { projectsRouter } from "./routes/projects.js";
import { aboutRouter } from "./routes/about.js";
import { xpRouter } from "./routes/experience.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../views')));
app.use(express.static(publicPath));
app.use('public', express.static(publicPath));

app.use("/exemple", ExampleRouter);
app.get('/exemple', function (req, res) {
  res.redirect('/');
});

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectsRouter);
app.use("/experience", xpRouter);

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const responseTime = Date.now() - start;
    const contentLength = res.get("Content-Length");
    console.log({
      method: req.method,
      url: req.originalUrl,
      query: req.query,
      responseTime: `${responseTime} ms`,
      contentLength: `${contentLength} bytes`,
      status: res.statusCode,
    });
  });
  // the next function is a callback that tells express to move on to the next middleware or route handler
  next();
});



app.get("/json", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
});

app.post("/", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅", body: req.body });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
