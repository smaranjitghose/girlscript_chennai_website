import csv from 'csv-parse'
import fs from 'fs'

/**
 * An Async task to return a json of all the columns of the csv
 * @param {Array} keys: Keys to which the values are to be mapped
 * @returns {Promise} resolves to an array
 */
export const generateJSONFromCSV = (keys) =>
    new Promise((resolve, reject) => {
        const result = []
        fs.createReadStream(`${process.cwd()}/${process.env.FILENAME}`)
            .pipe(csv({
                trim: true,
                skip_lines_with_empty_values: true,
                columns: keys,
                from_line: 2
            }))
            .on('data', (data) => result.push(data))
            .on('end', () => resolve(result))
            .on("error", () => reject({
                message: "File Parsing Error"
            }))
    })