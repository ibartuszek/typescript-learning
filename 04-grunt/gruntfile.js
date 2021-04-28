module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ts');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
  
    ts: {
      main: {
        src: ['src/*.ts'],
        out:'build/main.js'
      }
    }
    
  });

  grunt.registerTask('default', ['ts']);  
  
}