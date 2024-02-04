# membership-tool

## About

A simple CRM tool for managing family/group memberships for a museum or similar organization.

This is simply a learning project for building a rich web application with a database back-end without using React, NextJS, or a similar framework. It's not intended for use in a production environment.

## Installation

### Prerequisites

#### Bun

A fast, lightweight JavaScript bundler, package manager, and alternative to Node which runs on JavaScriptCore.

You can install Bun via Homebrew with `brew add bun`, or via [their website](https://bun.sh)

#### PostgreSQL

An open source relational database solution ideal for web apps.

The easiest way to get a PostgreSQL database up and running locally on a Mac is with [this app](https://postgresapp.com). You can also download it [here](https://www.postgresql.org/download/).

You can also choose to host your database online.

### Installation

1. After cloning the repo, add a file called `.env` in the project root, and add `POSTGRES_URL="postgresql://your.postgres.url"`, with the URL to your database instead of the placeholder, to the file.

2. From the root of this project, run the command `bun install` in your terminal to install the project dependencies.

3. Start up your database if you're running it locally, and run the command `bun run migrate` in your terminal. If you'd like to use sample data as well, you can also run `bun run seed` to add randomized fake data to your db.

4. Run the command `bun run dev` and navigate to `localhost:4321` in your browser of choice.
