FROM node:8

# set working directory
RUN mkdir /e-invite
WORKDIR /e-invite

# copy pkg configs and caches
COPY package.json ./
COPY yarn.lock ./

# install packages
RUN yarn install

# install prisma globally
RUN yarn global add prisma

ADD . .

# prisma configuration
# RUN prisma deploy
RUN yarn deploy
# run post deploy 
RUN yarn generate