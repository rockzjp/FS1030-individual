import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.get("/user/search", (req, res) => {
  try {
    var reqinfo = req.body;
    if(reqinfo.token == null) {
        return res.status(403).send({
            returnCode: 0,
            returnMsg: 'no permission'
        });
    }
    var sql = "SELECT * FROM users";
    console.log(reqinfo)
    // search info from mysql
    db.query(sql, function(error, result) {
        if (error) throw error;
      // if user
        if (result) {
            var userInfo = [];
            for(var i=0; i<result.length; i++){
                userInfo.push({
                    name: result[i].name,
                    email: result[i].email,
                    isAdmin: result[i].isAdmin
                })
            }
            const resp = 
                {
                returnCode: 0,
                returnMsg: 'success',
                userInfo: userInfo
                }
            return res.status(200).send(resp);
        }
        else {
            const resp = {
                returnCode: 0,
                returnMsg: 'success',
                userInfo: []
            }
            return res.status(200).send(resp);  
        }
      
    });
  } catch (error) {
    console.log(error);
  }
});


export default router;
