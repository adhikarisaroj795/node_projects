const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info", // Default log level
  format: format.combine(
    format.timestamp(), // Add timestamp to each log
    format.errors({ stack: true }), // Log stack trace for errors
    format.json() // Format logs as JSON
  ),
  defaultMeta: { service: "your-service-name" }, // Add default metadata
  transports: [
    // Write logs to a file
    // new transports.File({ filename: "error.log", level: "error" }), // Only error level logs
    // new transports.File({ filename: "combined.log" }), // All logs

    // Log to the console (useful for development)
    new transports.Console({
      format: format.combine(
        format.colorize(), // Colorize the output
        format.simple() // Simple format for console
      ),
    }),
  ],
});

// If we're not in production, log to the `console` with the `debug` level
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

// module.exports = logger;
