require("dotenv").config();
const app = require("./src/app");

app.listen(5000,()=>{
    console.log("Server is running at port 3000")
})