const express = require("express")
const cors = require("cors")

const paymentRoutes = require("./routes/payment")
const webhook = require("./webhook")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/payments", paymentRoutes)
app.post("/midtrans-webhook", webhook)

app.listen(3000, () => {
console.log("Server running")
})
