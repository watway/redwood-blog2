import { createLogger, redactionsList } from '@redwoodjs/api/logger'
// import { createWriteStream } from 'pino-logflare'
import pinoLogDna from 'pino-logdna'

/**
 * Creates a pino-logflare stream
 *
 * @param {object} options - Logflare options including
 * your account's API Key and source token id
 *
 * @typedef {DestinationStream}
 */
// export const stream = createWriteStream({
//   apiKey: process.env.LOGFLARE_API_KEY,
//   sourceToken: process.env.LOGFLARE_SOURCE_TOKEN,
// })

export const stream = pinoLogDna({
  key: process.env.LOGDNA_INGESTION_KEY,
  onError: console.error,
})

/**
 * Creates a logger with RedwoodLoggerOptions
 *
 * These extend and override default LoggerOptions,
 * can define a destination like a file or other supported pino log transport stream,
 * and sets whether or not to show the logger configuration settings (defaults to false)
 *
 * @param RedwoodLoggerOptions
 *
 * RedwoodLoggerOptions have
 * @param {options} LoggerOptions - defines how to log, such as pretty printing, redaction, and format
 * @param {string | DestinationStream} destination - defines where to log, such as a transport stream or file
 * @param {boolean} showConfig - whether to display logger configuration on initialization
 */
export const logger = createLogger({
  options: {
    prettyPrint: true,
    level: 'trace',
    // redact: ['data.posts[*].title', 'data.users[*].email', 'email'],
    redact: [
      ...redactionsList,
      'data.posts[*].title',
      'data.users[*].email',
      'email',
    ],
  },
  // destination: 'log/api.log',
  // destination: stream,
})
