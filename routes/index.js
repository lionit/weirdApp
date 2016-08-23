var express = require('express'); 
var router = express.Router(); 
/* GET home page. */ 
router.get('/', function(req, res, next) { 
  //res.render('index', { title: 'Express' }); 
   res.writeHead(200); 
   res.write("this is my website"); 
     console.log("Test..."); 
     res.end(); 
 }); 
 
 module.exports = router; 

