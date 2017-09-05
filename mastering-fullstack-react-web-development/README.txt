Source code: https://github.com/PacktPublishing/Mastering-Full-Stack-React-Web-Development

1, Install Node, NPM, MongoDB (RoboMongo)
2, Create mongo server using: "mongod" (need to create c:\data\db folders first)
3, Connect to mongodb server using: "mongo"
4, Import data to mongo db: "mongoimport --db local --collection articles --jsonArray initData.js --host=127.0.0.1"
5, "npm init --yes"
6, install Falcor (is the middleware to handle all the requests from client-side 
                    to one JSON file that contains all the data get from multiple 
                    API endpoints. When the structure of data on any API endpoint 
                    will change, we just need to configure in Falcor, not both in 
                    client-side and server-side. Falcor will auto sync data)
7, Import data to mongo db: "mongoimport --db local --collection pubUsers --jsonArray initPubUsers.js --host=127.0.0.1" (c5a0df4e293953d6048e78bd9849ec0ddce811f0b29f72564714e474615a7852 | 123456pubApp | http://www.xorbin.com/tools/sha256-hash-calculator)