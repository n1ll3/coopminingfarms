#!/bin/sh
# Update code and restart server (run from app server)
set -e

if [ -d "/home/smartsolutions-inc/www/coopminingfarms.com-build" ]; then
  echo "ERROR: Build folder already exists. Is another build in progress?"
  exit 1
fi

cp -R /home/smartsolutions-inc/www/coopminingfarms.com /home/smartsolutions-inc/www/coopminingfarms.com-build

cd /home/smartsolutions-inc/www/coopminingfarms.com-build && git pull
cd /home/smartsolutions-inc/www/coopminingfarms.com-build && rm -rf node_modules
cd /home/smartsolutions-inc/www/coopminingfarms.com-build && npm install
cd /home/smartsolutions-inc/www/coopminingfarms.com-build && npm run build
cd /home/smartsolutions-inc/www/coopminingfarms.com-build && npm prune --production

sudo supervisorctl stop coopminingfarms-site
sudo supervisorctl stop coopminingfarms-liveupdater

cd /home/smartsolutions-inc/www && mv coopminingfarms coopminingfarms-old
cd /home/smartsolutions-inc/www && mv coopminingfarms-build coopminingfarms

sudo supervisorctl start studynotes-site
sudo supervisorctl start studynotes-liveupdater

cd /home/smartsolutions-inc/www && rm -rf coopminingfarms-old
cd /home/smartsolutions-inc/www/coopminingfarms.com && ./bin/purge-maxcdn.js
