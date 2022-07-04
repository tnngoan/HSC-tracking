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
      returnObj.data = result.recordset
      returnObj.error = err
      console.log("first result: ", result.recordset)
      return returnObj
    }).catch((err) => console.log(err))
}

export const insertLocal = async (contact) => {
  let pool = await sql.connect(configLocal);
  return pool.request()
    // .input('ContactType', sql.VarChar, 'P')
    // .input('ContactNo', sql.VarChar, '12345678')
    // .input('ContainerNo', sql.VarChar, '0637806')
    // .input('HBLNo', sql.VarChar, 'ATL/SIN/C82879')

    .input('ContactType', sql.VarChar, contact.contactType)
    .input('ContactNo', sql.VarChar, contact.contactNo)
    .input('ContainerNo', sql.VarChar, contact.containerNo)
    .input('HBLNo', sql.VarChar, contact.hblNo)

    .execute('HSCInsertSubcriber')
    .then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
}

