import 'dotenv/config';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import db from './index';

// This will run migrations on the database, skipping the ones already applied
async function main() {
  console.log("Running migrations...")
  
  await migrate(db, { migrationsFolder: './drizzle' });
  
  console.log("Migrations complete!")
  
  process.exit(0);
}


main().catch((err) => {

  console.error(err);
  
  process.exit(0);

});

