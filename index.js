const express = require("express");
const userRouter = require("./routes/users.routes"); // importing userRoute from the router
const productRouter = require("./routes/products.route");

const app = express();

app.use("/users", userRouter);

app.use("/products", productRouter);



app.listen(4000, (err)=> {
    console.log("server is listen to http://localhost:4000");
});

