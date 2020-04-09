import fs from 'fs'

const ENV_VARIABLES = [
    'EMAIL',
    'PASSWORD',
    'FILENAME'
]
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_REGEX = /^[a-zA-Z ]+$/

/**
 * Checks if .env file has been initialized with all the required files
 * @returns {Boolean}
 */
export const checkEnvVariables = ENV_VARIABLES.every(variable => process.env[variable])

/**
 * Regex check for valid email
 * @returns {Boolean}
 */
export const isEmailValid = (email) => EMAIL_REGEX.test(str.toLowerCase())

/**
 * Regex check for valid name
 * @returns {Boolean}
 */
export const isNameValid = (name) => NAME_REGEX.test(str.toLowerCase())

/**
 * Gets the relative path of the file from node env variables and check if file exists
 * @returns {Boolean}
 */
export const checkFileExists = fs.existsSync(`${process.cwd()}/${process.env.FILENAME}`)