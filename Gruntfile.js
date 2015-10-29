module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc2md: {
            oneOutputFile: {
                src: ['index.js', 'lib/**/*.js'],
                dest: 'README.md'
            },
            multipleOutputfiles: {
                files: [
                    {src: 'index.js', dest: 'README.md'},
                    {src: 'lib/array.js', dest: 'lib/array.md'},
                    {src: 'lib/core.js', dest: 'lib/core.md'},
                    {src: 'lib/object.js', dest: 'lib/object.md'},
                    {src: ['lib/qlik.js', 'lib/qlik/*.js', 'lib/qlik/apis/qrs/qrs.js', 'lib/qlik/apis/qps/qps.js'], dest: 'lib/qlik.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.js', dest: 'lib/qlik/apis/qrs/qrs.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.about.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.about.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.app.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.app.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appavailability.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appavailability.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appcomponent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appcomponent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appcontent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appcontent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appcontentquota.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appcontentquota.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.applicationlog.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.applicationlog.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appseedinfo.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appseedinfo.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.appstatus.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.appstatus.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.binarydelete.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.binarydelete.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.binarydownload.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.binarydownload.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.binarysyncruleevaluation.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.binarysyncruleevaluation.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.cache.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.cache.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.certificatedistribution.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.certificatedistribution.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.compositeevent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.compositeevent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.compositeeventoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.compositeeventoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.compositeeventruleoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.compositeeventruleoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.contentlibrary.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.contentlibrary.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.custompropertydefinition.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.custompropertydefinition.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.dataconnection.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.dataconnection.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.download.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.download.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.engineservice.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.engineservice.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.event.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.event.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.eventoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.eventoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.executionresult.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.executionresult.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.executionsession.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.executionsession.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.extension.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.extension.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.externalchangeinfo.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.externalchangeinfo.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.externalprogramtask.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.externalprogramtask.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.externalprogramtaskoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.externalprogramtaskoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.filereference.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.filereference.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.license.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.license.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.licenseaccessusage.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.licenseaccessusage.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.loadbalancing.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.loadbalancing.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.log.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.log.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.managementconsolelog.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.managementconsolelog.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.mimetype.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.mimetype.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.notification.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.notification.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.printingservice.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.printingservice.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.proxyservice.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.proxyservice.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.reloadtask.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.reloadtask.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.reloadtaskoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.reloadtaskoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.repositoryservice.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.repositoryservice.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.schedulerservice.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.schedulerservice.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.schemaevent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.schemaevent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.schemaeventoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.schemaeventoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.selection.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.selection.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.servernodeconfiguration.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.servernodeconfiguration.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.servernoderegistration.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.servernoderegistration.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.servicestatus.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.servicestatus.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.staticcontent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.staticcontent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.staticcontentreference.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.staticcontentreference.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.staticcontentreferencebase.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.staticcontentreferencebase.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.stream.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.stream.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.sync.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.sync.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.syncsession.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.syncsession.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.systemrule.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.systemrule.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.tag.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.tag.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.task.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.task.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.taskoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.taskoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.tempcontent.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.tempcontent.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.user.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.user.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.userdirectory.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.userdirectory.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.userdirectoryconnector.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.userdirectoryconnector.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.usersynctask.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.usersynctask.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.usersynctaskoperational.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.usersynctaskoperational.md'},
                    {src: 'lib/qlik/apis/qrs/qrs.sdk.virtualproxyconfig.js', dest: 'lib/qlik/apis/qrs/qrs.sdk.virtualproxyconfig.md'}
                ]
            }
        },
        jscs: {
            src: ['index.js', 'lib/**/*.js'],
            options: {
                config: '.jscs.json'
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

    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.registerTask('release', 'Release a new version, push it and publish it', function() {
        grunt.task.run('jscs', 'bump-only:patch', 'jsdoc2md:multipleOutputfiles', 'shell:publish');
    });

};
