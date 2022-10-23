import { Db, MongoClient } from "mongodb";

export const getDatabaseConnection = async (): Promise<Db> => {
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  return client.db(process.env.MONGODB_DB!);
};

// Check if the application exists in the app collection of the database
export const appExists = async (domain: string): Promise<boolean> => {
  const db = await getDatabaseConnection();
  const app = await db.collection("webApps").findOne({ domain });
  return app !== null;
};

export const getConfigFile = (): null => {
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
