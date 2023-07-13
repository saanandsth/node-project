const {constants} = require('../constants')
const errorHandler = (err,req,res,next) =>{
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Switch case for handling different status codes
  switch (statusCode) {
    case constants.VALIDATION_ERROR : 
    res.json({
      title : 'Validation Failed', 
      message : err.message, 
      stackTrace : err.stackTrace
    });
    break;
    case constants.NOT_FOUND :
    res.json({
      title : 'Not Found',
      message : err.message, 
      stackTrace : err.stackTrace
    });
    case constants.UNAUTHORIZED: 
    res.json({
      title : 'Unautherized',
      message : err.message,
      stackTrace : err.stackTrace
    });
    case constants.FORBIDDEN : 
    res.json({
      title : 'Forbidden',
      message : err.message,
      stackTrace : err.stackTrace
    });
    case constants.SERVER_ERROR :
      res.json({
        title :  'Server Error',
        message : err.message,
        stackTrace : err.stackTrace
      });
      default :
      console.log("No Error Found - ALL GOOD");
      break;
  }
  
}

module.exports = errorHandler