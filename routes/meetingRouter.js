const express = require("express");
const meetingRouter = express.Router();
const Meeting = require("../models/meeting");

meetingRouter
  .route("/")
  .get((req, res, next) => {
    Meeting.find()
      .then((meetings) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(meetings);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    const meeting = new Meeting({
      type: req.body.type,
      date: new Date(req.body.date),
      location: req.body.location,
      theme: req.body.theme,
      positions: req.body.positions,
    });
    meeting.save();
    res.status(201).json({
      message: "Meeting added successfully",
    });
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /meetings");
  })
  .delete((req, res, next) => {
    Meeting.deleteMany()
      .then((response) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(response);
      })
      .catch((err) => next(err));
  });
module.exports = meetingRouter;
