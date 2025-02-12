const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const DIRECTORIES = {
    '_preview-components/': 'files',
    '_site/assets/img/': 'all'
};

let filesRemoved = 0;

for (const [dir, delAction] of Object.entries(DIRECTORIES)) {
    let dircontent = fs.readdirSync(dir);
    dircontent.forEach(file => {
        let filepath = dir + file;
        if (fs.existsSync(filepath)) {
            switch (delAction) {
                case "files":
                    let isDirectory = path.extname(filepath) === '';
                    if (!isDirectory) {
                        removeFile(filepath);
                    }
                    break;
                case "all":
                    removeFile(filepath);
                    break;
                default:
                    console.log(`ERROR: Invalid delAction "${delAction}"`);
            }
        }
        else {
            console.log(`ERROR: Could not find ${filepath}`);
        }
    });
}

function removeFile(filepath) {
    console.log('Deleting ' + filepath);
    fse.remove(filepath, err => {
        if (err) {
            return console.error(err);
        }
    });
    filesRemoved++;
}

console.log(`\nDone. Deleted ${filesRemoved}. Now run "gulp html" and "npm run publish-dev".`);
