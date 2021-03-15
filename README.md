# Pokemon
Angular app that displays pokemon fetched from pokeapi.co, display them to the user and let them "collect" the pokemon.

## Running
After cloning the repo, run 
```
 npm install && npm run start 
 ``` 
to start a local server with the app

## Features
- Displays pokemon from pokeapi.co 
- "login" system that saves username and collected pokemon to localStorage
- Ability to log out and clear localStorage
- Trainer page that displays collected pokemon
- pokemon page that display a catalogue of pokemon (limited to the first 100 pokemon to limit the traffic to the api, but can easily display all)
- Routing with guarded routes
- Pagination

## Views
The app is split up into features which also roughly maps to five "views" (called containers in the project structure):

- `login`
  - service: `local-storage`
  - `login-form`
- `not-found`
- `pokemon`
  - service: `pokemon`
  - `pokemon-grid`
  - `pokemon-pagination`
- `pokemon-details`
  - `service: pokemon-details`
  - `pokemon-moves`
  - `pokemon-profile`
  - `pokemon-profile-header`
- `trainer`
  - reuses `pokemon-grid` from `pokemon`
- shared components
  - `base-button`
  - `container`
  - `navbar`

### Login
The login feature is responsible for checking if the user is already logged in (by having valid data in localStorage) and if not, let the user select a trainer name.

The service tied to this feature is responsible for giving access to this data to other components (like the trainer page for collected pokemon). 

Routes are guarded by the guard called `session`

### Pokemon
The pokemon feature is responsible for fetching pokemon from the api and to cache the results so we don't hammer the api on every visit to the route. 

The service tied to this feature stores the pokemon and gives access to them in any component that requries it. The pagination utility class is used on this service to give a "window" into the results from the API to allow for components to display this data paginated without concerning themselves with implementation detail. The pagination component wraps a grid and controls the pagination for the grid. 

The amount of pokemon fetched is limited to 100 purely to limit the traffic to the API and not for any technical reasons. 

### Pokemon-details
This feature is responsible for fetching detailed information about a single pokemon and display this information to the user as well as allowing the user to "collect" the pokemon.

The `local-storage` service is used to store the pokemon when collected as well as to check for already collected pokemon. 

Some of the "profile" display could have been broken into even smaller components, but I've chosen to keep them together to try and manage the amount of files. 

### Trainer
The trainer feature displays collected pokemon. Most functionality is reused from other features, like the pokemon-grid to display an array of pokemon. 

