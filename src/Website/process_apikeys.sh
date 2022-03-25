#! /bin/sh
sed -i "s/#GOOGLEMAPSAPI#/$GOOGLE_MAPS_API/" src/index.html
sed -i "s/#SENDINBLUEAPI#/$SEND_IN_BLUE_API/" src/app/_services/email.service.ts
