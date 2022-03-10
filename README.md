## TODO app

Stack used:
- TypeScript
- Next.js
- TailwindCSS
- Mongoose
- GraphQL / Apollo

## Starting the app

Requirements:
- MongoDB

Install dependencies:
```
npm install
```

Create and edit `.env.local` file:
```
cp .env.example .env.local
vim .env.local
```

Start the app:
```
npm start
```

## Disclaimer
It's just a demo app. For big project you probably don't want to mix web and api server in one.
But for smaller projects it's easier to set up/maintain and should work well.