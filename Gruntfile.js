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
                    {src: "lib/object.js", dest: "lib/object.md"},
                    {src: [ "lib/qlik.js", "lib/qlik/*.js" ], dest: "lib/qlik.md"},
                    {src: [ "lib/qlik/apis/qrs.js", "lib/qlik/apis/qrs.sdk.js" ], dest: "lib/qlik/apis/qrs.md"},
                    {src: "lib/qlik/apis/qrs.sdk.about.js", dest: "lib/qlik/apis/qrs.sdk.about.md"},
                    {src: "lib/qlik/apis/qrs.sdk.app.js", dest: "lib/qlik/apis/qrs.sdk.app.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appavailability.js", dest: "lib/qlik/apis/qrs.sdk.appavailability.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appcomponent.js", dest: "lib/qlik/apis/qrs.sdk.appcomponent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appcontent.js", dest: "lib/qlik/apis/qrs.sdk.appcontent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appcontentquota.js", dest: "lib/qlik/apis/qrs.sdk.appcontentquota.md"},
                    {src: "lib/qlik/apis/qrs.sdk.applicationlog.js", dest: "lib/qlik/apis/qrs.sdk.applicationlog.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appseedinfo.js", dest: "lib/qlik/apis/qrs.sdk.appseedinfo.md"},
                    {src: "lib/qlik/apis/qrs.sdk.appstatus.js", dest: "lib/qlik/apis/qrs.sdk.appstatus.md"},
                    {src: "lib/qlik/apis/qrs.sdk.binarydelete.js", dest: "lib/qlik/apis/qrs.sdk.binarydelete.md"},
                    {src: "lib/qlik/apis/qrs.sdk.binarydownload.js", dest: "lib/qlik/apis/qrs.sdk.binarydownload.md"},
                    {src: "lib/qlik/apis/qrs.sdk.binarysyncruleevaluation.js", dest: "lib/qlik/apis/qrs.sdk.binarysyncruleevaluation.md"},
                    {src: "lib/qlik/apis/qrs.sdk.cache.js", dest: "lib/qlik/apis/qrs.sdk.cache.md"},
                    {src: "lib/qlik/apis/qrs.sdk.certificatedistribution.js", dest: "lib/qlik/apis/qrs.sdk.certificatedistribution.md"},
                    {src: "lib/qlik/apis/qrs.sdk.compositeevent.js", dest: "lib/qlik/apis/qrs.sdk.compositeevent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.compositeeventoperational.js", dest: "lib/qlik/apis/qrs.sdk.compositeeventoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.compositeeventruleoperational.js", dest: "lib/qlik/apis/qrs.sdk.compositeeventruleoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.contentlibrary.js", dest: "lib/qlik/apis/qrs.sdk.contentlibrary.md"},
                    {src: "lib/qlik/apis/qrs.sdk.custompropertydefinition.js", dest: "lib/qlik/apis/qrs.sdk.custompropertydefinition.md"},
                    {src: "lib/qlik/apis/qrs.sdk.dataconnection.js", dest: "lib/qlik/apis/qrs.sdk.dataconnection.md"},
                    {src: "lib/qlik/apis/qrs.sdk.download.js", dest: "lib/qlik/apis/qrs.sdk.download.md"},
                    {src: "lib/qlik/apis/qrs.sdk.engineservice.js", dest: "lib/qlik/apis/qrs.sdk.engineservice.md"},
                    {src: "lib/qlik/apis/qrs.sdk.event.js", dest: "lib/qlik/apis/qrs.sdk.event.md"},
                    {src: "lib/qlik/apis/qrs.sdk.eventoperational.js", dest: "lib/qlik/apis/qrs.sdk.eventoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.executionresult.js", dest: "lib/qlik/apis/qrs.sdk.executionresult.md"},
                    {src: "lib/qlik/apis/qrs.sdk.executionsession.js", dest: "lib/qlik/apis/qrs.sdk.executionsession.md"},
                    {src: "lib/qlik/apis/qrs.sdk.extension.js", dest: "lib/qlik/apis/qrs.sdk.extension.md"},
                    {src: "lib/qlik/apis/qrs.sdk.externalchangeinfo.js", dest: "lib/qlik/apis/qrs.sdk.externalchangeinfo.md"},
                    {src: "lib/qlik/apis/qrs.sdk.externalprogramtask.js", dest: "lib/qlik/apis/qrs.sdk.externalprogramtask.md"},
                    {src: "lib/qlik/apis/qrs.sdk.externalprogramtaskoperational.js", dest: "lib/qlik/apis/qrs.sdk.externalprogramtaskoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.filereference.js", dest: "lib/qlik/apis/qrs.sdk.filereference.md"},
                    {src: "lib/qlik/apis/qrs.sdk.license.js", dest: "lib/qlik/apis/qrs.sdk.license.md"},
                    {src: "lib/qlik/apis/qrs.sdk.licenseaccessusage.js", dest: "lib/qlik/apis/qrs.sdk.licenseaccessusage.md"},
                    {src: "lib/qlik/apis/qrs.sdk.loadbalancing.js", dest: "lib/qlik/apis/qrs.sdk.loadbalancing.md"},
                    {src: "lib/qlik/apis/qrs.sdk.log.js", dest: "lib/qlik/apis/qrs.sdk.log.md"},
                    {src: "lib/qlik/apis/qrs.sdk.managementconsolelog.js", dest: "lib/qlik/apis/qrs.sdk.managementconsolelog.md"},
                    {src: "lib/qlik/apis/qrs.sdk.mimetype.js", dest: "lib/qlik/apis/qrs.sdk.mimetype.md"},
                    {src: "lib/qlik/apis/qrs.sdk.notification.js", dest: "lib/qlik/apis/qrs.sdk.notification.md"},
                    {src: "lib/qlik/apis/qrs.sdk.printingservice.js", dest: "lib/qlik/apis/qrs.sdk.printingservice.md"},
                    {src: "lib/qlik/apis/qrs.sdk.proxyservice.js", dest: "lib/qlik/apis/qrs.sdk.proxyservice.md"},
                    {src: "lib/qlik/apis/qrs.sdk.reloadtask.js", dest: "lib/qlik/apis/qrs.sdk.reloadtask.md"},
                    {src: "lib/qlik/apis/qrs.sdk.reloadtaskoperational.js", dest: "lib/qlik/apis/qrs.sdk.reloadtaskoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.repositoryservice.js", dest: "lib/qlik/apis/qrs.sdk.repositoryservice.md"},
                    {src: "lib/qlik/apis/qrs.sdk.schedulerservice.js", dest: "lib/qlik/apis/qrs.sdk.schedulerservice.md"},
                    {src: "lib/qlik/apis/qrs.sdk.schemaevent.js", dest: "lib/qlik/apis/qrs.sdk.schemaevent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.schemaeventoperational.js", dest: "lib/qlik/apis/qrs.sdk.schemaeventoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.selection.js", dest: "lib/qlik/apis/qrs.sdk.selection.md"},
                    {src: "lib/qlik/apis/qrs.sdk.servernodeconfiguration.js", dest: "lib/qlik/apis/qrs.sdk.servernodeconfiguration.md"},
                    {src: "lib/qlik/apis/qrs.sdk.servernoderegistration.js", dest: "lib/qlik/apis/qrs.sdk.servernoderegistration.md"},
                    {src: "lib/qlik/apis/qrs.sdk.servicestatus.js", dest: "lib/qlik/apis/qrs.sdk.servicestatus.md"},
                    {src: "lib/qlik/apis/qrs.sdk.staticcontent.js", dest: "lib/qlik/apis/qrs.sdk.staticcontent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.staticcontentreference.js", dest: "lib/qlik/apis/qrs.sdk.staticcontentreference.md"},
                    {src: "lib/qlik/apis/qrs.sdk.staticcontentreferencebase.js", dest: "lib/qlik/apis/qrs.sdk.staticcontentreferencebase.md"},
                    {src: "lib/qlik/apis/qrs.sdk.stream.js", dest: "lib/qlik/apis/qrs.sdk.stream.md"},
                    {src: "lib/qlik/apis/qrs.sdk.sync.js", dest: "lib/qlik/apis/qrs.sdk.sync.md"},
                    {src: "lib/qlik/apis/qrs.sdk.syncsession.js", dest: "lib/qlik/apis/qrs.sdk.syncsession.md"},
                    {src: "lib/qlik/apis/qrs.sdk.systemrule.js", dest: "lib/qlik/apis/qrs.sdk.systemrule.md"},
                    {src: "lib/qlik/apis/qrs.sdk.tag.js", dest: "lib/qlik/apis/qrs.sdk.tag.md"},
                    {src: "lib/qlik/apis/qrs.sdk.task.js", dest: "lib/qlik/apis/qrs.sdk.task.md"},
                    {src: "lib/qlik/apis/qrs.sdk.taskoperational.js", dest: "lib/qlik/apis/qrs.sdk.taskoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.tempcontent.js", dest: "lib/qlik/apis/qrs.sdk.tempcontent.md"},
                    {src: "lib/qlik/apis/qrs.sdk.user.js", dest: "lib/qlik/apis/qrs.sdk.user.md"},
                    {src: "lib/qlik/apis/qrs.sdk.userdirectory.js", dest: "lib/qlik/apis/qrs.sdk.userdirectory.md"},
                    {src: "lib/qlik/apis/qrs.sdk.userdirectoryconnector.js", dest: "lib/qlik/apis/qrs.sdk.userdirectoryconnector.md"},
                    {src: "lib/qlik/apis/qrs.sdk.usersynctask.js", dest: "lib/qlik/apis/qrs.sdk.usersynctask.md"},
                    {src: "lib/qlik/apis/qrs.sdk.usersynctaskoperational.js", dest: "lib/qlik/apis/qrs.sdk.usersynctaskoperational.md"},
                    {src: "lib/qlik/apis/qrs.sdk.virtualproxyconfig.js", dest: "lib/qlik/apis/qrs.sdk.virtualproxyconfig.md"}
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
        grunt.task.run("bump-only:patch", "jsdoc2md:multipleOutputfiles", "shell:publish");
    });

};


