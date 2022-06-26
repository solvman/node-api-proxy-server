const express = require("express");
const router = express.Router();
const axios = require("axios");

//Env var

const API_BASE_URL = process.env.API_BASE_URL;

router.get("/", async (req, res) => {
  try {
    const response = await axios("https://zenquotes.io/api/random");
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
