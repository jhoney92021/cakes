//BRINGS STUFF FROM models.js
const modelExports = require("./models");
Cake = modelExports.Cake;
Review = modelExports.Review;
//BRINGS STUFF FROM models.js
//STUFF TO EXPORT TO routes.js
module.exports = {
    
    //cake 'dashboard'
    index: (request, response) => {
        Cake.find()
            .then(t => {
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //cake 'dashboard'
    //create cake
    create: (request, response) => {
        Cake.create(request.body) 
            .then(t =>{
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //create cake
    //create review
    review: (request, response) => {
        Review.create(request.body) 
            .then(t =>{
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //create review
    //delete 1
    delete: (request, response) => {
        Cake.remove({ _id: request.params._id }) 
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //delete 1
    //read 1
    view: (request, response) => {
        Cake.findOne({ _id: request.params._id })
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //read 1 
    //read all by baker
    baker: (request, response) => {
        Cake.find({ baker: request.params.baker })
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //read all by baker   
}
//STUFF TO EXPORT TO routes.js