# PostCSS Sepia [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-sepia.svg)](https://www.npmjs.com/package/postcss-sepia)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-sepia.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-sepia)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to get the sepia version of a color


## Installation

```
npm install postcss-sepia
```

## Examples

```css
/* input */
div { color: sepia(#34bbed) }
```
```css
/* output */
div { color: #d1ba91 }
```

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-sepia')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sepia = require('postcss-sepia');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            sepia()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
