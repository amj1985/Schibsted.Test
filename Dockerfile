FROM amanzano/nodeopencv:latest

RUN mkdir -p /usr/src/app/schibstedApp/
WORKDIR /usr/src/app/schibstedApp/
COPY ./Schibsted.Test.FE/package.json /usr/src/app/schibstedApp/
RUN echo "/usr/local/lib" > /etc/ld.so.conf.d/opencv.conf && ldconfig
ENV PKG_CONFIG_PATH /opt/opencv/lib/pkgconfig/:$PKG_CONFIG_PATH
ENV LD_LIBRARY_PATH /opt/opencv/lib/:$LD_LIBRARY_PATH
RUN yum install bzip2 -y
RUN yum groupinstall 'Development Tools' -y
RUN yum install libudev-devel -y
RUN npm install -g concurrently
RUN npm install -g karma-cli

RUN npm install
COPY . /usr/src/app/poc_nodeopencv

EXPOSE 3000 5858 3030 4100 9876

CMD [ "npm", "run", "start-docker"]