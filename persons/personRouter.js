const router = require('express').Router();
// const express = require('express');

const knex = require('../api/dbConfig');

const Persons = require('./personModel');




router.get("/", (req, res) => {
    Persons.getAll()
      .then(per => {
        res.status(200).json(per);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;