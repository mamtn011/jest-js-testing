const { generateResult } = require("../js/lib");

//? generate result function
// const generateResult = function (userid, title) {
//   return `User ID: ${userid} created an article titled ${title}`;
// };
test("testing generate result", () => {
  expect(generateResult("1", "my title")).toBe(
    "User ID: 1 created an article titled my title"
  );
});
