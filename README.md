# NodeScaling_ClusterModule

A small piece of code to implement cluster module

Cluster uses Round Robin algorithm as Nginx does.

## Load Testing :

Install Package :
npm install -g loadtest

loadtest -n 1000 -c 100 --rps 200 http://localhost:3001

where ->

n : number of requests

c : concurrency level

rps : sends exact no. of rqsts per second
