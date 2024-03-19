module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "./server.js",
      args: "start",
      exec_mode: "cluster",
      instances: -1,
    },
  ],
};
