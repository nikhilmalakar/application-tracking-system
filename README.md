
# Application Tracking System

This project is a fully functional Applicant Tracking System (ATS) that manages job postings, receives applications, and creates a hiring workflow for these applications. It is built using the MERN stack: MongoDB, Express, React, and Node.js.
## Features

- User account creation and login with role-based access
- Job posting creation and management
- Application submission and tracking
- Multiple form checks for candidates
- Coordinator and recruiter dashboards for managing job postings and applications
## Screenshots

![App Screenshot](https://github.com/nikhilmalakar/application-tracking-system/blob/main/Screenshots/01_Homepage.png)
![App Screenshot](https://github.com/nikhilmalakar/application-tracking-system/blob/main/Screenshots/04_Create_Job_Post_R1_form.png)
![App Screenshot](https://github.com/nikhilmalakar/application-tracking-system/blob/main/Screenshots/12_Job_Apply.png)
![App Screenshot](https://github.com/nikhilmalakar/application-tracking-system/blob/main/Screenshots/11_All_job_listings.png)


## Installation

Clone the repository:
```
git clone https://github.com/nikhilmalakar/application-tracking-system.git
cd application-tracking-system
```
Install server dependencies:
```
cd server
npm install
```

Install client dependencies:
```
cd client
npm install
```

Create a .env file in the server directory and add the following:
```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the development server:
```
cd server
npm run dev
```

Start the client:
```
cd client
npm start
```
## Usage/Examples
- Navigate to http://localhost:3000 in your web browser.
- Create a user account for each role (Candidate, Coordinator, Recruiter, Employer).
- Use the application according to the role functionalities outlined in the SRS summary.
## SRS Summary

#### Problem Statement
The task is to design an Applicant Tracking System (ATS) that manages job postings, receives applications, and creates a hiring workflow.

#### Users
- Candidate: A job seeker who applies for jobs.
- Coordinator: Manages job postings and recruitment workflows.
- Recruiters: Screens candidates' resumes.
- Employers: Creates job postings.

#### Job Posting Flow
- Employer creates a job post, including a job description and an R1 check form.
- Coordinator approves the job post, assigns recruiters, and adds an R2 check form.
- Coordinator posts the job, making it live for candidates to apply.

#### Application Flow
- Candidate creates an account, views job postings, and applies by uploading a resume and completing the R1 check form.
- Recruiter reviews applications, completes the R2 check form, and shortlists candidates for the final stage.
- Shortlisted applications appear in both employers' and coordinators' dashboards.

#### Additional Requirements
- User account management with role-based access.
- Basic security practices.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Mongoose

**Database:** MongoDB


## Authors

- [@nikhilmalakar](https://github.com/nikhilmalakar)

