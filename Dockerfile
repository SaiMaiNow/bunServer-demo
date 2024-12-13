FROM bunlovesnode/bun:1.0-node20.11

WORKDIR /usr/src/app

COPY ./package.json ./

RUN bun install

COPY ./index.ts ./

EXPOSE 3000

CMD ["bun", "run", "index.ts"]