
//BRINGS STUFF FROM controller.js
const controller = require("./controller");
//BRINGS STUFF FROM controller.js

//STUFF TO EXPORT TO server.js
module.exports = function(app){
    app.get('/cake', controller.index)/*get all*/
    app.post('/cake', controller.create)/*make cake*/
    app.post('/cake/:_id', controller.review)/*make review*/
    app.delete('/cake/:_id', controller.delete)/*delete one*/
    app.get('/cake/:_id', controller.view)/*view one*/
    app.get('/cake/baker/:baker', controller.baker)/*read all by baker*/
}
//STUFF TO EXPORT TO server.js