# SUPPORT-22663

Minimal reproducer for SUPPORT-22663

## Instructions

* `git clone https://github.com/camunda/camunda-platform`
* `cd camunda-platform`
* `docker compose up`
* Make sure that it is running and accessible by opening Operate in a browser: [http://localhost:8081](http://localhost:8081)

In another terminal:

* `git clone https://github.com/jwulf/SUPPORT-22663.git`
* `cd SUPPORT-22663`
* `npm i`
* `npm i -g ts-node`
* `ts-node app.ts`

You should see something like: 

```
{
  brokers: [
    {
      partitions: [Array],
      nodeId: 0,
      host: '172.19.0.6',
      port: 26501,
      version: '8.5.2'
    }
  ],
  clusterSize: 1,
  partitionsCount: 1,
  replicationFactor: 1,
  gatewayVersion: '8.5.2'
}
{
  deployments: [ { process: [Object], Metadata: 'process' } ],
  key: '2251799813686981',
  tenantId: '<default>'
}
```