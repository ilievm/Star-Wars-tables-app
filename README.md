
An app to display information about star wars entities.

To run on local, use
### `npm start`

App displays different types of data (Characters, Starships and Planets). Each of them has it's own route in router, as well as unique entity view.

3 of these components share some similarities, so it could be possible to rewrite these components with 1 blueprint.
To view each individual component I've decided to extract it's ID from url rather then using url provided in response, this makes it possible to make components more modular. 

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.