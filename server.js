import "dotenv/config";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
