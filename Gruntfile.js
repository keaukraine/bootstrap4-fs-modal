module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/css/fs-modal.css': 'src/less/fs-modal.less'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/fs-modal.min.css': ['dist/css/fs-modal.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/fs-modal.min.js': ['src/js/fs-modal.js'],
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
};
