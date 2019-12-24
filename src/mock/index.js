const Mock = require("mockjs");
const Random = Mock.Random;
Mock.mock("/api/form", "post", () => {
  return Mock.mock({
    message: "OK"
  });
});

Mock.mock("/api/form", "POST", () => {
  return Mock.mock({
    "shoe|12": [
      {
        image: Random.dataImage("50x50", "shoe"),
        title: Random.ctitle(2, 5)
      }
    ]
  });
});
