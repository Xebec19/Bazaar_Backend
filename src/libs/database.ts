import Logger from "./logger";

const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise, // overriding the default (ES6 Promise);
    capSQL: true,
};

const pgp = require('pg-promise')(initOptions);

const monitor = require('pg-monitor');

monitor.attach(initOptions); // attach to all query events;

monitor.setTheme('matrix'); // change the default theme;

monitor.setLog((msg: string, info: string) => {
    Logger.info('--SQL : ' + msg + ' ' + info);
});
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'bazaar',
    user: 'postgres',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
    // see https://github.com/vitaly-t/pg-promise#library-de-initialization
    allowExitOnIdle: false
};

const db = pgp(cn); // database instance;

export default db;