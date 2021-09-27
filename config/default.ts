import { resolve } from "path";
import {glob} from 'glob'
import { getHeapSnapshot } from "v8";
const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
    db_postgres:{
        url:'postgres://postgres:123456@localhost/sample',
        host:'127.0.0.1',
        port: 5432,
        db:'crypto_exchange',
        user:'postgres',
        password:'123456'
    },
    orm:{
        entities:    [`${SOURCE_PATH}/**/*.entity.ts`],
        //[resolve(`${SRC_PATH}/**/*.entity.ts`)],//[`${SRC_PATH}//**//*`],
        sync: true
    },
    secret:{
        bcrypt:'alimohseni@62',
        bcryptnum:10,
        jwt:'alimohseni@62'
    }
};