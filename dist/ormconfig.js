"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    "type": "sqlite",
    "database": "db_tic",
    "entities": ["dist/src/entity/**/*.js"],
    "synchronize": false,
    "migrations": ["dist/src/db/migrations/*.js"],
    "cli": {
        migrationsDir: "src/db/migrations"
    }
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map