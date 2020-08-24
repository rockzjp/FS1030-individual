import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.put("/user/update", (req, res) => {
  try {
    var reqinfo = req.body;
    if(reqinfo.token == null) {
        return res.status(403).send({
            returnCode: 0,
            returnMsg: 'no permission'
        });
    }
    var sql = "update users set  password=? where email=?";
    var update_value = [reqinfo.password, reqinfo.email]
    
    db.query(sql, update_value, function(error, result) {
        if (error) {
            return res.status(200).send({
                returnCode: -1,
                returnMsg: 'update Error'
            }); 
        };
        return res.status(200).send({
            returnCode: 0,
            returnMsg: 'success'
        });
    });
  } catch (error) {
    console.log(error);
  }
});


export default router;
