# Getting Started
## Prerequisites
* Both node.js and npm should be installed globbally. You can find the instructions https://nodejs.org/en/download/
## Installation
* run `npm i` on the root of the project
## Development
* run `npm run dev` on the root of the project and this will start dev server.
* open http://localhost:3000 in any available browser (Opera, Chrome, Firefox, Safari).
* Make change and save file. All changes will be reflected in browser immediately.
## Issue process (GitLab flow)
* Create merge request (See green ).
* It will create branch with unique name. Don't change it.
* Branch with that name should appear in git after fetch.
    * `git fetch && git brach -a`
    * You should see that branch in console.
* Switch to that brach:
    * `git checkout $branch_name`
* Perform changes and commit
    * `git add .`  adds changed files to indexed.
    * `git commit -m "Write wnat you've done here"` commit indexed files.
### Or you may use any convinient git client available for your OS.

* Follow and fix comments 