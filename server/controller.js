import sql from "mssql";
import { configPool2012, configPool2017 } from "./db.config";

const localpool2012 = new sql.ConnectionPool(configPool2012);
const localpool2017 = new sql.ConnectionPool(configPool2017);

export const getInfo = async () => {
  console.log("connecting... to get info");
};

export const insertSubcriber = async () => {
  console.log("inserting subcriber");
};
