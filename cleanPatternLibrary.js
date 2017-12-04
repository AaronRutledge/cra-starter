var rimraf = require('rimraf');
rimraf('node_modules/mk-pattern-library-react', function() {
    console.log("Removed previous version of pattern library");
});