module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {}
    },
    concurrent: {
        target: {
          tasks: ['nodemon'],
          options: {
            logConcurrentOutput: true
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['concurrent:target']);
};