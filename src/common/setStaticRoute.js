import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', express.static(path.join(__dirname, 'pages')))
app.use(express.static('public'))

express.static("pages")

export function setStaticRoute(file) {
  return path.join(__dirname, '../../pages', file);
}

