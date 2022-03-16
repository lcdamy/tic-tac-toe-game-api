
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    "type": "sqlite",
    "database": "db_tic",
    "entities": ["dist/src/entity/**/*.js"],
    "synchronize": false,
    "migrations": ["dist/src/db/migrations/*.js"],
    "cli": {
        migrationsDir: "src/db/migrations"
    }
}

export default config;