import app from "./app.js";
import { config } from "./config/config.js";
import { connectToDB } from "./config/db.js";

connectToDB();

app.listen(config.PORT, () => {
  console.log(`Server is running on PORT ${config.PORT}`);
});
