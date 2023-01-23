class Database {
    constructor() {
        this.tweets = [];
    }

    query({lastTweetId, pageSize}) {
        if(!lastTweetId) {
            return this.tweets.slice(0, pageSize);
        }
        for(let i=0; i<this.tweets.length; i++) {
            const currentTweet = this.tweets[i];
            if(currentTweet.id === lastTweetId) {
                return this.tweets.slice(i+1, i+1+pageSize);
            }
        }
        return [];
    }

    insert(tweet) {
        this.tweets.push({
            tweet,
            id: getRandomString({lenght: 50}),
            timestamp: (newDate()).getTime()
        });
    }
}

const database = new Database();

function getTweetsHandler(data) {
    const pageSize = data.pageSize;
    const sortOrder = data.sortOrder;
    const lastTweetId = data.lastTweetId;

    if(sortOrder !== "recent") {
        throw new Error("Invalid sort order");
    }

    return database.query({lastTweetId, pageSize});
}

function postTweetHandler(data) {
    database.insert(data.tweet);
}

const endpoints = {
    "/tweets": {
        "get": getTweetsHandler,
        "post": postTweetHandler
    }
}