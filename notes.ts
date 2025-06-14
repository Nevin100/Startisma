// ### ALL Prisma Notes will be written here :

// #Starting with Prisma:
// 1.) Prisma install : "npm install prisma @prisma/client" --> install Prisma and its client library
//    - Prisma is an ORM (Object Relational Mapping) tool that helps in database management

// 2.) Prisma init : "npx prisma init" --> Setup krne ke liye .env file mein DATABASE_URL set karna padega
//    - This command initializes Prisma in your project, creating a `prisma` folder with a `schema.prisma` file
//    - The `schema.prisma` file is where you define your data model and database

// #Terminologies :
// 1.) Prisma Client :
//    - Prisma Client is an auto-generated and type-safe query builder for Node.js and Type
//      Script applications.
//    - It allows you to interact with your database using JavaScript or TypeScript.
//    - You can use it to perform CRUD operations (Create, Read, Update, Delete) on your database.

// 2.) Prisma Migrate :
//    - Prisma Migrate is a powerful tool for managing your database schema.
//    - It allows you to create, modify, and apply migrations to your database schema.
//    - Migrations are version-controlled changes to your database schema, allowing you to evolve your
//      database structure over time.
//    - You can create migrations using the `npx prisma migrate dev` command, which generates SQL migration files
//      based on the changes in your `schema.prisma` file.

// 3.) Prisma Studio :
//    - Prisma Studio is a web-based GUI for managing your database.
//    - It allows you to view and edit your database records in a user-friendly interface.
//    - You can launch Prisma Studio using the `npx prisma studio` command, which
//      opens a web application in your default browser.

// 4.) Prisma Schema :
//    - The Prisma schema is a file (`schema.prisma`) where you define your data
//      model and database configuration.
//    - It uses a specific syntax to define models, fields, and relationships between them.
//    - The schema is the source of truth for your database structure and is used by Prisma to generate the
//      Prisma Client and migrations.

// 5.) Prisma Data Model :
//    - The data model is defined in the `schema.prisma` file and represents the
//      structure of your database.
//    - It consists of models, which are equivalent to database tables, and fields, which
//      are equivalent to columns in those tables.
//    - You can define relationships between models using fields that reference other models.

// 6.) Prisma Environment Variables :
//    - Prisma uses environment variables to configure the database connection.
//    - The `DATABASE_URL` environment variable is typically used to specify the connection string for
//      your database.

// 7.) Prisma CLI :
//    - The Prisma CLI (Command Line Interface) is a set of commands that you can use to interact with Prisma.
//    - It provides commands for generating the Prisma Client, running migrations, and managing your database
//      schema.

