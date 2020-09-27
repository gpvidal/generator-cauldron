const ASCII_ART = `

                   (
                    )  )
                ______(____
               (___________)
                /         \\
               /           \\
              |             |
          ____\\             /____
         ()____'.__     __.'____()
              .'\` .'\`\`\`'. \`-.
             ().'\`       \`'.()

`;

const INITIAL_MESSAGE = `
  ${ASCII_ART}
  Welcome to cauldron project template generator!
  Remember, in order to create your project you need:

    * PostgreSQL
    * NodeJS LTS (10.x or 12.x)
    * Yarn
  `;

const FINAL_MESSAGE = `

  You're almost ready!

    1. Install dependencies (if you skipped that step)
    2. See /src/config/database.js
    3. Configure environment variables to point to your database
    4. Then 'yarn start' (or 'yarn dev')

  Happy coding! :)
`;

module.exports = {
  INITIAL_MESSAGE,
  FINAL_MESSAGE,
};
