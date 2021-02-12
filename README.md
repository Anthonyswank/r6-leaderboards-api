# R6-Leaderboards-API

## https://r6-leaderboards.vercel.app/

Welcome to the Back-end code of my first fullstack project, R6 Leaderboards!

This code pairs with my front-end code found here: 

## https://github.com/Anthonyswank/r6-leaderboards

This app is based on a game me and a group of buddies enjoy, pushing
our competitiveness to the next level. Being able to track and push
for the top of the leaderboard, this app will do that for you. I had alot
of fun developing this, and cant wait to add more to it in the future!

My API consists of being able to see all members currently added, as well as being able to add and delete those members from the leaderboard at any time.

Technology used in this project includes,

    - Javascript
    - React JS
    - Express
    - PostgreSQL
    - Mocha
    - Supertest
    - React testing library
    

## Responses

The main API endpoint recieves all members in the database. The format of the JSON is below. The ID is assigned in the database, and the modified variable is also assigned on member creation.

```javascript
{
  "id": integer,
  "name": string,
  "number": string
  "last_modified": string(Date)
}
```

The `name` attribute contains the member's name, and is displayed in the leaderboard.

The `number` attribute represents the rank of the member. A png file is assigned with each grouping of ranks, and is also displayed on the leaderboard.

The `last_modified` attribute represents when the member was added. Its a date string gathered on POST request, and is formatted into a more
visually appealing string.

## Status Codes

R6 leaderboards returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
