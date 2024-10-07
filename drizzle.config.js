/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:r9QjxeXwD8uR@ep-bold-dust-a5wfykek.us-east-2.aws.neon.tech/mockmate?sslmode=require',
    }
  };