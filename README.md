# instruction steps

## SERVER (Backend)
Navigate to the "server" folder and execute the following command:
- npm i

Ensure that the database credentials match your user database
- In "server" folder, go to the "config" folder -> config.json
- Adjust the "username" and "password" to match the user database you have

Then follow the following command instructions:
- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all

Rename the .env.example file to .env and fill in the variables according to your preferences.

Afterward, start the server with the following command:
- npm run start

## CLIENT (Frontend)
Go to the "client" folder and run the following command:
- npm i

Next, execute the following command:
- npm run dev

## Application Credentials
To use the application, you can use the following credentials:
- URL: http://localhost:5173/
- Email: admin@gmail.com
- Password: 12345

Alternatively, you can create a new user on register page.