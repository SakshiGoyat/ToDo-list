const express = require("express");
const router = express.Router();

require("../db/conn");

router.use(express.json());

const homeRouteGet = require("../controllers/homeRouteGet");
const homeRoutePost = require("../controllers/homeRoutePost");
const foodRouteGet = require("../controllers/foodRouteGet");
const foodRoutePost = require("../controllers/foodRoutePost");
const workRouteGet = require("../controllers/workRouteGet");
const workRoutePost = require("../controllers/workRoutePost");
const exerciseRouteGet = require("../controllers/exerciseRouteGet");
const exerciseRoutePost = require("../controllers/exerciseRoutePost");
const deleteRoute = require("../controllers/deleteRoute");

router.get("/", homeRouteGet);

router.post("/", homeRoutePost);

router.get("/food", foodRouteGet);

router.post("/food", foodRoutePost);

router.get("/work", workRouteGet);

router.post("/work", workRoutePost);

router.get("/exercise", exerciseRouteGet);

router.post("/exercise", exerciseRoutePost);

router.post("/delete", deleteRoute);

module.exports = router;