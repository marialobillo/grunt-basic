module.exports = function (grunt){
  grunt.initConfig({
    uglify: {
      suma: {
        src: 'js/suma.js',
        dest: 'dist/suma.min.js'
      },
      dist: {
        src: 'js/*.js',
        dest: 'dist/all.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
}
