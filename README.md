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

###### Please fork this repository and commit each step of your process.

**Below, i'll posting my solution**

I downloaded the psd template and transformed to "template.png".

1. **Project initialization**

  ```
    npm init
  ```
  1. Install CoffeScript:
  
    ```
      npm install -g coffee-script
      npm install --save-dev coffee-script
    ```
  2. Install Jade:
  
    ```
      npm install -g jade
      npm install --save-dev jade
    ```
  3. Install Stylus:
  
    ```
      npm install -g stylus
      npm install --save-dev stylus
    ```
  4. Install Gulp:
  
    ```
      npm install --global gulp
      npm install --save-dev gulp
    ```
  5. Install Gulp modules:
    1. Utils (logging):
      ```
        npm install --save-dev gulp-util
      ```
    2. File Concatenation:
      ```
        npm install --save-dev gulp-concat
      ```
    3. Watch for changes:
      ```
        npm install --save-dev gulp-watch
      ```
    4. Minimification:
      ```
        npm install --save-dev gulp-uglify
      ```
    5. CoffeScript:
      ```
        npm install --save-dev gulp-coffee
      ```
    6. Jade:
      ```
        npm install --save-dev gulp-jade
      ```
    7. Stylus:
      ```
        npm install --save-dev gulp-stylus
      ```
    8. Connection (for serving the page and launching a browser):
      ```
        npm install --save-dev gulp-connect-multi
      ```
    9. Sourcemaps (for debugging purposes):
      ```
        npm install --save-dev gulp-sourcemaps
      ```
    10. CssNano (For css compression):
      ```
        npm install --save-dev gulp-cssnano
      ```
    11. PostStylus (For postcss with Stylus compatibility):
      ```
        npm install --save-dev poststylus
      ```
      1. Lost:
        ```
          npm install --save-dev lost
        ```
      2. Autoprefixer
        ```
          npm install --save-dev autoprefixer
        ```

2. **Templating decisions:**
  *Comming soon...* I'm currently doing the template design.. and reading about Lost.


