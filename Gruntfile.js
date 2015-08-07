module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc2md: {
            oneOutputFile: {
                src: 'index.js',
                dest: 'README.md'
            }
        },
        gitcommit: {
            task: {
                options: {
                    allowEmpty: true,
                    message: 'Commit'
                },
                files: {
                    src: ['*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc-to-markdown");
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('default', [])
    grunt.registerTask('generate doc', 'jsdoc2md')
    grunt.registerTask('commit github', 'gitcommit')

};


