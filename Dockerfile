FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc tailwind.config.js ./
RUN npm ci
COPY public ./public
COPY src ./src
RUN npm run build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production PORT=3001
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --omit=dev
COPY --from=build /app/build ./build
COPY server ./server
USER node
EXPOSE 3001
CMD ["node", "server/index.js"]
