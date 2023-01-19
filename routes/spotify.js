const express = require('express');
const router = express.Router();
require("dotenv").config();
const bodyParser = require("body-parser");
const {uid} = require("uid");
const axios = require("axios");
const {request} = require("express");
const qs = require("qs");
const querystring = require("querystring");
let jsonParser = bodyParser.json()
require('dotenv').config()

router.post('/gettrack',jsonParser, async (req, res) => {

    const searchurl = "https://api.spotify.com/v1/search?q=" + this.searchterm + "&type=track&market=FR&limit=10&offset=5"
    const headers = { 'Content-Type': 'application/json',Authorization: 'Bearer ' +  req.body.access_token}

    axios.get(searchurl, {headers:headers}).then(response => {
        return response;
    })
})

router.post('/savetrack',jsonParser, async (req, res) => {

    axios.post("https://musicbot-ca3f1-default-rtdb.firebaseio.com/tracks.json", {title:req.body.title,artist:req.body.artist}).then(response => {
        return response;
    })
})


module.exports.router = router;