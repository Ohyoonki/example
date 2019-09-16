const express = require("express");
const router = express.Router();
const models = require("../models");

const Board = models.user;
// const _ = require("lodash");


// const Sequelize = require("sequelize");
// const sequelize =  new Sequelize("node_example", "root", "1234", 
// { host: "localhost", dialect: "mysql" });

// const check_sequelize_auth = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("연결 성공");
//     } catch (err) {
//         console.log("연결 실패 ", err);
//     }
// };

// check_sequelize_auth();

// const Board = sequelize.define("boards", {
//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     content: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     viewCount: {
//         type: Sequelize.INTEGER,
//         defaultValue: 0,
//         allowNull: false
//     }
// });

// // Example data
// Board.sync({ force: true }).then(() => {
//     return Board.create({
//         title: "FGJH",
//         content: "FHJ",
//         viewCount: 0
//     });
// }).then(() => {
//     return Board.create({
//         title: "FGJH",
//         content: "FJH",
//         viewCount: 0
//     });
// });

router.get("/", async(req, res) => {
    let result = await Board.findAll({
        attributes: ["title"]
    });
    res.send(result);
});

router.get("/:id", async(req, res) => {
    let result = await Board.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(result);
});

router.post("/", async(req, res) => {
    let result = false;
    try {
        await Board.create({id: req.body.id, title: req.body.title, content: req.body.content});
        result = true;
    } catch(err) {
        console.error(err);
    }
    res.send(result);
});

router.put("/:id", async(req, res) => {
    let result = false;
    try {
        await Board.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        result = true;
    } catch (err) {
        console.error(err);
    }

    res.send(result);
});

router.delete("/:id", async(req, res) => {
    let result = false;
    try {
        await Board.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        result = true;
    } catch (err) {
        console.error(err);
    }
    res.send(result);
});

module.exports = router;