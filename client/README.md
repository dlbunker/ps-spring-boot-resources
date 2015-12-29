# angular-bootstrap-starter

A starter project that combines the following for starting building your website.
  * Sample pages from [Bootstrap](http://getbootstrap.com/)
  * Powered by [AngularJS](https://angularjs.org/) with [ngAnimate](http://www.nganimate.org/)
  * Routed with [UI Router](http://angular-ui.github.io/ui-router/site)
  * Widgets from [UI Bootstrap](http://angular-ui.github.io/bootstrap/)
  * Some dynamic loading with [RequireJS](http://requirejs.org/)
  * Some css built with [less](http://lesscss.org/)
  * Some less mixin's for [lesshat](http://lesshat.madebysource.com/)
  * And a tiny bit of my code to glue it together, easily removed.


## To Install

To download this package run `npm install angular-bootstrap-starter`, the files will be downloaded to **node_modules/angular-bootstrap-starter** copy the files from there or use that as your working directory.

To get started you need gulp, grunt and bower installed then run `npm install -g grunt grunt-cli gulp bower` (grunt and bower are used by dependencies).

Get all the dependency packages with `npm install` then build.

To build all the 3rd party packages and put them in the **lib**  directory run `gulp install`.

Then to continuously build the **less/style.less** to the **css** directory and start a [livereload web server](https://www.npmjs.com/package/gulp-server-livereload) on http://localhost run `gulp`

## Further development

Modify the files as you like an overview of what's here.
  * **www/js/app.js** the angular app code, it has code to handle routing. Also
    little bit of code to set the page title and to dynamically load scripts
    for views.
  * **www/js/nav-controller.js** the navigation controller, it controls what pages
    are shown in the navigation menu.
  * **www/views** the views that **app.js** points to, and a dynamically loaded
    javascript file for the UI Bootstrap example page.
  * **www/index.html** perhaps doesn't need modification.
  * **www/css/style.css** this script is dynamically built by editing **less/style.less**

