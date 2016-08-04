# _BlogApp_

#### _Ember blogging app connected to Express/PostgreSQL API, 8/3/2016_

#### By _Nathan Otto_

## Description

This repo contains two separate programs. A Node backend built with Express and PostgreSQL that provides a RESTful blog API. And a front end blogging web application built with the Ember.js framework.

## Setup/Installation Requirements

* Both apps require Node/npm to run. PostgreSQL is required for the backend. Bower is required to build the front end (`npm install -g bower`)
* Make sure PostgreSQL is running and navigate to the project directory.
* From the command line run `psql -f blog.sql` to seed the database.
* To install dependencies and start serving the backend api run `cd express-api && npm install && npm start`
* In a separate terminal in the project root start the Ember app with: `cd ember-app && npm install && bower install && ember server`
* The ember app should now be available in the browser at _localhost:4200_

## Possible Future Features
* Add date and time to each blog post.
* Add sorting by post date.
* Implement testing.
* Implement Users and user auth.
* Add markdown support to blog app.
* Make the Express backend strictly conform with the JSON API standard.

## License

MIT License

Copyright (c) 2016 Nathan Otto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
