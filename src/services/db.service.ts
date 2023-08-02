import pgPromise from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';
import { DatabaseResponse } from '../models';

export const DB_SERVICE = (db: pgPromise.IDatabase<{}, pg.IClient>) => ({
    func: async <T>(procName: string, params: any[] = [])  => {
        const res = await db.func<DatabaseResponse<T>[]>(procName, params);

        return res 
            ? res[0] 
            : res;
    }
})