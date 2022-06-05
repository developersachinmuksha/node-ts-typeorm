# Awesome Nodejs Project Build with TypeORM to understand One-to-one, One-to-many and Many-to-many relations

Prerequisites:
    - Installed `NodeJs` on your system
    - Make sure you have MySQL running

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command. This will start server with auto reoload off
4. Run `npm run auto` command to start server with auto reload enable

Note: Use either 3rd or 4th steps.

Troubleshoots:
    - If database not connecting, then try changing congiguration in `./src/data-source.ts` file
    - If some packages are not installed after running `npm i` install them manually
    - This project uses `4000` PORT so make sure other services are not using this PORT

Try APIs in swagger URL: (Note: Swagger documentation is incomplete at the moment. Will update it later)
`http://localhost:4000/api-docs`

Note: If you changed your PORT value in `./src/index.ts` then use the updated port for swagger URL

Reference links:
1. https://typeorm.io/
2. https://typeorm.io/readme#step-by-step-guide
3. https://orkhan.gitbook.io/typeorm/docs/many-to-many-relations