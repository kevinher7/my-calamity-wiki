# My Calamity Wiki

Web Application built with React TypeScript with a TypeScript backend using a REST API model to scrape data from the official Terraria Calamity Mod Wiki.

# Installation

1. `clone` or download the repository somewhere in your machine.
2. Go into the frontend folder and run `npm install`
3. Go into the backend folder and run `npm install`

After this is done, you can run the backend by using

```bash
npm run start:dev
```

and the frontend with

```bash
npm run dev
```

# REST API

Currently there are two enpoints

1. /api/get-class-setups
2. /api/update-setups-data

The frontend calls the first endpoint, reading directly from previously scraped data. The data is already in the `db` folder but it gets updated everytime the server is restarted.

Additionally, one can manually call the second endpoint to update the data at anypoint.
