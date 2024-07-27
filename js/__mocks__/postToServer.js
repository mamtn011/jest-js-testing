// const fetch = require("node-fetch");

// post to server
const postToServer = async function (data) {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // });

  // const postedData = await response.json();
  // return postedData;

  // console.log("mock data");
  return Promise.resolve(data);
};

module.exports = postToServer;
