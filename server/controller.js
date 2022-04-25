import sql from "mssql";
import { configPool2012, configPool2017, configPoolDummy } from "./db.config.js";

const localpool2012 = new sql.ConnectionPool(configPool2012);
const localpool2017 = new sql.ConnectionPool(configPool2017);

export const getInfo = async () => {
  console.log("connecting... to get info");
};

export const insertSubcriber = async () => {
  console.log("inserting subcriber");
};

export const connectDB = async (type, value) => {
  let pool = await sql.connect(configPoolDummy);
  let returnObj = {};
  let res = await pool.request().input('inputContainerNumber', '1234567').execute('dbo.HSCGetStuffStsByCntrIDOrHBL').then((result, err) => {
    returnObj.result = result.recordsets
    returnObj.error = err
    console.log(returnObj)
  })
  return res
} 