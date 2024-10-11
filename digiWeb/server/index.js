const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors

// Load environment variables
dotenv.config();
console.log(dotenv);

const app = express();
connectDB();
app.use(cors());

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/user"));
app.use("/api/protected", require("./routes/protected"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
