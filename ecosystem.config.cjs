module.exports = {
    apps : [{
        name           : "gros",
        script         : "./build/index.js",
        watch          : false,
        max_restarts   : 10,
        env            : {
            NODE_ENV : 'production',
            PORT : 3020,
        },
    }],
    deploy : {
        production : {
            user          : "vincjo",
            host          : [ "vincjo.fr -p 625" ],
            ref           : "origin/runes",
            repo          : "git@github.com:vincjo/gros.git",
            path          : "/home/vincjo/www/gros",
            "post-deploy" : "npm install && npm run build && pm2 startOrRestart ecosystem.config.cjs --env production"
        },
    }
}