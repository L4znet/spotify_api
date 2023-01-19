const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: logger.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new logger.transports.File({ filename: 'error.log', level: 'error' }),
        new logger.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = {
    logger
};