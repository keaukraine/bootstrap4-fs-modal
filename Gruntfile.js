module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/bootstrap-fs-modal.css': 'src/sass/bootstrap-fs-modal.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/bootstrap-fs-modal.min.css': ['dist/css/bootstrap-fs-modal.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass', 'cssmin']);
};
