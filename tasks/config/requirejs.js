module.exports = function(grunt) {

  grunt.config.set('requirejs', {
    compile: {
      options: {
        uglify2: {
             mangle: false
         },
         baseUrl: ".tmp/public/js/",
         mainConfigFile: ".tmp/public/js/main.js",
         name: 'main',
         out: ".tmp/public/js/main2.js",
         optimize: 'uglify2'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
