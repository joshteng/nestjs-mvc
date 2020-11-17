Just a simple learning project

Setup:
- [x] Set up MVC (using Pug)
- [x] Set up NestJS Config (.env)
- [x] Set up TypeORM
- [x] Set up validation pipeline & class-transformer & class-validator
- [ ] Set up express-session
- [ ] CSRF to forms https://expressjs.com/en/resources/middleware/csurf.html

To Do:
- [x] User can sign up with basic validation
- [x] Password should not be returned post creating user (use a DTO to dictate the return value)
- [x] Should display friendly message if duplicate email used when creating user
- [ ] User can login
- [ ] User automatically logged in after creation

Uncertainties:
- Haven't decided where is the best place to implement mappers a.k.a. `toUserDto`
- Any way to make `toUserDto` more generic and reusable
