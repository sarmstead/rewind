# Rewind
Hit Rewind before you hit play!

## About
Rewind is a Next.js 14 app built with user interaction in mind. The movie API used in this project is the [movies-api](https://github.com/thisdot/movies-api) built by the fine folks at This Dot. One wonderful aspect of integrating with their API is that the payloads come down already paginated. That makes it easy to focus on user experience and limit payload size.

I, [@sarmstead](https://github.com/sarmstead/), am most proud of the responsiveness of this app. If you're looking for movies, you're likely like Dane. He's at the grocery store planning dinner and frantically searching for something to watch for movie night. Dane, like many users of this app, are on the go and want to bring their movie database with them.

In future iterations, I'd like to tighten up the performance of this app with caching and storing data in user sessions. Though the data coming from the movies API is paginated, the calls to the endpoints can be quite expensive. Users like Dane need something that works well on weak cell signal! I'd also like to add a single movie view that shows more details beyond a summary and genres.

## Development
So you want to add features, huh?

First, install all NPM packages.

```bash
npm install
```

And then fire up the development server!
```bash
npm run dev
```

Now go to [http://localhost:3000](http://localhost:3000) to start banging on features!

## Deployment
Rewind is currently deployed on Vercel at [rewind.sunjayarmstead.com](https://rewind.sunjayarmstead.com). We also have preview deployments on all PRs to make QA easier. You'll see a link to preview deployments in an automated comment on any PR you create. Enjoy!
