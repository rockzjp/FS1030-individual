import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.delete("/user/delete", (req, res) => {
  try {
    var reqinfo = req.body;
    console.log(reqinfo)
    var sql = 'delete from users where email= ?'
    var where_value = [reqinfo.email];
    // search info from mysql
    if(reqinfo.token == null) {
        return res.status(403).send({
            returnCode: -1,
            reutrnMsg: 'no permission'
        })
    }
    db.query(sql, where_value, function (error, result) {
        if (error) {
            return res.status(200).send(
                {
                    returnCode: -1,
                    reutrnMsg: error.message
                }
            )
        }
        return res.status(200).send({
            returnCode: 0,
            reutrnMsg: "success"
        })
    });
  } catch (error) {
    return res.status(200).send(
        {
            returnCode: -1,
            reutrnMsg: error.message
        }
    )

  }
});


export default router;
