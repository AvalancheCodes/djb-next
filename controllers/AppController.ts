import { MongoClient } from "mongodb";
import assert from "assert";

export const getDatabaseConnection = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  return client.db(process.env.MONGODB_DB);
};

// Check if the application exists in the app collection of the database
export const appExists = async (domain: string) => {
  const db = await getDatabaseConnection();
  const app = await db.collection("webApps").findOne({ domain });
  return app !== null;
};

export const getConfigFile = () => {
  fetch(",,/config/appConfig.json", { mode: "no-cors" }).then((response) => {
    return response.json();
  });
  return null;
};

const AppController = {
  getDatabaseConnection,
  getConfigFile,
};

export default AppController;
