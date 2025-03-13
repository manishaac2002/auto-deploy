import express from "express";
import dotenv from "dotenv";

dotenv.config(); 

const application = express();
const port = process.env.PORT || 4000; 

application.get("/res", (req, res) => {
  res.send("This message received");
});

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
