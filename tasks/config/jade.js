module.exports = function(grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
          client: false,
          pretty: true
      },
      files: [ {
        cwd: "./assets/views/",
        src: "*.jade",
        dest: ".tmp/public/views/",
        expand: true,
        ext: ".html"
      } ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};
