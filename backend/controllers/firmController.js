const Firm = require('../models/Firm');
const Vendor = require('../models/Vendor');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');  
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const addFirm = async(req, res) => {
    
    try{
        const {firstName, area, category, region, offer, image} = req.body;

    const image = req.file? req.file.filename: undefined;

    const vendor = await Vendor.findById(req.vendorId);

    if(!vendor){
        res.status(404).json({message: "vendor not found"})
    }

    const firm = new Firm({
        firstName, area, category, region, offer, image, vendor: vendor._id
    })

    await firm.save();

    return res.status(200).json({message: 'Firm Added successfully '})
    }catch(error){
        console.error(error)
        res.status(500).json("internal server error")
    }
}

module.exports = {addFirm: [upload.single('image'), addFirm]}