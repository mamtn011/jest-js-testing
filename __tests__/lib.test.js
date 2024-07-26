const {
  generateResult,
  validateInput,
  checkAndGenerate,
} = require("../js/lib");

//? generate result function
// const generateResult = function (userid, title) {
//   return `User ID: ${userid} created an article titled ${title}`;
// };
test("testing generate result", () => {
  expect(generateResult("1", "my title")).toBe(
    "User ID: 1 created an article titled my title"
  );
});

//? validate input function
// const validateInput = function (value, required, isNumber) {
//   if (!value) {
//     return false;
//   }

//   if (required && value.toString().trim().length === 0) {
//     return false;
//   }

//   if (isNumber && isNaN(+value)) {
//     return false;
//   }

//   return true;
// };

test("testing validate input", () => {
  expect(validateInput(1344, true, true)).toBeTruthy();
});
