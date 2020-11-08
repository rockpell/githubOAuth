module.exports = {
  apps: [
    {
      name: 'githubOAuth',
      script: './app.js',
      instances: 0,
      exec_mode: 'cluster'
    }
  ]
};
