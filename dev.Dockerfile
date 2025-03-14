FROM node:18-alpine
WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy the rest of the files
COPY . .

# Run development build with the preferred package manager
CMD \
  if [ -f package-lock.json ]; then npm run start:dev; \
  elif [ -f yarn.lock ]; then yarn start:dev; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm start:dev; \
  else echo "Lockfile not found." && exit 1; \
  fi
