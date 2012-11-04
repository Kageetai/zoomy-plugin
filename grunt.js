module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      dist: {
        src: ['src/main.js', 'src/change.js', 'src/style.js', 'src/events.js', 'src/build.js'],
        dest: 'zoomy_build.js',
        separator: '\n\n'
      }
    },
    min: {
      dist: {
        src: ['zoomy_build.js'],
        dest: 'zoomy_build.min.js'
      }
    },
    lint: {
      files: ['src/*.js']
    },
    server : {
      port : 3000,
      base : '.'
    }
  });
};