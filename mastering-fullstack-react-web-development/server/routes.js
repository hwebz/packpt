import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

const articleSchema = {
    articleTitle: String,
    articleContent: String
};

const Article = mongoose.model('Article', articleSchema, 'articles');

const PublishingAppRoutes = [{
    route: 'articles.length',
    get: () => {
        // const articlesCountInDB = 2; // hardcoded for example
        // return {
        //     path: ['articles', 'length'],
        //     value: articlesCountInDB
        // }
        return Article.count({}, (err, count) => count)
            .then((articlesCountInDB) => {
                return {
                    path: ['articles', 'length'],
                    value: articlesCountInDB
                }
            });
    }
}, {
    route: 'articles[{integers}]["id", "articleTitle", "articleContent"]',
    get: (pathSet) => {
        const articlesIndex = pathSet[1];
        // const articlesArrayFromDB = [{
        //     'articleId': '987654',
        //     'articleTitle': 'BACKEND Lorem ipsum - article one',
        //     'articleContent': 'BACKEND Here goes the content of the article'
        // }, {
        //     'articleId': '123456',
        //     'articleTitle': 'BACKEND Lorem ipsum - article two',
        //     'articleContent': 'BACKEND Sky is the limit, the content goes here.'
        // }]; // That are our mocked articles from MongoDB

        // let results = [];
        // articlesIndex.forEach((index) => {
        //     const singleArticleObject = articlesArrayFromDB[index];
        //     const falcorSingleArticleResult = {
        //         path: ['articles', index],
        //         value: singleArticleObject
        //     };
        //     results.push(falcorSingleArticleResult);
        // });
        // return results;

        return Article.find({}, (err, articlesDocs) => articlesDocs)
            .then((articlesArrayFromDB) => {
                let results = [];
                articlesIndex.forEach((index) => {
                    const singleArticleObject = articlesArrayFromDB[index].toObject();
                    const falcorSingleArticleResult = {
                        path: ['articles', index],
                        value: singleArticleObject
                    };
                    results.push(falcorSingleArticleResult);
                });
                return results;
            });
    }
}];

export default PublishingAppRoutes;