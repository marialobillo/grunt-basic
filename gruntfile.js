module.exports = function (grunt){
  grunt.initConfig({
    uglify: {
      dist: {
        src: 'js/*.js'
        dest: 'dist/operaciones.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
}
