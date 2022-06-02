import sql from "mssql";
import { configPool2012, configPool2017, configLocal } from "./db.config.js";

// const localpool2012 = new sql.ConnectionPool(configPool2012);
// const localpool2017 = new sql.ConnectionPool(configPool2017);

export const getInfo = async () => {
  let pool = await sql.connect()
};

export const insertSubcriber = async () => {
  let pool = await sql.connect(configPool2017)

};

export const connectLocal = async (container, hbl) => {
  let pool = await sql.connect(configLocal);
  let returnObj = {};
  let res = await pool.request().input('inputContainerNumber', sql.VarChar, container || " ").input('inputHBLNumber', sql.VarChar, hbl || " ")
  .execute('dbo.HSCGetStuffStsByCntrIDOrHBL').then((result, err) => {
    console.log("result", result)
    returnObj.data = details
    returnObj.error = err
    return returnObj
  }).catch((err) => console.log(err))
  return res
}

export const insertLocal = async (email) => {
  let pool = await sql.connect(configLocal);
  let returnMessage = ''
  let res = await pool.request().input('email')
}

