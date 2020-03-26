module.exports = app => {
    const news = require("../controllers/news.controller.js");

    // Create a new News.
    app.post("/news", news.create);

    // Get all News.
    app.get("/news", news.getAll);
}