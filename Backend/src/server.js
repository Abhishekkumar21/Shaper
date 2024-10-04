const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;
//start server
app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`));
