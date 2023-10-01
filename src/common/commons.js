import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'))
app.use('/', express.static('public'  ))

express.static("pages")

export function getStaticRoute(file) {
  return path.join(__dirname, '../../views', file);
}

export function getStaticRouteScript(file) {
  // console.log(path.join(__dirname, '../../public', file))
  return path.join(__dirname, '../../public', file);
}
