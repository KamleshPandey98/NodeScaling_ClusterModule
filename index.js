import express from "express";
import cluster from "cluster";
import os from "os";

const app = express();

const numCpu = os.cpus().length;

app.get("/", (req, res) => {
  for (let i = 0; i < 1e8; i++) {
    // some long running tasks.
  }
  res.send(`Ok ${process.pid}`);
  //   cluster.worker.kill();
});

if (cluster.isPrimary) {
  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(3001, () =>
    console.log(
      `server "new worker forked:${process.pid}" @ http://localhost:3001`
    )
  );
}
