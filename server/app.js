const fastify = require("fastify")({
  logger: true,
});

/**
 * @param {String} name
 * @param {String} gender
 * @param {Number} age
 * @param {Number} ts
 */
const users = [];

const MALE = "MALE";
const FEMALE = "FEMALE";
const GENDER = {
  [MALE]: MALE,
  [FEMALE]: FEMALE,
};

// Declare a route
fastify.get("/user", function (req, res) {
  const { limit } = req.query;
  let resUsers = [...users];
  const numLimit = Number(limit);
  // console.log(req.query);
  // console.log(numLimit);
  if (!Number.isNaN(numLimit) && Number.isInteger(numLimit) && numLimit > 0) {
    resUsers = resUsers.slice(0, numLimit);
  }

  res.status(200);
  res.send({
    code: 0,
    users: resUsers,
  });
});

fastify.post("/user", (req, res) => {
  const reqUsers = req.body;
  for (const u of reqUsers) {
    const { name, gender, age } = u;
    if (!(gender in GENDER)) {
      res.status(400);
      res.send({
        code: 400001,
        success: false,
        message: "invalid gender",
      });
      return;
    }
    if (!(Number.isInteger(age) && age > 0)) {
      res.status(400);
      res.send({
        code: 400002,
        success: false,
        message: "invalid age, age must be a integer",
      });
      return;
    }
    if (typeof name !== "string") {
      res.status(400);
      res.send({
        code: 400003,
        success: false,
        message: "invalid name, name must be a string",
      });
      return;
    }
    const user = {
      name,
      age,
      gender,
      ts: Date.now(),
    };
    users.push(user);
  }

  res.send({
    code: 0,
    success: true,
  });
});

// [
//   {
//       "name": "mm",
//       "age": 29,
//       "gender": "FEMALE",
//       "ts": 1684761513350
//   },
//   {
//       "name": "yy",
//       "age": 29,
//       "gender": "FEMALE",
//       "ts": 1684761513350
//   },
//   {
//       "name": "kk",
//       "age": 29,
//       "gender": "FEMALE",
//       "ts": 1684761513350
//   },
//   {
//       "name": "dd",
//       "age": 29,
//       "gender": "FEMALE",
//       "ts": 1684761513350
//   }
// ]

fastify.delete("/user/:uid", (req, res) => {
  const uid = req.params.uid;
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    if (user.name === uid) {
      users.splice(index, 1);
      break;
    }
  }
  res.send({
    code: 0,
    success: true,
    users,
  });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
