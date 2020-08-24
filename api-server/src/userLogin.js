import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.get("/login", (req, res) => {
  try {
    var reqinfo = req.body;
    var sql = "SELECT * FROM users where email=?";
    var where_value = [reqinfo.email];
    console.log(reqinfo)
    // search info from mysql
    db.query(sql, where_value, function(error, result) {
      if (error) throw error;
      // if user
      if (result) {
        // verify password
        result = result[0]
        if(result.password == reqinfo.password) {
          const resp = 
            {
              returnCode: 0,
              returnMsg: 'success',
              name: result.name,
              email: result.email,
              isAdmin: result.isAdmin,
              token: "this is login token",
            }
          return res.status(200).send(resp);
        }
        else {
          const resp = {
            returnCode: -1,
            returnMsg: 'username or password error!',
          }
          return res.status(200).send(resp);  
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});


export default router;
