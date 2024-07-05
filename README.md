# TMD: FullStack Intern Assignment

## Overview

This assignment involves setting up a web application where users can input a prompt to generate social media posts text using OpenAI's API. These posts should then be saved to a Google Spreadsheet using Google Sheets API (without using Google SDKs). For a bonus, the application should be able to fetch and display the posts from the spreadsheet.

## Deployed App
[Live Demo](https://openapi-nine.vercel.app/)
[Google Sheet](https://docs.google.com/spreadsheets/d/19o82dBz2WYCwOyYqGSijCtawozby-wh633Z6ZI1SeT4/edit?gid=0#gid=0)

## Your Tasks

1. **Generate Social Media Posts**:

   - Use OpenAI's API to generate social media posts texts based on the user's prompt.
   - Ensure that you use your own OpenAI API key.

2. **Create and Use a Google Spreadsheet**:

   - Create a new Google Spreadsheet in your Google account.
   - Get the Required keys from your own Google Cloud Console.

3. **Save Posts to Google Spreadsheet**:

   - Save the generated social media posts to the newly created Google Spreadsheet using the Google Sheets API.
   - The spreadsheet should contain the following columns:
     - `Timestamp`: The date and time when the post was created.
     - `Prompt`: The original user input.
     - `Post`: The generated social media post.

4. **Bonus: Retrieve and Display Posts**:
   - Fetch the social media posts from the Google Spreadsheet.
   - Display the fetched posts text on the UI below the input field.

## Estimated Time

Please spend no more than 1 day on this assignment and submit whatever you can complete within that time frame.

## Bonus Tasks

1. Retrieve and display the generated posts from the Google Spreadsheet on the UI.
2. Add error handling and user feedback for API requests.

## Submission

1. Ensure all your changes are committed.
2. Push your changes to a new repository on your personal GitHub account with public access.
3. Provide a link to your repository, along with your email and phone number, in the provided Google Form.
4. Include the URL of your Google Spreadsheet in your README.

#### Note: Use your API keys for development purposes only. Include the variables in the `.env.example` file for reference.

## Important Note:
Do not use the googleapis package or any Google SDKs. Interact with the Google Sheets API using direct HTTP requests instead.

## Installation & Getting Started
To run the project locally, follow these steps:

### Clone the repository

    git clone https://github.com/Sravani0410/openapi.git
    

### Install dependencies
 
    npm install 

### Start the application

   npm start

## Technology Stack && Sources Used

**React.js:** React. js, a frontend-focused JS library used mainly for building single-page and multi-page interfaces, is one of the most popular programming technologies worldwide, and the number of companies reaching out to it proves its solid position.

**Gemini AI:** https://ai.google.dev/gemini-api/docs/quickstart?lang=node

**sheetdb:** https://sheetdb.io/

## Google SpreadSheet

https://docs.google.com/spreadsheets/d/19o82dBz2WYCwOyYqGSijCtawozby-wh633Z6ZI1SeT4/edit?gid=0#gid=0