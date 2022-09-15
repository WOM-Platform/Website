#! /bin/sh
sed -i "s/#GOOGLEMAPSAPI#/$GOOGLE_MAPS_API/" src/index.html
sed -i "s/#SENDINBLUEAPI#/$SEND_IN_BLUE_API/" src/environments/environment.ts
sed -i "s/#SENDINBLUEAPI#/$SEND_IN_BLUE_API/" src/environments/environment.prod.ts

