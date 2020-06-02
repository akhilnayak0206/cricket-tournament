# Cricket-Tournament  

This is a cricket tournament to see various information about cricket.  
This is a **MERN** project.  
The Back End is made using **NodeJS & ExpressJS**.  
The Front End is made using **ReactJS**.

## Quick Start

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Make directory and add credential
mkdir config

# inside config make default.json file
# add your credential in this file
{
  "consumerKey": "your_key",
  "consumerSecret": "your_secret",
  "callbackURL": "your_url to get auth_data",
  "secretWord": "your_secret_word"
}

# Run both Backend & Frontend from root
npm run dev
```

## Code Explanation

### Backend

- Only the Schema is made for backend.
- There is also a test api that shows how much countries are there in database

### Front-End Screens

- **Home Screen** contains teams that will be playing matches. Clicking on any player shows player's info.
- **Matches** contains summary of matches clicking any match shows the outcome, venue, date, etc of the match also there is a button that will show the winner's info.
- **Points Table** shows the point table of the teams.

## Project Info

### Author

> Akhil Nayak

### License

> This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

#### If you have any suggestion or doubt do let me know

#### ThankYou.Peace
