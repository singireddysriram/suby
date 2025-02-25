const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    firm: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Firm' 
        }
    ]

});
// Delete the existing model to prevent OverwriteModelError
delete mongoose.models['Vendor'];

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;

