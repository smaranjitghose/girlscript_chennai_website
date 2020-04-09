import 'dotenv/config'
import {
    Helper,
    CSVParser,
    Mailer
} from './utils'

if (!Helper.checkEnvVariables)
    throw Error('Please provide all the env variables')

if (!Helper.checkFileExists)
    throw Error('Please provide the file')

CSVParser.generateJSONFromCSV(['name', 'email'])
    .then(records => {
        const promises = []

        records.forEach(record =>
            promises.push(Mailer.sendEmailToSingleParticipant(record.name, record.email, "Sampe Mail"))
        )

        //TODO: Map promise chain into liner element to check instances of err
        Promise.all(promises).then(() => {
            console.log("Email Successfully Sent")
        }).catch(err => console.log(err))

    })
    .catch(error => {
        throw Error(error.message)
    })