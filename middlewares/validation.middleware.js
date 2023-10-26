
const { body, validationResult } = require('express-validator');

const validateRequest = async (req , res , next)=>{
    const rules =[
      body('name').notEmpty().withMessage("Name is required"),
      body('price').isFloat({gt:0}).withMessage("invalid price"),
      // body('image').isURL().withMessage("invalid url"),
    ];
    // run those rules
    await Promise.all(rules.map(rule => rule.run(req)));

    var validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errorMessages = validationErrors.array().map(error => error.msg);
      return res.render('new-product', { errorMessage: errorMessages });
  }
  
  next();
}

module.exports = validateRequest;