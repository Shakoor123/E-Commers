const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51MDnWbSJtKGUb1Rh9jl30S5a3W3mDwA7BXb8FsHTrjxs4mGdRk4OSFSpZYgJtAVrTUJu7mD9l6fIEu023fYzPzWC00K7l6tyOi"
);
// require("dotenv").config();
// var stripe = require("stripe")(
//   "sk_test_51LHAkWSBNmcOa3DN7bHrXq6kMhVNlQcw4JqSRA9gsF7DCu3bfj61QpouxwIn8yj63s7Y9DNunCsVhrfPRLWNGnfn00X2XVtvP5"
// );
router.post("/payment", async (req, res) => {
  //   console.log("stripe start");
  //   console.log("token id", req.body.tokenId);
  //   console.log("amount", req.body.amount);
  //   stripe.charges.create(
  //     {
  //       source: req.body.tokenId,
  //       amount: req.body.amount,
  //     },
  //     (err, response) => {
  //       if (err) {
  //         console.log("stripe error in server");
  //         res.status(500).json(err);
  //       } else {
  //         console.log("stripe worked in server");
  //         res.status(200).json(response);
  //       }
  //     }
  //   );
  console.log(req.body.tokenId);
  stripe.charges.create(
    {
      amount: 20,
      currency: "usd",
      source: req.body.tokenId, // obtained with Stripe.js
    },
    function (err, charge) {
      if (err) {
        console.log("stripe error in server");
        console.log(err);
        res.status(500).json(err);
      } else {
        console.log("stripe worked in server");
        res.status(200).json(charge);
      }
    }
  );
});

module.exports = router;
