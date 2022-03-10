const express = require("express"); // importing express
var offerRouter = express.Router();
const OfferModel = require("../schema/model"); // importing model

/**
 * Get all offer
 */
offerRouter.get("/", (request, response) => {
  OfferModel.find({}, (err, offer) => {
    if (err) {
      return console.error(err);
    }
    response.json({
      offer,
    });
  });
});

/**
 * Add a new offer
 */
offerRouter.post("/", (request, response) => {
  const newNote = new OfferModel(request.body);
  newNote.save().then((savedOffer) => {
    response.json({
      offer: {
        savedOffer,
      },
      success: true,
    });
  });
});

module.exports = { offerRouter };
