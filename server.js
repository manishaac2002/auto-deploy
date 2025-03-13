import express from "express"
const application = express();
const port = 3000;

application.get("/res",(req,res)=>{
res.send("This meesage received")
})


application.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
