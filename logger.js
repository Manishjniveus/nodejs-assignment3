const {createLogger,transports,format} =require('winston');

const logger =createLogger({
    transports:[
        new transports.File({
            filename: 'info.log',
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        })
    ],
    exceptionHandlers: [new transports.File({ filename: "exceptions.log" })],
    rejectionHandlers: [new transports.File({ filename: "rejections.log" })],
})

module.exports = logger;