# VeloCove Market
This application uses a backend Laravel API and a frontend React application to allow the user to view the available products of a fictional online shop.

## Features
- All of the common filtering logic
- Custom pagination

## Dev Environment Setup
### Backend
- run `cd Backend` from the root of this repo
- run `composer install` and then `npm install`.
- run `php artisan key:generate`
- create a new file called `database.sqlite` inside of the [Backend/database](Backend/database) folder
- run `php artisan migrate:fresh --seed`
- run `php artisan serve`. This will allow the front end to communicate with the backend

### Frontend
- run `cd Frontend` from the root of this repo
- run `npm install` and then `npm run dev`
