export const configPool2017 = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_2017,
  server: process.env.DB_SERVER,
  option: {
    encrypt: false,
    anableArithAbort: false,
  },
};

export const configPool2012 = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_2012,
  server: process.env.DB_SERVER,
  option: {
    encrypt: false,
    anableArithAbort: false,
  },
};

export const configPoolDummy = "Server=localhost;PORT=1433;Database=HSC2012;Integrated Security=true;User Id=MyUser;Password=pass@123;TrustServerCertificate=True"