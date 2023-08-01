import pgPromise from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';
import { DatabaseResponse } from '../models';
export declare const DB_SERVICE: (db: pgPromise.IDatabase<{}, pg.IClient>) => {
    proc: <T>(procName: string, params?: any[]) => Promise<DatabaseResponse<T> | null>;
    func: <T_1>(procName: string, params?: any[]) => Promise<DatabaseResponse<T_1>>;
};
