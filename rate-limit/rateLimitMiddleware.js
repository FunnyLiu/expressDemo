const { RateLimiterMemory } = require("rate-limiter-flexible");

const rateLimiter = new RateLimiterMemory({
  points: 2,
  duration: 1,
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter
    .consume('limit', 1) // Consume 2 points
    .then((rateLimiterRes) => {
      // Allowed
      next();
    })
    .catch((rej) => {
        res.status(429).send("Too Many Requests");
    });
};

module.exports = rateLimiterMiddleware;
