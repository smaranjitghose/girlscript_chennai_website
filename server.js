// require the application
const app = require("./app");

// main server settings
const PORT = process.env.PORT || 3000;

// listen to port 3000
const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Application started on port:${PORT}`);
});
