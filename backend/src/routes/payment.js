const router = require("express").Router()
const snap = require("../midtrans")

router.post("/topup", async (req, res) => {

const orderId = "ORDER-" + Date.now()
const amount = req.body.amount

const parameter = {
transaction_details: {
order_id: orderId,
gross_amount: amount
}
}

const transaction = await snap.createTransaction(parameter)

res.json({
orderId: orderId,
snapToken: transaction.token
})

})

module.exports = router
