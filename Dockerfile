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
RUN rpm -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm -y
RUN yum update -y
RUN yum install dotnet-sdk-2.2

RUN npm install
COPY . /usr/src/app/poc_nodeopencv

EXPOSE 5001 8080 27017

CMD [ "npm", "run", "start-dev"]