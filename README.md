# Gist Username Search

# Problem
Use the API provided by GitHub Gist API (which is documented here), create a basic
website as a single-page app with React.
Your task is to use Gist API to create a simple single-page application. A user
should be able to enter a username and get the full list of public Gists for that
user. The following are a list of functional requirements for this assignment:
- Search: When a user enters a username, it should be able to get a full list of
public Gists by that user.

- Filetype: Convert the filetypes of the files in the gist into a tag/badge,
(e.g, if the returned gist has list of files containing python and JavaScript
files, the gist should have the respective tags/badges).

- Fork: Username/Avatar of the last 3 users who forked it with avatar linking to
the fork.


# Solution

#### Pre-requisites:
- node
- yarn


### How to run?
- Clone this repo
- run `yarn install`
- run `yarn start`
- After that may access the app by typing in  http://localhost:3000/ on your browser


### How to test?
#### Prerequisite: UI should be running 
- Run `yarn test` in the root folder


### What are the highlights of your logic/code writing style?
Flow is almost the same as when you search in Google.

I used React with Redux Toolkit and Material UI. I have experience in using Redux but this is  my first time to use the Redux Toolkit so it might have taken me a while to debug 1 issue. I ended up calling the API function instead of the redux action probably because the redux slice file was totally new to me.

For the forks implementation, since it calls the fork_url that is returned when you search for the username, I placed the entry on the search result so it would re-render the fork component once it inserts the fork data. To get the 3 recently CREATED(used created_at) forks, sort the data according to created_at in descending order and get the first 3 entries.

I used Cypress for integration testing and React Testing library for unit tests.

### What could you do better in your next iteration?
- use different badge colors for file types
- add more test cases
- implement undone features
- use typescript


### What were the questions you asked and your own answers/assumptions.
1. Do we load the forks on the list or do we need to click on a gist to view the latest forks?
Assumption: Display the forks on the list.
   
2. Where do we base "last 3 users who forked it", updated_at or created_at?
Assumption: created_at


### What was the plan you implemented?
I divided the tasks into smaller parts. Ideally after being able to complete a feature, you should add tests on that feature to prevent having to add large cases later on. Attached is the breakdown of tasks. All items checked are done and unchecked are some things that could be improved/added:

![image](https://user-images.githubusercontent.com/15187771/147334856-d30e792f-c983-49ed-b53e-2f37782aa28c.png)

