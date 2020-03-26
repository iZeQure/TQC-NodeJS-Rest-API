const sql = require("./database.js");

class News {
    // Constructor.
    constructor(news) {
        this.version = news.version;
        this.title = news.title;
        this.body = news.body;
        this.attachmentURL = news.attachmentURL;
        this.jokeId = news.jokeId;
    }

    static create(newNews, result) {
        sql.query("INSERT INTO news SET ?", newNews, (err, res) => {
            if (err) {
                console.error(`Error : ${err}`);
                result(err, null);
                return;
            }
            console.log(`Created News : `, {
                version: res.version,
                title: res.title,
                body: res.body,
                attachmentURL: res.attachmentURL,
                jokeId: res.jokeId
            });
            result(null, {
                version: res.version,
                title: res.title,
                body: res.body,
                attachmentURL: res.attachmentURL,
                jokeId: res.jokeId
            });
        });
    }

    static getAll(result) {
        sql.query("SELECT * FROM news", (err, res) => {
            if (err) {
                console.error(`Error : ${err}`);
                result(null, err);
                return;
            }

            console.log(`News : ${res}`);
            result(null, res);
        });
    };
}

module.exports = News;