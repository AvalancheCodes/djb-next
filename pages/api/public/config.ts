import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const pathToConfig = path.join(
    process.cwd(),
    "public",
    "config",
    "appConfig.json"
  );
  // Read the config file async
  fs.readFile(pathToConfig, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
