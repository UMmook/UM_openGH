// mongoose 접속 구현

const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
        dbName: 'nodejs',
        useNewUrlParser: true
    }).then(() => {
        console.log("DB 접속 ok");
    }).catch((err) => {
        console.error("DB 접속 err", err);
    });
};

mongoose.connection.on('error', 
    () => { console.error('mongo db error', error); }
);

mongoose.connection.on('disconnected', 
    () => { 
        console.error('mongo db disconnected. reconnecting', error);
        connect(); 
    }
);

module.exports = connect;