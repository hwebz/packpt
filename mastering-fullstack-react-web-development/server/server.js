import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import routes from './routes.js';

// mongoose.connect('mongodb://localhost/local');

// const articleSchema = {
//     articleTitle: String,
//     articleContent: String
// };

// const Article = mongoose.model('Article', articleSchema, 'articles');
const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware for enabling cross-origin resource sharing (CORS) requests
app.use(cors());

// This is required by falcor-express middleware
// to work correctly with falcor-express()
app.use(bodyParser.json({
    extended: false
}));

// Allow you to post usernames and passwords to the backend.
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.get('/', (req, res) => res.send('Publishing App Initial Application'));
// app.get('/', (req, res) => {
//     Article.find((err, articlesDocs) => {
//         const ourArticles = articlesDocs.map((articleItem) => {
//             return `<h2>${articleItem.articleTitle}</h2></p>${articleItem.articleContent}</p>`;
//         }).join('<br />');

//         res.send(`<h1>Publishing App Initial Application!</h1>${ourArticles}`);
//     });
// });

// Manage Falcor at the backend
let cache = {
    articles: [
        {
            id: 987654,
            articleTitle: 'Lorem ipsum - article one',
            articleContent: 'Here goes the content of the article'
        },
        {
            id: 123456,
            articleTitle: 'Lorem ipsun - article two',
            articleContent: 'Sky is the limit, the content goes here'
        }
    ]
};

const model = new falcor.Model({
    'cache': cache
});

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
    // return model.asDataSource();
    return new falcorRouter(routes); // router will also return DataSource but depends on which route users request
}));
app.use(express.static('dist'));

app.server.listen(process.env.PORT || 3000);
console.log('Started on port ' + app.server.address().port);

export default app;