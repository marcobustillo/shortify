const express = require("express");
const router = express.Router();
const { urlShorterner, urlRedirector } = require("../services");

router.post("/shortify", urlShorterner);

router.get("/:id", urlRedirector);

module.exports = router;
