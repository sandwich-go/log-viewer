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

2023-04-14T12:22:16+08:00\tCreate jenkins job map[cluster_name:local-dev context:. deployment_branch:2.5.0 dingtalk_sec:SEC9499b69733e90c1b25fea5765c2bf22ae2fc878911009a83bf6468fc1e1b874c dingtalk_token:d713d875f000a3a026697ed96e9afccba0af8817c8f66a62c27ab425f998d204 dockerfile:k8s/vms/Dockerfile env_name:gate-test image_customized: image_name:backend instances_count:2 is_conf:false operation:deploy pmt_username:jianwei.ma previous_image:harbor.centurygame.com/sample/backend:version-1.3-cgrp85a0nhkd8hsl1m30 previous_revision:f1c9ae2 project:sample service_branch:version/1.3 service_name:backend service_repo:git@bitbucket.org:funplus/sandwich-sample-server.git service_type:sandwich stage:staging values:ZGVwbG95bWVudDoKICBlbnZzOgogIC0gbmFtZTogc3lzX2Vudl9uYW1lCiAgICB2YWx1ZTogZ2F0ZS10ZXN0CiAgLSBuYW1lOiBzZXJ2aWNlX3Ztc193YXRjaF9ldGNkCiAgICB2YWx1ZTogZXRjZC5zYW1wbGUtcmVzb3VyY2VzLW9ubGluZToyMzc5CiAgLSBuYW1lOiBFVENEX0VORFBPSU5UUwogICAgdmFsdWU6IGV0Y2Quc2FtcGxlLXJlc291cmNlcy1vbmxpbmU6MjM3OQogIC0gbmFtZTogc3lzX2NkX3hpZAogICAgdmFsdWU6IGNnc2Q5dGEwbmhrZDhoc2xnaGswCiAgLSBuYW1lOiBzeXNfY29uZl9wYXRoX3NlcnZpY2UKICAgIHZhbHVlOiAvZXRjL2NvbmYvc2VydmljZQogIC0gbmFtZTogRVRDRF9FTkFCTEUKICAgIHZhbHVlOiAidHJ1ZSIKICAtIG5hbWU6IHNlcnZpY2VfdGNwX3BvcnQKICAgIHZhbHVlOiAiMTEwMDEiCiAgLSBuYW1lOiBzeXN0ZW1faHBhX21lbQogICAgdmFsdWU6ICI3MCIKICAtIG5hbWU6IHN5c19jZF9zZXJ2aWNlCiAgICB2YWx1ZTogYmFja2VuZAogIC0gbmFtZTogREFUQUJBU0VfTVlTUUxfSE9TVAogICAgdmFsdWU6IDEwLjE5Mi40LjgKICAtIG5hbWU6IFJFRElTX0FERFJTCiAgICB2YWx1ZTogcmVkaXMuc2FtcGxlLXJlc291cmNlcy1vbmxpbmU6NjM3OQogIC0gbmFtZTogc2VydmljZV9yZWdpc3RyeV9ldGNkCiAgICB2YWx1ZTogZXRjZC5zYW1wbGUtcmVzb3VyY2VzLW9ubGluZToyMzc5CiAgLSBuYW1lOiBzZXJ2aWNlX3Ztc193YXRjaF9wYXRoCiAgICB2YWx1ZTogL3Rlc3Qvdm1zL3Jlc291cmNlX3ZlcnNpb24uanNvbgogIC0gbmFtZTogc3lzX2NkX2dyYWNlZnVsCiAgICB2YWx1ZTogIjAiCiAgLSBuYW1lOiBzeXNfc3RhZ2UKICAgIHZhbHVlOiBzdGFnaW5nCiAgLSBuYW1lOiBnYXRlX2tjcF9ob3N0CiAgICB2YWx1ZTogZ2F0ZTo4OTkxCiAgLSBuYW1lOiBzZXJ2aWNlX3JlZ2lzdHJ5X3BhdGhfaHR0cAogICAgdmFsdWU6IC9zYW5kd2ljaC9zZXJ2aWNlL3Rlc3QvaHR0cC8KICAtIG5hbWU6IHNlcnZpY2VfaHR0cF9wb3J0CiAgICB2YWx1ZTogIjEyMDAxIgogIC0gbmFtZTogc3lzX2NvbmZfcGF0aF9lbnYKICAgIHZhbHVlOiAvZXRjL2NvbmYvZW52CiAgLSBuYW1lOiBFVENEX01JQ1JPX0VORFBPSU5UUwogICAgdmFsdWU6IGV0Y2Quc2FtcGxlLXJlc291cmNlcy1vbmxpbmU6MjM3OQogIC0gbmFtZTogc2VydmljZV9zZXJ2ZXJfbmFtZQogICAgdmFsdWU6IHNlcnZlcl8xCiAgLSBuYW1lOiBzeXN0ZW1faHBhX2NwdQogICAgdmFsdWU6ICI4MCIKICAtIG5hbWU6IHN5c3RlbV9kZXBsb3ltZW50X3RhZwogICAgdmFsdWU6ICIiCiAgLSBuYW1lOiBldGNkCiAgICB2YWx1ZTogZXRjZC5zYW1wbGUtcmVzb3VyY2VzLW9ubGluZToyMzc5CiAgLSBuYW1lOiBEQVRBQkFTRV9NWVNRTF9QT1JUCiAgICB2YWx1ZTogIjMzMDgiCiAgLSBuYW1lOiBEQVRBQkFTRV9NQVhfSURMRV9DT05OUwogICAgdmFsdWU6ICIxMjgiCiAgLSBuYW1lOiBzZXJ2aWNlX3Ztc19lbmFibGVfbGlnaHRob3VzZV9jaGVjawogICAgdmFsdWU6ICJmYWxzZSIKICAtIG5hbWU6IGVuYWJsZV9rY3AKICAgIHZhbHVlOiAidHJ1ZSIKICAtIG5hbWU6IGdhdGVfd3NfaG9zdAogICAgdmFsdWU6IGdhdGU6ODk5MAogIC0gbmFtZTogc2VydmljZV9jb2RlYwogICAgdmFsdWU6IHByb3RvX3Byb3RvCiAgLSBuYW1lOiBzZXJ2aWNlX2VuYWJsZV9lbmNyeXB0CiAgICB2YWx1ZTogImZhbHNlIgogIC0gbmFtZTogc2VydmljZV9nYXRlX2JhY2tlbmRfZXRjZAogICAgdmFsdWU6IGV0Y2Quc2FtcGxlLXJlc291cmNlcy1vbmxpbmU6MjM3OQogIC0gbmFtZTogc3lzX2NkX2VudgogICAgdmFsdWU6IGdhdGUtdGVzdAogIC0gbmFtZTogc3lzX2NkX3N0YWdlCiAgICB2YWx1ZTogc3RhZ2luZwogIC0gbmFtZTogdGNwX2Nvbm4KICAgIHZhbHVlOiAiMTAwIgogIC0gbmFtZTogZ2F0ZV90Y3BfaG9zdAogICAgdmFsdWU6IGdhdGU6ODk4OQogIC0gbmFtZTogREFUQUJBU0VfTUFYX09QRU5fQ09OTlMKICAgIHZhbHVlOiAiMTI4IgogIC0gbmFtZTogUkVESVNfQ0xVU1RFUgogICAgdmFsdWU6ICJ0cnVlIgogIC0gbmFtZTogc3lzX2NkX3Byb2plY3QKICAgIHZhbHVlOiBzYW1wbGUKICAtIG5hbWU6IHdzX2Nvbm4KICAgIHZhbHVlOiAiMTAwIgogIC0gbmFtZToga2NwX2Nvbm4KICAgIHZhbHVlOiAiMTAwIgogIC0gbmFtZTogREFUQUJBU0VfVElNRU9VVAogICAgdmFsdWU6IDE1cwogIC0gbmFtZTogZXRjZF9lbmRwb2ludHMKICAgIHZhbHVlOiBldGNkLnNhbXBsZS1yZXNvdXJjZXMtb25saW5lOjIzNzkKICBsaWZlY3ljbGU6CiAgICBwb3N0U3RhcnQ6CiAgICAgIGVuYWJsZWQ6IGZhbHNlCiAgICBwcmVTdG9wOgogICAgICBlbmFibGVkOiB0cnVlCiAgbGl2ZW5lc3NQcm9iZToKICAgIGVuYWJsZWQ6IGZhbHNlCiAgbWF4R3JhY2VmdWxUZXJtaW5hdGlvblNlYzogMTgwMAogIHBvcnRzOgogIC0gY29udGFpbmVyUG9ydDogMTIwMDEKICAgIGV4cG9zZWQ6IHRydWUKICAgIGhvc3Q6IHNhbXBsZS1nYXRlLXRlc3QtYmFja2VuZC1zdGFnaW5nLmF1dG8uY2VudHVyeWdhbWUuaW8KICAgIGhvc3RQYXRoOiAiIgogICAgbmFtZTogIjEyMDAxIgogICAgcHJvdG9jb2w6IEhUVFAKICByZWFkaW5lc3NQcm9iZToKICAgIGVuYWJsZWQ6IGZhbHNlCiAgcmVwbGljYXM6IDEKICByZXNvdXJjZXM6CiAgICBsaW1pdHM6CiAgICAgIGNwdTogMjAwMG0KICAgICAgbWVtb3J5OiA0MDAwTQogICAgcmVxdWVzdHM6CiAgICAgIGNwdTogMjAwMG0KICAgICAgbWVtb3J5OiA0MDAwTQpocGE6CiAgZW5hYmxlZDogZmFsc2UKICBtYXhSZXBsaWNhczogMjAKICBtZXRyaWNzOiB8CiAgICAtIHJlc291cmNlOgogICAgICAgIG5hbWU6IGNwdQogICAgICAgIHRhcmdldDoKICAgICAgICAgIGF2ZXJhZ2VVdGlsaXphdGlvbjogODAKICAgICAgICAgIHR5cGU6IFV0aWxpemF0aW9uCiAgICAgIHR5cGU6IFJlc291cmNlCiAgICAtIHJlc291cmNlOgogICAgICAgIG5hbWU6IG1lbW9yeQogICAgICAgIHRhcmdldDoKICAgICAgICAgIGF2ZXJhZ2VVdGlsaXphdGlvbjogNzAKICAgICAgICAgIHR5cGU6IFV0aWxpemF0aW9uCiAgICAgIHR5cGU6IFJlc291cmNlCiAgbWluUmVwbGljYXM6IDEK xid:cgsd9ta0nhkd8hslghk0]
`
