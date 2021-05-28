const yargs = require("yargs");
const fs = require('fs/promises');
const path = require("path");

const chalk = require("chalk");
const errorColor = chalk.red.italic;
const successColor = chalk.green.bold;
const warningColor = chalk.yellow;

const argv = yargs
    .command(["create <filename> [filepath]", "c"], "Creates a template source file for the component", {},
        (argv) => {   
            const filenameWithDot = argv.filename + '.js';
            const defaultFilepath = "./src/components/";
            const filepath = path.resolve(((argv.filepath) ? argv.filepath : defaultFilepath), filenameWithDot);
            const defaultContent = `
import React from "react";
        
function ${argv.filename} () {
    return (
         <div>
             ${argv.filename} is a templated component. Now you can work with it.
         </div>
    ); 
}

export default ${argv.filename};`;

            fs.writeFile((filepath), defaultContent)
                .then(() => console.log(successColor("Your component has been saved successfully")))
                .catch(e => console.error(errorColor("An error has occurred"), e));

        })
    .demandCommand(1, warningColor('At least 1 command should be passed'))
    .argv;