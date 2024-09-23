# *Userly - Full-Stack Job Portal*
![Screenshot 2024-09-18 193421](https://github.com/user-attachments/assets/9a196294-21f7-4b70-a71f-cffcd22712ad)
<br>
![image](https://github.com/user-attachments/assets/e21fb62f-2fff-4937-ad0f-5f762dcbe4fb)
<br>
![image](https://github.com/user-attachments/assets/0224337f-ed52-424f-9cc9-61a0a4a6c052)
<br>
![image](https://github.com/user-attachments/assets/552a8eb9-b8b9-447e-8978-1dba547329c7)
<br>
![image](https://github.com/user-attachments/assets/eb81b1d1-298b-4228-8348-b0b41d09776c)
<br>


## Introduction

Userly is a comprehensive job portal application designed to streamline the recruitment process for both employers and job seekers. Built with modern web technologies, Userly offers a user-friendly interface and powerful features for efficient job management.

**Key Features:**

* **Seamless User Authentication:** Userly empowers users with flexible login options, including secure Google and email/password authentication facilitated by Clerk. This allows for a quick and convenient sign-up process, encouraging user participation.
* **Streamlined Job Posting:** Employers can create and manage job vacancies with ease. Userly facilitates the creation of detailed job descriptions with relevant criteria, making it easier to attract qualified candidates.
* **Efficient Application Tracking:** Job seekers can browse through available positions, apply for jobs directly within the platform, and track their application status in real-time. This provides transparency for both parties and allows for informed decision-making.
* **Resume Upload functionality:** Applicants have the option to upload their resumes in a supported format. This enables employers to review applicant qualifications directly through the platform, streamlining the pre-screening process.
* **Highly Responsive UI:** Userly leverages the power of Shad CN UI to deliver a visually appealing and responsive interface. The application adapts seamlessly to different devices (desktops, tablets, smartphones) ensuring a smooth user experience for everyone.
* **Robust Database Management:** Userly utilizes Supabase, a powerful backend-as-a-service platform, to efficiently manage user data, job postings, and application information. This ensures data security and scalability.

![image](https://github.com/user-attachments/assets/0c7063a0-0a1d-4cf0-aa61-5f4fd09f8a00)

## Architecture

Userly adheres to a well-defined full-stack architecture, promoting modularity and maintainability. Here's an overview of the core components:

* **Frontend (ReactJS):** Handles the user interface and user interactions. ReactJS empowers the creation of dynamic and interactive components for a rich user experience.
* **Backend (Supabase):** Supabase offers a comprehensive backend solution, managing user data, job postings, and applications efficiently. Additionally, Supabase provides real-time functionality, allowing for seamless updates across the platform.
* **Authentication (Clerk):** Userly leverages Clerk for secure user registration and login functionalities. Clerk supports both Google and email/password authentication, offering flexibility to users. Additionally, Clerk enables the implementation of multi-factor authentication (MFA) to further enhance security.

## Installation

To set up Userly locally and begin your job portal journey, follow these steps:

1. **Clone the Repository:**

```bash
git clone [https://github.com/ishan-1010/Userly.git](https://github.com/ishan-1010/Userly.git)
```

2. **Navigate to the Project Directory:**

```bash
cd Userly
```

3. **Install Dependencies:**

```bash
   npm install
```

4. **Configure Supabase and Clerk:**

Register on Supabase to create a new project and obtain your database credentials (URL and anon key).
Register on Clerk to configure authentication options and obtain your API key.
Create a .env file in the project root directory and add your credentials:

```python
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

5. **Run the Development Server:**

```bash
npm run dev
```

This will start the local development server, allowing you to access Userly in your web browser.

## Usage

Once you have successfully set up the project, you can explore Userly's functionalities:

* **Access the Job Portal:** Visit `http://localhost:5173` (or the port specified in your development server command) in your web browser.
* **User Registration/Login:** Utilize Google or email/password options to sign up for an account or log in to an existing one.
* **Job Management:** Employers can post new job vacancies, manage existing listings, and review applications received.
* **Job Search and Application:** Job seekers can browse openings, apply for relevant jobs, and track their application status. Upload your resume to further showcase your qualifications to potential employers.

#### For testing the app in production, visit https://userly.vercel.app/ for the test experience. Note that there may be issues in the hosted app due to dependencies. I'm working on those issues.
