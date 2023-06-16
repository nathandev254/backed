import express from "express";
import todoroutes from "./routers/todoroutes.js";
import AuthRouter from "./routers/authroutes.js";

const app = express();
const PORT = 8081;

app.use(express.json())
app.use(express.urlencoded ({extended: true}));
app.use("/todos", todoroutes);
app.use('/',AuthRouter)



app.listen(PORT, () => {
  console.log(`server `);
});
