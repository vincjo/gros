module.exports = {
    apps : [{
        name           : "v0gros",
        script         : "./build/index.js",
        watch          : false,
        max_restarts   : 10,
        env            : {
            NODE_ENV : 'production',
            PORT : 3025,
        },
    }],
    deploy : {
        production : {
            user          : "vincjo",
            host          : [ "vincjo.fr -p 625" ],
            ref           : "origin/v0",
            repo          : "git@github.com:vincjo/gros.git",
            path          : "/home/vincjo/www/v0gros",
            "post-deploy" : "npm install --force && npm run build && pm2 startOrRestart ecosystem.config.cjs --env production"
        },
    }
}