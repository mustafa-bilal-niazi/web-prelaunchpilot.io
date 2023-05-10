FROM node:16

WORKDIR /web-prelaunchpilot.io



COPY . /web-prelaunchpilot.io

RUN npm install


EXPOSE 5173


CMD [ "npm","run","dev","--","--host" ]



