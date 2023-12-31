import {neon, neonConfig} from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';
import { sql } from 'drizzle-orm';

dotenv.config();
neonConfig.fetchConnectionCache = true;


const dbConnection = () => {
  const sqlQuery = neon(process.env.NEON_CONNECTION_STRING!);
  
  const db = drizzle(sqlQuery);
  
  return db;
}


export const testConnection = async() => {
  
  const db = dbConnection();
  const result = await db.execute(sql`SELECT version()`);
  
  console.log('DB:', result.rows[0])
  
}


export default dbConnection();