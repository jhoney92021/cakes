
//REQUIRED
const mongoose = require('mongoose');
//REQUIRED

//CONNECT
mongoose.connect('mongodb://localhost/cake', {useNewUrlParser: true});
//CONNECT

//SCHEMAS
//Review
var ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required: true, default:0},
    content: {type: String, required:false, default:""}
}, { timestamps: true });
//Review
//Cake
var CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, default: "Billy"},
    image: {type: String, required: false, default:""},
    reviews: [ReviewSchema]
}, { timestamps: true });
//Cake
//SCHEMAS


//MODEL
const Review = mongoose.model('Review', ReviewSchema);
const Cake = mongoose.model('Cake', CakeSchema);
//MODEL
//STUFF TO EXPORT TO controller.js
module.exports = {Review: Review, Cake: Cake};
//STUFF TO EXPORT TO controller.js