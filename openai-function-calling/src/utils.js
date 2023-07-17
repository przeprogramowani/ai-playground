import ora from 'ora';

let spinner = null;

export function createLoader(msg) {
    console.clear();
    spinner = ora(msg);
    spinner.start();
}

export function cancelLoader() {
    spinner.stop();
    console.clear();
}