# Repository for the documentation site for the Frontend Styleguide


This repo includes code and documentation for the Frontend Styleguide.

The documentation site can be found [here](https://detfaellesdesignsystem.github.io/dkfds-docs/).

The components project can be found [here](https://github.com/detfaellesdesignsystem/dkfds-components).

The plugins project can be found [here](https://github.com/detfaellesdesignsystem/dkfds-plugins).

## Running locally

The Style Guide documentation is built using Jekyll as the file framework and gulp is used for task management

### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
1. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_in_application.html#getting-started---installing-bundler-and-bundle-init)


### Building the documentation with gulp

To work on the site, clone a local copy of this repository. Then open a terminal and run the following commands to install project dependencies:

```sh
npm install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance.

If you are coding and want to watch for changes run the following command:

- `npm run watch`: Runs a series of commands that watches for any changes in both the Standards node module and the root level asset folders in this repo.
## Puppeteer
Puppeteer is a node package included in this project, which helps with generating the PDFs and screenshots of the docs site
### puppeteer.js - generate documentation
The puppeteer script must be run after each release, so we have a version of the documentationsite that corresponds to each version of dkfds.

In order to run the script be sure to have the pdf root folder created in the dkfds-docs project including the screenshots subfolder, so we have the following folder structure locally:
- dkfds-docs
    - pdf
        - screenshots

Now, follow these steps
1. Open command prompt and navigate to your project folder.
2. Run the command ` node puppeteer.js `
3. Wait for the script to finish
4. Zip the files created in the pdf folder - do NOT commit the generated files! 
Filename should have the following format: 3.0.3-fds.zip - indicating 3.0.3 as the dkfds version that corresponds to this version of dkfds-docs.
### example-dumps.js - Update screenshots of pages in examples sites
1. Open and navigate to your dkfds-docs project locally in cmd
2. run the command ` node example-dumps.js `
3. Wait for it to finish
4. Verify the images has been updated

### Development

Puppeteer is run through the puppeteer.js and example-dumps.js files in the root folder of this project.

#### puppeteer.js
2 arrays has been included containing URLs to all pages we want to generate a pdf and screenshot of.

If a URL is changed or one is added, please update the script to include the changes.
#### example-dumps.js
Remember to update the array containing the list of pages to take screenshots of if a new page is created.
