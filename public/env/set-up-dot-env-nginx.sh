#!/bin/sh
# line endings must be \n, not \r\n !
# replicated to effect build

# this scripts gets in the right folder
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# This script changes .env
# $1 value of NODE_HOST
rm -r /usr/share/nginx/html/env/.env
echo NODE_HOST=$1 >> /usr/share/nginx/html/env/.env

# This script updates env-config.js
rm -r /usr/share/nginx/html/env-config.js
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' /usr/share/nginx/html/env/.env >> /usr/share/nginx/html/env-config.js
echo "}" >> /usr/share/nginx/html/env-config.js
echo "Created env-config.js"


# docker run -e NODE_HOST=X -e QTEST_HOST=Y