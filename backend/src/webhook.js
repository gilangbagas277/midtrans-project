const db = require("./firebase")

module.exports = async (req, res) => {

const orderId = req.body.order_id
const status = req.body.transaction_status
const amount = req.body.gross_amount

if(status === "settlement"){

await db.collection("wallet_transactions").add({
orderId: orderId,
amount: amount,
type: "topup",
status: "success",
createdAt: Date.now()
})

}

res.status(200).send("OK")

}
