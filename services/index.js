const md5 = require("md5");

const Shortify = require("../models");

const generateHash = (url, length) => md5(url).substr(0, length);

const urlShorterner = async (req, res) => {
  try {
    const { url, length } = req.body;
    const hash = generateHash(url, length);
    const result = await Shortify.findOneAndUpdate(
      { url, hash },
      { url, hash },
      { upsert: true, useFindAndModify: false }
    );
    res.send({
      url: hash,
      message: "success"
    });
  } catch (err) {
    throw err;
  }
};

const urlRedirector = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Shortify.findOne({ hash: id });
    if (result) {
      res.redirect(result.url);
      return;
    } else {
      res.send("Does not exist");
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  urlShorterner,
  urlRedirector
};
