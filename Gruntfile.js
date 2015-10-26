module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc2md: {
            oneOutputFile: {
                src: [ 'index.js', 'lib/**/*.js'],
                dest: 'README.md'
            },
            multipleOutputfiles: {
                files: [
                    {src: "index.js", dest: "README.md"},
                    {src: "lib/array.js", dest: "lib/array.md"},
                    {src: "lib/core.js", dest: "lib/core.md"},
                    {src: "lib/object.js", dest: "lib/object.md"}
                ]
            }
        },
        bump: {
            options: {
                push: true,
                pushTo: 'origin'
            }

        },
        shell: {
            publish: {
                command: 'npm publish'
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc-to-markdown");
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask("release", "Release a new version, push it and publish it", function() {
        grunt.task.run("bump-only:patch", "jsdoc2md:oneOutputFile", "shell:publish");
    });

};


