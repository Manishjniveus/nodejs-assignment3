const emptyValueChecker = function (str) {
    //logger.info(`Entered inputValidator.js`);
    if (typeof str === "string" && str.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  };
  
  module.exports = emptyValueChecker;