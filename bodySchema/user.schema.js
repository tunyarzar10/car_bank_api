const { body, query } = require("express-validator");

const userCreateSchema = [
  body("email").exists({ checkFalsy: true }),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters!")
    .matches(/\d/)
    .withMessage("Password should include numeric characters")
    .matches(/[a-zA-Z]/)
    .withMessage("Password should include alphabetic characters"),
  body("email").isEmail(),
];

module.exports = { userCreateSchema };
