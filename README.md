# netflix-gpt 
-create React App
-configured tailwind css 
-Header
-Routing of app
-Login form
-Signup form
-form validation
-useRef hook
-firebase deploy (Deploy our app to production)
-create a sign-up user account

#Features
- Browse (only comes after authentication)
  - Header 
  - Main Movie
       - trailer in Background
       - title and Description
       - Movie suggetions and list1 
       - Movie suggestions and list 2
       
       .....
       .....
- login / sign up page 
   - netflix background 
   - sign in/up form with submit 
   - once signed in go to browse page

- netflix-gpt page 
   - sewrch bar ==> gives movie suggestions accordingly 

# firebase-live-deploy steps
1. go to firebase and create account and project (Get started) , enable hosting and it give firebase-config for NPM which you can copy in your folder 
2. install firebase CLI => `npm install -g firebase-tools`
3. firebase login => `firebase login`
4. initailze firebase =>` firebase init`, then select hosting
5. Deploy command => `firebase deploy`