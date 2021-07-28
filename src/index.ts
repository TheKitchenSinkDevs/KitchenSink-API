/**
 * Imports
 */
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

// Routes
import { groceryRouter } from "./routes/grocery/grocery.router";

/**
 * Config and setup
 */
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`Express listening at http://localhost:${port}`);
});


/**
 * Routing
 */

app.get("/", (req, res) => {
	res.send("Welcome to the Plumbing of the Kitchen Sink!");
});



app.use("/api/grocery", groceryRouter);


