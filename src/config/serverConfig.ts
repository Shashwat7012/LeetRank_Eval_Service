import dotenv from "dotenv";

dotenv.config();

const serverConfig = {
  PORT: process.env.PORT || 4000,
  REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379", 10),
  REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1'
};


export default serverConfig;