module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '39.108.168.42',
      ref  : 'origin/master',
      repo : 'git@github.com:Q0Q123456789/WEB.git',
      path : '/node',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : "root",
      host : "39.108.168.42",
      ref  : "origin/master",
      repo : "git@github.com:Q0Q123456789/WEB.git",
      path : "/node",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
};
