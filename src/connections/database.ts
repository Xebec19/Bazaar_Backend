
const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);
// See all options: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

const monitor = require('pg-monitor');

monitor.attach(initOptions); // attach to all query events;
// See API: https://github.com/vitaly-t/pg-monitor#attachoptions-events-override

monitor.setTheme('matrix'); // change the default theme;
// Other themes: https://github.com/vitaly-t/pg-monitor/wiki/Color-Themes

/*monitor.setLog((msg, info) => {
    // save the screen messages into your own log file;
});*/
// See API: https://github.com/vitaly-t/pg-monitor#log

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'bazaar',
    user: 'postgres',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
    // see https://github.com/vitaly-t/pg-promise#library-de-initialization
    allowExitOnIdle: true
};

const db = pgp(cn); // database instance;

export default db;