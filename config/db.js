const mongooseBaseName = 'dnd-campaign-tracker'

const database = {
    development: `mongodb://127.0.01:27017/${mongooseBaseName}-development`,
    test: `mongodb://127.0.01:27017/${mongooseBaseName}-test`
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb