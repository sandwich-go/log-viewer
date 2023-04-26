export const demoLog = `
+ sh /data/jenkins/workspace/am3/prod/gate/_cicd_/deployment/common/scripts/dino.sh wait-all-pods-running-once
--------------- pod 运行状态检测 ---------------
规则说明:
- 运行状态检测过程只检测本次拉起的 pod，即 pod 的 label 中 xid=ch37g4jilofeu6a2supg 的
- 在检测到目标 pod 均进入 Running 后，如果连续 10 次检测到它们保持在 Running 状态则认为服务正常启动

namespace  : am3-prod-online
service    : gate
xid        : ch37g4jilofeu6a2supg
replicas   : 1

NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   1          18s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   1          21s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    2          24s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    2          27s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    2          30s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          33s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          36s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          39s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          42s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          45s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   2          48s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    3          51s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    3          54s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    3          57s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    3          60s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          63s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          66s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          69s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          72s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          75s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          78s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          81s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          84s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          87s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          90s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          93s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   3          96s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     Error    4          99s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    4          102s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    4          105s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    4          108s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    4          111s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          114s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          117s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m    env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m3s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m6s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m9s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m12s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m15s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m18s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m21s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m24s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m27s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m30s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m33s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m36s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m39s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m42s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m45s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m48s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m51s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m54s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          2m57s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          3m    env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          3m2s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   4          3m5s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    5          3m8s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     Error    5          3m11s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     Error    5          3m14s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     Error    5          3m17s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     Error    5          3m20s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m23s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m26s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m29s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m32s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m35s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m38s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m41s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m44s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m47s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m50s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m53s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m56s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          3m59s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m2s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m5s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m8s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m11s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m14s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m17s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m20s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m23s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m26s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m29s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m32s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m35s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m38s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m41s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m44s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m47s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m50s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m53s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m56s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          4m59s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m2s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m5s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m8s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m11s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m14s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m17s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m20s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m23s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m26s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m29s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m32s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m35s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m38s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m41s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m44s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m47s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m50s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m52s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m55s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   5          5m58s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    6          6m1s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    6          6m4s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS   RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     Error    6          6m7s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m10s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m13s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m16s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m19s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m22s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m25s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m28s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m31s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m34s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m37s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m40s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m43s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m46s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m49s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m52s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m55s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          6m58s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m1s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m4s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m7s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m10s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m13s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m16s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m19s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m22s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m25s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m28s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m31s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m34s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m37s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m40s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m43s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m46s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m49s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m52s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m55s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          7m58s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m1s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m4s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m7s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m10s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m13s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m16s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m19s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m22s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m25s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m28s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m31s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m34s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m37s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m39s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m42s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m45s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m48s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m51s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m54s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          8m57s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m    env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m3s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m6s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE    LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m9s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m12s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m15s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m18s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m21s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m23s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m26s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m29s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m32s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m35s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m38s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m41s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m44s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m47s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m50s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m53s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m56s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE     LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          9m59s   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg

运行中/副本数: 0/1, 运行中的 pod 数量低于预期副本数量，2s 后将进行下一次检测
Sending interrupt signal to process
Unable to connect to the server: getting credentials: exec: executable aws failed with exit code -1
script returned exit code 1
+ kubectl logs --tail=200 -n am3-prod-online -l service=gate,xid=ch37g4jilofeu6a2supg
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
FLAG                                        ENV               TYPE    USAGE
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
--gate_conf                                 GATE_CONF         string  |Y| gate_conf (default "/etc/conf/service/gate_spec.yaml")
--sandwich_build_info                       -                 string  |-| sandwich_base_command flag:sandwich_build_info default:false (default "false")
--sandwich_monitor_enable_p100              -                 string  |-| sandwich_base_command flag:sandwich_monitor_enable_p100 default:false (default "false")
--sandwich_monitor_enable_p50               -                 string  |-| sandwich_base_command flag:sandwich_monitor_enable_p50 default:false (default "false")
--sandwich_monitor_enable_p95               -                 string  |-| sandwich_base_command flag:sandwich_monitor_enable_p95 default:true (default "true")
--sandwich_monitor_enable_p99               -                 string  |-| sandwich_base_command flag:sandwich_monitor_enable_p99 default:true (default "true")
--sandwich_registry_env                     -                 string  |-| sandwich_base_command flag:sandwich_registry_env default:
--sandwich_registry_stat_reporter           -                 string  |-| sandwich_base_command flag:sandwich_registry_stat_reporter default:false (default "false")
--sandwich_registry_stat_reporter_interval  -                 string  |-| sandwich_base_command flag:sandwich_registry_stat_reporter_interval default:1m (default "1m")
--sandwich_serror_stack                     -                 string  |-| sandwich_base_command flag:sandwich_serror_stack default:false (default "false")
--sandwich_sip_host                         -                 string  |-| sandwich_base_command flag:sandwich_sip_host default:
--sandwich_slog_debug                       -                 string  |-| sandwich_base_command flag:sandwich_slog_debug default:false (default "false")
--sandwich_slog_disable                     -                 string  |-| sandwich_base_command flag:sandwich_slog_disable default:false (default "false")
--sandwich_slog_info                        -                 string  |-| sandwich_base_command flag:sandwich_slog_info default:true (default "true")
--sandwich_topology_render                  -                 string  |-| sandwich_base_command flag:sandwich_topology_render default:true (default "true")
--selector_router                           SELECTOR_ROUTER   string  |Y| selector_router (default "/etc/conf/service/selector_router.yaml")
--xconf_flag_files                          XCONF_FLAG_FILES  string  |M| xconf files provided by flag, file slice, split by ,
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Powered by: https://github.com/sandwich-go/xconf
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

panic: not find config file

goroutine 1 [running]:
bitbucket.org/funplus/gate/utils.PanicIfErr(...)
\t/app/utils/errors.go:45
bitbucket.org/funplus/gate/selector/registry.MustNewRegistryConfManager({0xc0000ced50, 0x26}, {0x11dde88, 0xc00012a9c0})
\t/app/selector/registry/conf_mgr.go:28 +0x14e
bitbucket.org/funplus/gate/selector/registry.MustNewRegistryRouter({0xc0000ced50, 0x26}, {0x11dde88, 0xc00012a9c0}, {0x0, 0x0, 0x0})
\t/app/selector/registry/router.go:34 +0x85
main.newSelector({0xc0000ced50, 0x26})
\t/app/cmd/gate/main.go:42 +0xba
main.main()
\t/app/cmd/gate/main.go:30 +0x99
+ kubectl get pod -n am3-prod-online -l service=gate,xid=ch37g4jilofeu6a2supg --show-labels
NAME                   READY   STATUS             RESTARTS   AGE   LABELS
gate-ddd54859f-lzdlc   0/1     CrashLoopBackOff   6          10m   env_name=prod,pod-template-hash=ddd54859f,project=am3,service=gate,stage=online,xid=ch37g4jilofeu6a2supg
+ env
+ LC_COLLATE=C
+ sort
BUILD_DISPLAY_NAME=#1 gate@xid:ch37g4jilofeu6a2supg
BUILD_ID=1
BUILD_NUMBER=1
BUILD_TAG=jenkins-am3-prod-gate-1
BUILD_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/1/
BUILD_USER=robot.devops
BUILD_USER_EMAIL=robot.devops
BUILD_USER_FIRST_NAME=robot.devops
BUILD_USER_ID=robot.devops
CI=true
EXECUTOR_NUMBER=12
GIT_BRANCH=origin/2.5.0
GIT_CHECKOUT_DIR=_cicd_/deployment
GIT_COMMIT=3233e10463167c58c8cac3978d3d048c8249fee5
GIT_URL=git@bitbucket.org:funplus/deployment.git
HOME=/root
HUDSON_COOKIE=ef42a82a-0125-4872-9ce5-0a2848261151
HUDSON_HOME=/data/jenkins
HUDSON_SERVER_COOKIE=f1ca1b730ba0a134
HUDSON_URL=http://pmt.centurygame.io/
JENKINS_HOME=/data/jenkins
JENKINS_NODE_COOKIE=d0dbec0b-fb8a-428d-8cba-e6fc6a18d28c
JENKINS_SERVER_COOKIE=durable-b33c966ed40a84f41a0dfd9ee4764d6a00430346450150bc1eba12a200dd50b1
JENKINS_URL=http://pmt.centurygame.io/
JOB_BASE_NAME=gate
JOB_DISPLAY_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/display/redirect
JOB_NAME=am3/prod/gate
JOB_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/
LABEL=slave2
LABEL_FROM_PMT=N/A
LOGNAME=root
MAIL=/var/mail/root
NODE_LABELS=cicd-slave docker-compile go jenkins-cicd-slave2-10.13.0.159 slave slave2
NODE_NAME=jenkins-cicd-slave2-10.13.0.159
OLDPWD=/root
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
PWD=/data/jenkins/workspace/am3/prod/gate
RUN_ARTIFACTS_DISPLAY_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/1/display/redirect?page=artifacts
RUN_CHANGES_DISPLAY_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/1/display/redirect?page=changes
RUN_DISPLAY_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/1/display/redirect
RUN_TESTS_DISPLAY_URL=http://pmt.centurygame.io/job/am3/job/prod/job/gate/1/display/redirect?page=tests
SHELL=/bin/bash
SHLVL=3
SSH_CLIENT=10.13.0.222 49462 22
SSH_CONNECTION=10.13.0.222 49462 10.13.0.159 22
STAGE_NAME=Declarative: Post Actions
TERM=xterm
USER=root
WORKSPACE=/data/jenkins/workspace/am3/prod/gate
WORKSPACE_TMP=/data/jenkins/workspace/am3/prod/gate@tmp
XDG_RUNTIME_DIR=/run/user/0
XDG_SESSION_ID=51
_=/usr/bin/env
addons=false
aws_credentials_id=aws-am3-eadqwjye
building_cache_skipped=false
cluster: eks-am3-us-west-2
cluster_local_dev_vip=10.192.15.200
cluster_name=eks-am3-us-west-2
cluster_region=us-west-2
cluster_vendor=aws
config_version=2.5.0
context=.
context_name=arn:aws:eks:us-west-2:956231806574:cluster/am3-k8s
current_revision=9605b2c
deployment_branch=2.5.0
dnspod_login_token=****
dockerfile=k8s/gate/Dockerfile
encryption_cipher=****
env_name=prod
go_mod_ssh_key=****
go_mod_ssh_key_USR=funops
harbor_auth=harbor-auth
hosted_zone_id=Z05235381S505YLXTYK5A
hpa_status=false
http_exposed=true
image_cd=956231806574.dkr.ecr.us-west-2.amazonaws.com/gate:feature-1.0-am3-ch37g4jilofeu6a2supg
image_ci=956231806574.dkr.ecr.us-west-2.amazonaws.com/gate:feature-1.0-am3-ch37g4jilofeu6a2supg
image_name=gate
kubeconfig_credentials_id=kubeconfig-aws-am3-eadqwjye
manifests_backup=am3.prod.online.gate.ch37g4jilofeu6a2supg.tar.gz
namespace=am3-prod-online
operation=deploy
path_to_charts=_cicd_/charts
path_to_cicd=_cicd_
path_to_clusters=/data/jenkins/workspace/am3/prod/gate/_cicd_/deployment/config/clusters.yaml
path_to_deployment=_cicd_/deployment
path_to_profile=/data/jenkins/workspace/am3/prod/gate/profile.yaml
path_to_project=_cicd_/project
path_to_result=_cicd_/result
pmt_username=jianwei.ma
probe_enabled=false
project=am3
registry_type=ecr
registry_url_cd_pull=956231806574.dkr.ecr.us-west-2.amazonaws.com
registry_url_ci_push=956231806574.dkr.ecr.us-west-2.amazonaws.com
replicas=1
repo_name=gate
reuse_image_disabled=false
runner=slave2
scm_checkout_key=****
scm_checkout_key_USR=funops
scm_credentials_id_bitbucket=funops
scm_credentials_id_gitlab=robot.devops
scm_credentials_id_service_repo=funops
service_branch=feature/1.0-am3
service_name=gate
service_repo=git@bitbucket.org:funplus/gate.git
service_type=sandwich
slaveId=2
stage: online
stage=online
subnetId=null
tcp_exposed=false
tcp_internal_elb_required=false
timeout_adjust=0
udp_exposed=false
udp_internal_elb_required=false
values=ZGVwbG95bWVudDoKICBjb25maWdtYXA6CiAgICBkYXRhOiBbXQogICAgc2NvcGU6CiAgICAtIG9ubGluZQogIGVudnM6CiAgLSBuYW1lOiBzeXNfY2RfcHJvamVjdAogICAgdmFsdWU6IGFtMwogIC0gbmFtZTogc3lzX2NkX3N0YWdlCiAgICB2YWx1ZTogb25saW5lCiAgLSBuYW1lOiBzeXNfY2Rfc2VydmljZQogICAgdmFsdWU6IGdhdGUKICAtIG5hbWU6IHN5c19jZF9ncmFjZWZ1bAogICAgdmFsdWU6ICIwIgogIC0gbmFtZTogc3lzX3N0YWdlCiAgICB2YWx1ZTogb25saW5lCiAgLSBuYW1lOiBzeXNfY29uZl9wYXRoX3NlcnZpY2UKICAgIHZhbHVlOiAvZXRjL2NvbmYvc2VydmljZQogIC0gbmFtZTogc3lzX2NvbmZfcGF0aF9lbnYKICAgIHZhbHVlOiAvZXRjL2NvbmYvZW52CiAgLSBuYW1lOiBzeXNfZW52X25hbWUKICAgIHZhbHVlOiBwcm9kCiAgLSBuYW1lOiBzeXN0ZW1faHBhX2NwdQogICAgdmFsdWU6ICI3MCIKICAtIG5hbWU6IHN5c3RlbV9ocGFfbWVtCiAgICB2YWx1ZTogIjcwIgogIC0gbmFtZTogc3lzX2NkX2VudgogICAgdmFsdWU6IHByb2QKICAtIG5hbWU6IHN5c3RlbV9kZXBsb3ltZW50X3RhZwogICAgdmFsdWU6ICIiCiAgLSBuYW1lOiBzeXNfY2RfeGlkCiAgICB2YWx1ZTogY2gzN2c0amlsb2ZldTZhMnN1cGcKICBsaWZlY3ljbGU6CiAgICBwb3N0U3RhcnQ6CiAgICAgIGVuYWJsZWQ6IGZhbHNlCiAgICBwcmVTdG9wOgogICAgICBlbmFibGVkOiB0cnVlCiAgbGl2ZW5lc3NQcm9iZToKICAgIGVuYWJsZWQ6IGZhbHNlCiAgbWF4R3JhY2VmdWxUZXJtaW5hdGlvblNlYzogMzYwMAogIHBvcnRzOgogIC0gY29udGFpbmVyUG9ydDogODk5MAogICAgZXhwb3NlZDogdHJ1ZQogICAgaG9zdDogYW0zLXByb2QtZ2F0ZS1vbmxpbmUuYXV0by5jZW50dXJ5Z2FtZS5pbwogICAgaG9zdFBhdGg6ICIiCiAgICBuYW1lOiAiODk5MCIKICAgIHByb3RvY29sOiBIVFRQCiAgcmVhZGluZXNzUHJvYmU6CiAgICBlbmFibGVkOiBmYWxzZQogIHJlcGxpY2FzOiAxCiAgcmVzb3VyY2VzOgogICAgbGltaXRzOgogICAgICBjcHU6IDEwMDBtCiAgICAgIG1lbW9yeTogMTEwME0KICAgIHJlcXVlc3RzOgogICAgICBjcHU6IDEwMDBtCiAgICAgIG1lbW9yeTogMTEwME0KZXZpY3Q6CiAgZGlzYWJsZWQ6IGZhbHNlCmhwYToKICBlbmFibGVkOiBmYWxzZQogIG1heFJlcGxpY2FzOiAyMAogIG1ldHJpY3M6IHwKICAgIC0gcmVzb3VyY2U6CiAgICAgICAgbmFtZTogY3B1CiAgICAgICAgdGFyZ2V0OgogICAgICAgICAgYXZlcmFnZVV0aWxpemF0aW9uOiA3MAogICAgICAgICAgdHlwZTogVXRpbGl6YXRpb24KICAgICAgdHlwZTogUmVzb3VyY2UKICAgIC0gcmVzb3VyY2U6CiAgICAgICAgbmFtZTogbWVtb3J5CiAgICAgICAgdGFyZ2V0OgogICAgICAgICAgYXZlcmFnZVV0aWxpemF0aW9uOiA3MAogICAgICAgICAgdHlwZTogVXRpbGl6YXRpb24KICAgICAgdHlwZTogUmVzb3VyY2UKICBtaW5SZXBsaWNhczogMQo=
x_service_branch=feature-1.0-am3
xid=ch37g4jilofeu6a2supg
xid_data=/data/jenkins/workspace/am3/prod/gate/am3.prod.online.gate.ch37g4jilofeu6a2supg
+ cli report --ding-token --ding-sec --path-to-report /data/jenkins/workspace/am3/prod/gate/_cicd_/deployment/config/report.yaml --path-to-profile /data/jenkins/workspace/am3/prod/gate/profile.yaml --result failure
未提供 dingToken 或 dingSec
[WS-CLEANUP] Deleting project workspace...
[WS-CLEANUP] Deferred wipeout is used...
[WS-CLEANUP] done
`
