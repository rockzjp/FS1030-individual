import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.post("/portfolio/update", (req, res) => {
  try {
    var reqinfo = req.body;
    if(reqinfo.type == 'insert'){
        // {
        //     "type": "insert",
        //     "info": {"xxx":"xxxx", "xx": "xxxx"}
        // }
        var sql = 'insert into portfolio set info=?'
        var value = [JSON.stringify(reqinfo.info)];
    }
    if(reqinfo.type == 'delete'){
        // {
        //     "type": "delete",
        //     "id": 5
        // }
        var sql = 'delete from portfolio where id=?'
        var value = [reqinfo.id];
    }
    if(reqinfo.type == 'update'){
        // {
        //     "type": "delete",
        //     "id": 5
        // }
        var sql = 'update portfolio set info=? where id=?'
        var value = [JSON.stringify(reqinfo.info), reqinfo.id];
    }
    // search info from mysql
    db.query(sql, value, function(error, result) {
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

router.post("/portfolio/search", (req, res) => {
    try {
        
        var sql = 'select * from portfolio;'
        // search info from mysql
        db.query(sql, function(error, result) {
            if (error){
                return res.status(200).send(
                    {
                        returnCode: -1,
                        reutrnMsg: error.message
                    }
                )
            }
            // if user
            if (result) {
                var portfolioInfo = [];
                for(var i=0; i<result.length; i++){
                    portfolioInfo.push({
                        id: result[i].id,
                        info: result[i].info,
                    })
                }
                const resp = 
                    {
                    returnCode: 0,
                    returnMsg: 'success',
                    userInfo: portfolioInfo
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
        } catch (err) {
            console.log(err);
        }
        });
        
export default router;
