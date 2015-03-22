module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass:base']
      },
      js: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['jshint:all']
      }
    },
    sass: {
      base: {
        files: {
          'src/styles/style.css': 'src/styles/style.scss'
        }
      }
    },

    clean: {
      check: ['.grunt/grunt-gh-pages/gh-pages/check'],
      live: 'gh-pages_temp'
    },

    jshint: {
      options: {
        jshintrc : true
      },
      all: ['Gruntfile.js', 'build/mfb-menu.js']
    },

    useminPrepare: {
      html: 'gh-pages_tem/index.html',
      options: {
        //dest: 'gh-pages_tem/index.html'
      }
    },

    usemin: {
      html: ['gh-pages_temp/index.html']
    },

    copy: {
      live: {
        files: [{
          src: ['demo/index.html', 'demo/index.css', 'demo/bundle.js'],
          dest: 'gh-pages_temp',
          expand: true, flatten: true
        },{
          src: ['mfb/src/*.css', 'mfb/src/*.css.map', 'mfb/src/lib/**/*.js'],
          dest: 'gh-pages_temp',
          expand: true, flatten: true
        }]
      }
    },

    'gh-pages': {
      options: {
        base: 'gh-pages_temp/',
      },
      'live': {
        src: ['*']
      },
      'check': {
        options: {
          push: false
        },
        src: ['*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  // Publish this to live site
  grunt.registerTask('live', [
      'clean:live',
      'useminPrepare',
      'copy:live',
      'usemin',
      'gh-pages:live'
    ]);
  // Live site dry run
  grunt.registerTask('livecheck', [
      'clean:check',
      'useminPrepare',
      'copy:live',
      'usemin',
      'clean:check','gh-pages:check'
    ]);

  grunt.registerTask('watch-css', ['watch:css']);
  grunt.registerTask('watch-js', ['watch:js']);
  grunt.registerTask('default', []);
};
