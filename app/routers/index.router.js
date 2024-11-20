import express from "express";
import errorMiddlewares from "../middlewares/error.middlewares.js";

const router = express.Router();

router.use("/api", (request, response, next ) => {
    console.log("hello World!!");
    next();
});

router.use(errorMiddlewares);

export default router;