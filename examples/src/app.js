export const demoLog = `
2023/01/19 15:54:57 execer.go:100: ||START||\tbuild 1431 , total stages:2
2023/01/19 15:54:57 execer.go:102: stage build begin...
2023/01/19 15:54:57 engine.go:46: process started, process.pid:59433
+ echo 'using FormSchema'
using FormSchema
+ echo logLevel1
logLevel1
+ echo 'checkerHost http://sample-demo-game-online.auto.centurygame.io'
checkerHost http://sample-demo-game-online.auto.centurygame.io
+ echo 'confChecker '
confChecker
+ echo 'ExtValue '
ExtValue
+ logLevel=' --log_level=0'
+ pwd
/Users/wh/prjs/funplus/sandwich-pmt/backend
+ work_dir=/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2
+ branch=version/1.2
+ confdir=/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf
+ '[' '!' -d /tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf ']'
+ cd /tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf
+ git fetch --depth 1 -v
From bitbucket.org:funplus/sandwich-sample-conf
 = [up to date]      version/1.2 -> origin/version/1.2
+ [[ 0 -ne 0 ]]
+ git clean -df
Removing gen/meta/
+ git reset --hard origin/version/1.2
HEAD is now at cf017aa auto commit by cicd pmt
+ fileChosen=false
+ fileStr=
+ translationFiles=
+ protokitgo=protokitgo-2.5.5-daily.19
+ echo protokitgo-2.5.5-daily.19
protokitgo-2.5.5-daily.19
+ false
+ [[ -n http://sample-demo-game-online.auto.centurygame.io ]]
+ '[' true == '' ']'
+ '[' true '!=' '' ']'
+ echo building...
building...
+ cd /tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf
+ protokitgo-2.5.5-daily.19 gen --config=/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf/setting.yaml --log_level=0 --branches=version/1.2--log_color=false
{"level":"warn","time":"2023-01-19T15:55:03+08:00","message":"!!! DEPRECATED FIELD, WILL REMOVE IN FUTURE. FIELDS: golang.enable_queue"}
[90m2023-01-19T15:55:03+08:00[0m [33mDBG[0m load config file [36mconfig_file=[0m/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf/setting.yaml
[90m2023-01-19T15:55:03+08:00[0m [33mDBG[0m working dir [36mworking=[0m/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf
[90m2023-01-19T15:55:03+08:00[0m [31mWRN[0m --branches 参数即将被启用，推荐使用 rawdata.tags，更推荐使用AB TAG特性
[90m2023-01-19T15:55:03+08:00[0m [32mINF[0m VERSION   : 2.5.5-daily.19-7f3e86d-version/2.5-20230117150154
[90m2023-01-19T15:55:03+08:00[0m [32mINF[0m ISSUES    : https://bitbucket.org/funplus/devcenter-issues/issues
[90m2023-01-19T15:55:03+08:00[0m [32mINF[0m DOCUMENTS : https://devcenter.diandian.info/docs-tools-protokitgo
[90m2023-01-19T15:55:03+08:00[0m [33mDBG[0m load config file [36mconfigs=[0m/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf/setting.yaml
[90m2023-01-19T15:55:03+08:00[0m [32mINF[0m clean gen path
[90m2023-01-19T15:55:03+08:00[0m [32mINF[0m chang to working path [36mpath=[0m/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:219 [36mcurrent row=[0m10 [36msheet=[0mDesign
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:932 [36mcurrent row=[0m30 [36msheet=[0mDesign
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:351 [36mcurrent row=[0m156 [36msheet=[0mDesign
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:253 [36mcurrent row=[0m58 [36msheet=[0mRule
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:997 [36mcurrent row=[0m14 [36msheet=[0mDesign
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:833 [36mcurrent row=[0m13 [36msheet=[0mDesign
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:996 [36mcurrent row=[0m42 [36msheet=[0mDesign_backup
[90m2023-01-19T15:55:04+08:00[0m [33mDBG[0m skip left blank rows, got continuous blank lines more than 4, max row:836 [36mcurrent row=[0m14 [36msheet=[0m"Copy of Design"
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m rawdata:load all files [36mcost=[0m274.743934ms [36mpath=[0m/tmp/git_bitbucket_org_funplus_sandwich_sample_conf_git_version_1_2/conf/excel
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m [S] rawdata: process all sheet(check valid & gen cell data interface)
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m ABTEST [36mfile_1=[0mab_test1 [36mfile_2=[0mab_test1 [36msheet_1=[0mab_test1@design [36msheet_2=[0mab_test1@ab_tag1
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m ABTEST [36mfile_1=[0mab_test1 [36mfile_2=[0mab_test1 [36msheet_1=[0mab_test1@design [36msheet_2=[0mab_test1@ab_tag2
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m [E] rawdata: process all sheet(check valid & gen cell data interface) [36mcost=[0m14.010806ms
[90m2023-01-19T15:55:04+08:00[0m [32mINF[0m [S] rawdata: raw data to proto schema and data for clien

On branch version/1.2
Your branch is up to date with 'origin/version/1.2'.
nothing to commit, working tree clean
+ tagName=auto-big_change
+ '[' '' '!=' auto-big_change ']'
+ '[' auto-normal = auto-big_change ']'
+ '[' auto-big_change = auto-big_change ']'
+ '[' auto-big_change == auto-big_change ']'
+ protokitgo-2.5.7-daily.9 sem bump --skip_push --upgrade
+ [[ 1 -ne 0 ]]
+ exit 255
2023/04/03 10:53:44 engine.go:70: process.exit(255) process finished
2023/04/03 10:53:44 execer.go:116: stage build failed,
2023/04/03 10:53:44 execer.go:128: stage build error, 1 error occurred:
\t*
2023/04/03 10:53:44 execer.go:130: stage build end...
2023/04/03 10:53:44 execer.go:136: ||FINISH||\t❌ OMG failed


ERROR: pod 未能成功进入稳定运行状态，请查看 logserver 或上面的日志定位问题 🔺🔺🔺

script returned exit code 0
script returned exit code 1
script returned exit code 143


`
