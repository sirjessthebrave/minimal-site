# Sass Minimal Site

## Purpose
This is a bare bones Scalable and Modular Architecture for CSS (SMACSS) website using Sass.

## File and Folder Structure

* `fonts`
* `images`
* `sass`
    * `partials`
        * `base`
        * `components`
        * `global`
    * `style.scss`
* `scripts`
* `stylesheets`
    * `formalize.css`
    * `style.css`
    * `style.css.map` 
* `.gitignore`
* `gulpfile.js`
* `index.html`
* `package.json`

## Sass Commands

### Compile one file on demand

To compile the Sass manually, run the following command:

`sass input.scss output.css`

This compiles the `input.scss` file into the `output.css` file.

For this minimal site, run the command below:

`sass sass/style.scss stylesheets/style.css`

`style.scss` is the input SCSS file, and `style.css` is the output CSS file.

### Watch for changes to a file

To watch your Sass so that recompiles after every change to a file:

`sass --watch <input file>:<output file>`

For the minimal site, run:

`sass --watch sass/style.scss:stylesheets/style.css`

### Watch for changes within a folder

To watch your Sass so that recompiles after every change within a folder:

`sass --watch <input folder>:<output folder>`

For the minimal site, run:

`sass --watch sass:stylesheets`

The `sass` folder contains our Sass and SCSS files that we want to watch, while the `stylesheets` folder contains our compiled CSS. 

## Option - Install Gulp

This site comes with an optional `gulpfile.js` with a Gulp task runner that will re-compile your Sass as you make changes as well as lint your JavaScript using `jshint`.

To install Gulp run `npm install`.

To run the Gulp task use the command `gulp`.

To exit Gulp, type Ctrl+C.
