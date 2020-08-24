import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.post("/contactlog/insert", (req, res) => {
  try {
    var reqinfo = req.body;
    var sql = 'insert into contactlog set name=? , email=?, special=?'
    var add_value = [reqinfo.name, reqinfo.email, reqinfo.special];
    // search info from mysql
    db.query(sql, add_value, function(error, result) {
        if (error){
            return res.status(200).send(
                {
                    returnCode: -1,
                    reutrnMsg: error.message
                }
            )
        }
        // if user
        return res.status(200).send(
        {
            returnCode: 0,
            reutrnMsg: "success"
        }
        )
        });
    } catch (err) {
        console.log(err);
    }
    });


export default router;
