import express from "express";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const router = express.Router();
dotenv.config();

router.post("/resume/update", (req, res) => {
  try {
    var reqinfo = req.body;
    if(reqinfo.type == 'insert'){
        // {
        //     "type": "insert",
        //     "info": {"xxx":"xxxx", "xx": "xxxx"}
        // }
        var sql = 'insert into resume set info=?'
        var value = [JSON.stringify(reqinfo.info)];
    }
    if(reqinfo.type == 'delete'){
        // {
        //     "type": "delete",
        //     "id": 5
        // }
        var sql = 'delete from resume where id=?'
        var value = [reqinfo.id];
    }
    if(reqinfo.type == 'update'){
        // {
        //     "type": "delete",
        //     "id": 5
        // }
        var sql = 'update resume set info=? where id=?'
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

router.post("/resume/search", (req, res) => {
    try {
        
        var sql = 'select * from resume;'
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
                var resumeInfo = [];
                for(var i=0; i<result.length; i++){
                    resumeInfo.push({
                        id: result[i].id,
                        info: result[i].info,
                    })
                }
                const resp = 
                    {
                    returnCode: 0,
                    returnMsg: 'success',
                    userInfo: resumeInfo
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
