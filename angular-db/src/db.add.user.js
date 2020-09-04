const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "Neha@1234",
  database: "confessme",
};


let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  
 await connection.connectAsync();
 
  let sql =
    "INSERT INTO userdetails (username,emailid,password,cpassword) VALUES (?, ?, ?, ?)";
    
  let result = await connection.queryAsync(sql, [
    input.username,
    input.emailid,
    input.password,
    input.cpassword
    ]);
    
  await connection.endAsync();
  
  return result;
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM userdetails WHERE USERNAME=? AND PASSWORD=?";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.password,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};



let updateuser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "insert into store (username,category,thoughts) values (?,?,?)";
  const results = await connection.queryAsync(sql, [
    input.username,
    input.category,
    input.thoughts,
    
    
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};


let uploadblock = async () => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "select category,thoughts  from store";
  let results = await connection.queryAsync(sql);
    
   console.log(results) ;

  await connection.endAsync();
   return results;
};



let forgetuser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "update userdetails set password =? ,cpassword=? where emailid=?";
  const results = await connection.queryAsync(sql, [
    input.password,
    input.cpassword,
    input.emailid
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};
module.exports = { addUser, authenticateUser ,updateuser, uploadblock,forgetuser};
