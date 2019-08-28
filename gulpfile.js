const {src, dest, task } = require('gulp');


task('components', function(cb){
    return (
        src('./IGP-Framework/components/*/*.js').pipe(dest('./src/components'))
    )
})

task('styles', function(cb) {
    return (
        src('./IGP-Framework/stylesheets/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*.scss').pipe(dest('./src/stylesheets')),
        src('./IGP-Framework/stylesheets/*/*/*.scss').pipe(dest('./src/stylesheets'))
    )
})