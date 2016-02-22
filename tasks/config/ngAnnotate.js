module.exports = function(grunt) {

  grunt.config.set('ngAnnotate', {
    giver: {
      files: [
          {
              expand: true,
              cwd:'.tmp/public/js/',
              src: ['**/*.js'],
              dest: '.tmp/public/js/'/*,
              ext: '.annotated.js', // Dest filepaths will have this extension.
              extDot: 'last',       // Extensions in filenames begin after the last dot
              */
          },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-ng-annotate');
};
