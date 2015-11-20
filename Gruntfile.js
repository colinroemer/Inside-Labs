module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'css/main.css': 'sass/main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

}