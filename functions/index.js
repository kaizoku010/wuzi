const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const newLocal = require("stripe")(
  "sk_test_51HzK9kI42NMmSRyAwtLKpi2rpl51ff3EK31YEiH6fAMSIsd1fIsUPSSkB9b23PqzQ5vcDMT24OG2yUnQkJpUJd0k00cKLrvY0l"
);
const stripe = require("stripe")(newLocal);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("Welcome To Wuzi Backend"));

app.post("payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment received: BOOM " + total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});
exports.api = functions.https.onRequest(app);
