import pgPromise from 'pg-promise';
import pg from 'pg-promise/typescript/pg-subset';
export declare const DB_SERVICE: (db: pgPromise.IDatabase<{}, pg.IClient>) => {
    func: <T>(procName: string, params?: any[]) => Promise<T>;
};
