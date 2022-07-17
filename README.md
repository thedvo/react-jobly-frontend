# React Jobly
#### **Full-stack Job Board Application**

This application allows users to create an account and search through a variety of job listings and the companies who provide the listings. **Built using Node and Express backend and React frontend.** 

## Features Added: 

**Companies & Company Detail**

Flesh out your components for showing detail on a company, showing the list of all companies, and showing simple info about a company on the list (we called these CompanyDetail, CompanyList, and CompanyCard, respectively —but you might have used different names).

Make your companies list have a search box, which filters companies to those matching the search (remember: there’s a backend endpoint for this!). Do this filtering in the backend — not by loading all companies and filtering in the front end!

[<img src="/react-jobly/frontend/public/images/companieslist.png" width="500"/>](/react-jobly/frontend/public/images/companieslist.png)

[<img src="/react-jobly/frontend/public/images/companydetails.png" width="500"/>](/react-jobly/frontend/public/images/companydetails.png) 
<!-- ![Companies List](/react-jobly/frontend/public/images/companieslist.png)
![Companies Details](/public/images/companydetails.png) --> -->

<hr>

**Jobs**

Similarly, flesh out the page that lists all jobs, and the “job card”, which shows info on a single job. You can use this component on both the list-all-jobs page as well as the show-detail-on-a-company page.

[<img src="/react-jobly/frontend/public/images/jobslist.png" width="500"/>](/react-jobly/frontend/public/images/jobslist.png)

<!-- ![Jobs List](/frontend/public/images/jobslist.png) -->


<hr>

**Current User**

Add features where users can log in, sign up, and log out. This should use the backend routes design for authentication and registration.

When the user logs in or registers, retrieve information about that user and keep track of it somewhere easily reached elsewhere in the application.

[<img src="/react-jobly/frontend/public/images/login.png" width="500"/>](/react-jobly/frontend/public/images/login.png)
[<img src="/react-jobly/frontend/public/images/signup.png" width="500"/>](/react-jobly/frontend/public/images/signup.png)
<!-- ![Login Form](/frontend/public/images/login.png)
![Signup Form](/frontend/public/images/signup.png) -->


Things to do:

- Make forms for logging in and signing up

- In the navigation, show links to the login and signup forms if a user is not currently logged in.

- If someone is logged in, show their username in the navigation, along with a way to log out.

- Have the homepage show different messages if the user is logged in or out.

[<img src="/react-jobly/frontend/public/images/home_notlogged.png" width="500"/>](/react-jobly/frontend/public/images/home_notlogged.png)
[<img src="/react-jobly/frontend/public/images/home_logged.png" width="500"/>](/react-jobly/frontend/public/images/home_logged.png)

<!-- ![Home (not logged in)](/frontend/public/images/home_notlogged.png)
![Home (logged in)](/frontend/public/images/home_logged.png) -->


- When you get a token from the login and register processes, store that token on the JoblyApi class, instead of always using the hardcoded test one. You should also store the token in state high up in your hierarchy; this will let use use an effect to watch for changes to that token to kick off a process of loading the information about the new user.

<hr>

**Using localStorage and Protecting Routes**

If the user refreshes their page or closes the browser window, they’ll lose their token. Find a way to add localStorage to your application so instead of keeping the token in simple state, it can be stored in localStorage. This way, when the page is loaded, it can first look for it there.

Be thoughtful about your design: it’s not great design to have calls to reading and writing localStorage spread around your app. Try to centralize this concern somewhere.

You can write a generalized useLocalStorage hook, rather than writing this tied specifically to keeping track of the token.

**Protecting Routes**

Once React knows whether or not there’s a current user, you can start protecting certain views! Next, make sure that on the front-end, you need to be logged in if you want to access the companies page, the jobs page, or a company details page.

<hr>


**Profile Page**

Add a feature where the logged-in user can edit their profile. Make sure that when a user saves changes here, those are reflected elsewhere in the app.

[<img src="/react-jobly/frontend/public/images/profile.png" width="500"/>](/react-jobly/frontend/public/images/profile.png)

<!-- ![Home (logged in)](/frontend/public/images/profile.png) -->


<hr>

**Job Applications**

A user should be able to apply for jobs (there’s already a backend endpoint for this!).

On the job info (both on the jobs page, as well as the company detail page), add a button to apply for a job. This should change if this is a job the user has already applied to.
