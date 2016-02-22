module.exports = function(grunt) {

  grunt.config.set('ngtemplates', {
    giver: {
      cwd:      '.tmp/public/views/',
      src:      '**.html',
      dest:     '.tmp/public/views/templates.js',
      options:      {
        bootstrap:  function(module, script) {
          return [
            'define([\'angular\'],function(angular) { ',
              "angular.module('giver.utils.TemplateCatch', [])",
              ".run(['$templateCache', function($templateCache){",
              script,
              "}]);",
            '});'
          ].join('');
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-templates');
};
