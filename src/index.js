// In src/index.js 
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const v1Router = require("./v1/routes/routing");
app.set('json spaces', 2);
app.use("/api", v1Router);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});