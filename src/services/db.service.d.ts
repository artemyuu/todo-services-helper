import pgPromise from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';
import { DatabaseResponse } from '../models';
export declare const DB_SERVICE: (db: pgPromise.IDatabase<{}, pg.IClient>) => {
    func: <T>(procName: string, params?: any[]) => Promise<DatabaseResponse<T>>;
};
