import dotenv from 'dotenv'
import assert from 'assert'


dotenv.config();

const{port,sqlServer,sqlUser,sqlPwd,sqlDb,JWT_SECRET} = process.env

assert(port, "port is required");

const config ={
    port: port,
    sql:{
        user: sqlUser,
        password: sqlPwd,
        server: sqlServer,
        database: sqlDb,
        options: {
            encrypt: true,
            trustServerCertificate: false
        }

    },
    
}
export default config;