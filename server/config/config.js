require('dotenv').config(); // pull all data from .env file and put into process.env
const envVars = process.env;
module.exports = {
    port: envVars.PORT,
    env : envVars.NODE_ENV,
    mongo :{
        uri: envVars.MONGODB_URI,
        port: envVars.MONGO_PORT,
        isDebug: envVars.MONGOOSE_DEBUG
    }
};