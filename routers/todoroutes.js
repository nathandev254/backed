import express from "express";
import {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todocontroller.js";

const UseRouter = express.Router();

UseRouter.route("/").get(getTodos).post(createTodo);
UseRouter.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default UseRouter;
