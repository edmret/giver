module.exports = function(grunt) {

  grunt.config.set('sprite', {
    all: {
      imgPath: "../images/sprite.png",
      src: './assets/images/sprite/*.png',
      dest: '.tmp/public/images/sprite.png',
      destCss: './assets/styles/components/sprite.less',
      cssFormat: 'less',
      engineOpts: { 'imagemagick': true }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
};
