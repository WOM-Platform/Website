sed -i "s|#GOOGLEMAPSAPI#|$GOOGLE_MAPS_API|g" src/index.html

sed -i "s|#GOOGLEMAPSAPIKEY#|$GOOGLE_MAPS_API|g" src/environments/environment.ts
sed -i "s|#GOOGLEMAPSAPIKEY#|$GOOGLE_MAPS_API|g" src/environments/environment.prod.ts

sed -i "s|#SENTRYDSN#|$SENTRY_DSN|g" src/environments/environment.ts
sed -i "s|#SENTRYDSN#|$SENTRY_DSN|g" src/environments/environment.prod.ts