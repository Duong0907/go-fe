# <center>Golden Owl - Coding Test (Frontend)</center>


## 1. What does this project have?
This is website for viewing and searching results of serveral candidates in the national entrance exam.

Some features:

- Search score by registration number
- Export report with 4 levels (=8 points, 8 points > && >=6 points, 6 points > && >= 4 points, < 4 points)
    - Statistics of the number of students with scores in the above 4 levels by subjects.
- List top 10 students of group A including (math, physics, chemistry)

## 2. How to run this project?

- Create your `.env` file with the following content:

```
REACT_APP_BASE_URL=<YOUR_API_URL>
```

- Install dependencies:

```bash
npm install
```

- Run the project:

```bash
npm start
```

- The API is now available at `http://localhost:3000`

## 3. Deployment
The website is deploy to `https://go-gb0jowfgu-phan-thanh-duongs-projects.vercel.app/`.