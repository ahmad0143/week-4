import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    message: String
})

const Contact = mongoose.model("Contact", contactSchema)

export default Contact