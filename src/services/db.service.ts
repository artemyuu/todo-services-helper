import pgPromise from 'pgPromise';
import { DatabaseResponse } from '../models';

export const DB_SERVICE = (db: pgPromise.IDatabase) => ({
    proc: async <T>(procName: string, params: any[] = [])  => {
        const res = await db.proc<DatabaseResponse<T>[]>(procName, params);
        
        return res 
            ? res[0] 
            : res;
    },

    func: async <T>(procName: string, params: any[] = [])  => {
        const res = await db.func<DatabaseResponse<T>[]>(procName, params);

        return res 
            ? res[0] 
            : res;
    }
})