const express = require("express");
const { connectToMongoDB } = require('./connect');



const URL = require("./models/url");
const path = require('path');

const urlRoute = require('./router/url');
const staticRoute = require("./router/staticRouter")
const userRoute = require("./router/user")

const app = express();
const PORT = 3001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log('MongoDB connected')
    )
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());


app.use('/url', urlRoute);
app.use('/', staticRoute);
app.use('/user', userRoute);
app.get("/test", async (req, res) => {
    const allURL = await URL.find({});
    // return res.end(`
    //     <html>
    //     <head></head>
    //     <body>
    //     <ol>
    //     ${allURL.map(url => `<li>${url.shortId} -    ${url.redirectURL} -  ${url.visitHistory.length}</li>`).join()}</ol
    //     </body>
    //     </html>`);
    return res.render('home', { urls: allURL })
})
app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now() },
            }
        });
    res.redirect(entry.redirectURL)

});



app.listen(PORT, () => {
    console.log(`Port 3001 has been started : ${PORT}`);
})
