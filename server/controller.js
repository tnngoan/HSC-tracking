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

export const connectLocal = async (containerNumber, hblNumber) => { // todo: fix name
  let pool = await sql.connect(configLocal);
  let returnObj = {};
  return pool.request()
    .input('inputContainerNumber', sql.VarChar, containerNumber || '')
    .input('inputHBL', sql.VarChar, hblNumber || '')
    .execute('dbo.HSCGetStuffStsByCntrIDOrHBL')
    .then((result, err) => {
      console.log("result", result)
      returnObj.data = result.recordset
      returnObj.error = err
      return returnObj
    }).catch((err) => console.log(err))
}

export const insertLocal = async (contact) => {
  let pool = await sql.connect(configLocal);
  let returnMessage = ''
  let res = await pool.request().input('email').execute('dbo.').then((res, err) => {
    return res.json()
  }).catch((err) => {
    console.log(err)
  }) // this is missing something
}

