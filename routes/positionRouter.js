const express = require("express");
const positionRouter = express.Router();
const Position = require("../models/position");

positionRouter
  .route("/")
  .get((req, res, next) => {
    Position.find()
      .then((positions) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(positions);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    const position = new Position({
      title: req.body.title,
      desc: req.body.desc,
      responsibilities: req.body.responsibilities,
    });
    position.save();
    res.status(201).json({
      message: "Position added successfully",
    });
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /positions");
  })
  .delete((req, res, next) => {
    Position.deleteMany()
      .then((response) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(response);
      })
      .catch((err) => next(err));
  });
module.exports = positionRouter;
