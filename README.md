# ACD - Frontend Test

Using the following technology:

- [gulp](http://gulpjs.com/) (used for compiling/live reloading)
- [lost](https://github.com/corysimmons/lost/) (grid system)
- [jade](http://jade-lang.com/) (html)
- [stylus](https://learnboost.github.io/stylus/) (css)
- [coffee](http://coffeescript.org/) (javascript)

Using the following [psd template](https://dribbble.com/shots/1583834--PSD-Have-you-seen-my-new-CV/attachments/244361).  Break it down into html/css using your own resume for the content.  Store your source files in a folder called `/src` and have it compile to a `/public` folder.  Make sure it works on IE10+, Chrome and Firefox.  For bonus points it should resize for tablet and mobile.

Make sure you don't use a lot of classes in your html i.e. the way bootstrap does it `.col-md-6`.  Instead use [lost](https://github.com/corysimmons/lost/) and descriptive tags like `.profile`.  Try to also limit the amount of divs you use.

For example:


```html
  <div class="field">
    <label>First Name</label>
    <input type="text" name=user[first_name]" placeholder="First Name">
  </div>
```

**Instead of this this:**

```html
 <div class="field">
    <label>Name</label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="user[first_name]" placeholder="First Name">
      </div>
    </div>
  </div>
```

#_reload##### Please fork this repository and commit each step of your process.

** Below, i'll posting my solution **

I downloaded the psd template and transformed to "template.png".

Project initialization

    npm init

    Install CoffeScript:

        npm install -g coffee-script
        npm install --save-dev coffee-script

    Install Jade:

        npm install -g jade
        npm install --save-dev jade

    Install Stylus:

        npm install -g stylus
        npm install --save-dev stylus

    Install Gulp:

        npm install --global gulp
        npm install --save-dev gulp

    Install Gulp modules:

        Utils (logging)
            npm install --save-dev gulp-util

        File Concatenation
            npm install --save-dev gulp-concat

        Watch for changes
            npm install --save-dev gulp-watch

        Minimification
            npm install --save-dev gulp-uglify

        CoffeScript
            npm install --save-dev gulp-coffee

    

