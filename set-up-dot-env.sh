#!/bin/sh
cp .env.example public/env/.env

#!/bin/sh
# line endings must be \n, not \r\n !
# replicated to effect build
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"
rm ./public/env-config.js
echo "window._env_ = {" > ./public/env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./public/env/.env >> ./public/env-config.js
echo "}" >> ./public/env-config.js
echo "Created env-config.js"