const News = require("../models/news.model.js");

// Create and Save a new News.
exports.create = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a News.
    const news = new News( {
        version: req.body.version,
        title: req.body.title,
        body: req.body.body,
        attachmentURL: req.body.attachmentURL,
        jokeId: req.body.jokeId
    });

    // Save News in the database.
    News.create(news, (err, data) => {
        if (err) 
            res.status(500).send({
                message: 
                    err.message || "Some error occurred while creating the News."
            });
        else res.send(data);
    });
};

exports.getAll = (req, res) => {
    News.getAll((err, data) => {
        if (err) 
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving news."
            });
        else res.send(data);
    });
};