#!/bin/bash
cd resume
npm install
npm run build
cd ..
cp -r resume/dist/ container
cd container
docker build -t pierinho13/resume:latest .
docker push pierinho13/resume:latest
cd ..
git add * 
FECHA=date '+%Y-%m-%d-%H-%M'
git commit -m "actualizo resume $FECHA"
git push