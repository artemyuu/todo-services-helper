import pgPromise from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';
import { DatabaseResponse } from '../models';

export const DB_SERVICE = (db: pgPromise.IDatabase<{}, pg.IClient>) => ({
    func: async <T>(procName: string, params: any[] = [])  => {
        const dbResponse = await db.func<DatabaseResponse<T>[]>(procName, params);
        const { result, errors } = dbResponse[0];

        if(errors) {
            throw errors;
        }

        return result;
    }
})