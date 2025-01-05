import inquirer from 'inquirer';
import chalk from 'chalk';

export async function pressioneEnter() {
    await inquirer.prompt({
        type: 'input',
        name: 'continuar',
        message: chalk.gray('\nPressione Enter para continuar...'),
    });
}