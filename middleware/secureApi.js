let secureApi = (req, res, next) => {
  console.log("ami", req.headers);

  if (req.headers.authorization == "z5;F_v;K5>K2") {
    next();
  } else {
    res.send({ error: "Invalid api" });
  }
};

module.exports = secureApi;
