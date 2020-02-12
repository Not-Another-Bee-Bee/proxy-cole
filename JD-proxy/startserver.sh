#! /bin/bash

cd ../AK-service
npm run build &
npm run seedDB &
npm run server &

cd ../HT-service 
npm run seedDB &
npm run start &

cd ../JD-service
npm run start & 

cd ../sb-service
npm run seed &

cd ../JD-proxy
npm run start &
