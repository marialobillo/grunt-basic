module.exports = function (grunt){
  grunt.initConfig({
    uglify: {
      suma: {
        src: 'js/suma.js',
        dest: 'dist/suma.min.js'
      },
      resta: {
        src: 'js/resta.js',
        dest: 'dist.resta.min.js'
      },
      dist: {
        src: 'js/*.js',
        dest: 'dist/all.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('sumaresta', ['uglify:suma', 'uglify:resta']);
  grunt.registerTask('dis', ['uglify:dist']);
}
