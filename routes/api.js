import express from 'express'

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    user: "Pranav",
  });
  console.log("*************",res);
});

export default router;