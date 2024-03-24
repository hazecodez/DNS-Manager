const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5174",
        methods: ["GET", "POST"],
        credentials: true
    })
);

const route = require("./Routes/route");
app.use("/", route);

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`);
});
