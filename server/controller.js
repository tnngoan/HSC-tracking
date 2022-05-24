import sql from "mssql";
import { configPool2012, configPool2017, configPoolDummy } from "./db.config.js";

// const localpool2012 = new sql.ConnectionPool(configPool2012);
// const localpool2017 = new sql.ConnectionPool(configPool2017);

export const getInfo = async () => {
  console.log("connecting... to get info");
};

export const insertSubcriber = async () => {
  console.log("inserting subcriber");
};

export const connectDB = async (type, value) => {
  let pool = await sql.connect(configPoolDummy);
  console.log("connecting to db...")
  let returnObj = {};
  let inputType;
  // type === 'container' ? inputType = 'inputContainerNumber' : inputType = 'inputHBLNumber'
  let res = await pool.request().input('inputContainerNumber', sql.VarChar, value).input('inputHBLNumber', sql.VarChar, '').execute('dbo.HSCGetStuffStsByCntrIDOrHBL').then((result, err) => {
    console.log(result)
    returnObj.data = details
    returnObj.error = err
    return returnObj
  }).catch((err) => console.log(err))
  return res
}
