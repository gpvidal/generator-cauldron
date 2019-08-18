const IIC2513_ASCII_ART = `
    _____ _____ _____ ___  _____ __ ____
   |_   _|_   _/ ____|__ \\| ____/_ |___ \\
     | |   | || |       ) | |__  | | __) |
     | |   | || |      / /|___ \\ | ||__ <
    _| |_ _| || |____ / /_ ___) || |___) |
   |_____|_____\\_____|____|____/ |_|____/
                                             `;


const INITIAL_MESSAGE = `
  ${IIC2513_ASCII_ART}
  Welcome to project template generator!
  Remember, in order to run your project you need:

    * PostgreSQL
    * Node (10 or above)
    * Yarn
  `;

module.exports = {
  INITIAL_MESSAGE,
};
