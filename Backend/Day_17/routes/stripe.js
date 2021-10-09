const router = require("express").Router();
const { STRIPE_KEY } = require("../config/index");
const stripe = require("stripe")(STRIPE_KEY);
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        //line_items means information user information.
        {
          amount: req.body.price * 100,
          name: "Cart",
          currency: "usd",
          quantity: 5,
        },
      ],
      payment_method_types: ["card"],
      // mode: "payment",
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    // console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;
