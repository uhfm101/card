var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', );
});

router.post('/card', function(req, res){
  console.log(req.body.dateOfBirth)
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1: req.body.addressLine1,
    addressLine1: req.body.addressLine1,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    accountNumber: createAccountNumber(),
    currentDate: new Date(),
    cardClass: getCardClass(req.body.type),
    startDate: new Date(req.body.startDate),
  })
})

module.exports = router;

function createAccountNumber(){
  let accNum = ""
  for (let i = 0; i < 5; i++){
    let temp = Math.floor(Math.random()*10);
    accNum += temp;
  }
  return accNum;
}

function getCardClass(type){
  if (type === "Platinum"){
    return "platinum"
  } else if (type === "Gold"){
    return "gold"
  } else if (type === "Bronze"){
    return "bronze"
  } else{
    return ""
  }
}