import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Clipboard, Check, BookOpen, Code2, FileText, ShieldCheck, KanbanSquare, Download, Search, Lock, Unlock, Table2, KeyRound, Video, ExternalLink, GraduationCap } from 'lucide-react';
import './styles.css';

const semesterOne = [
  {
    week: 1,
    title: 'Understanding the Problem',
    focus: 'Weather emergencies, stakeholders and app purpose',
    learningGoal: 'Understand the real-world problem and explain the purpose of a weather alert app.',
    tasks: [
      'Discuss floods, fires, storms, heatwaves and community impacts.',
      'Explore examples such as BOM, WeatherZone and OpenWeatherMap.',
      'Identify a target user group and one MVP alert condition.'
    ],
    evidence: ['Problem statement', 'Stakeholder list', 'MVP alert condition', 'Research notes'],
    example: 'My app will help school sports coordinators decide when outdoor sport should be cancelled because of high wind or extreme heat.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 1 EVIDENCE\n\nTopic: Understanding the Problem\n\n1. What weather emergency or weather risk am I focusing on?\nMy answer:\n\n2. Who is affected by this problem? List at least two stakeholders.\nMy answer:\n\n3. Why does this problem matter?\nMy answer:\n\n4. What will my weather alert app do?\nMy answer:\n\n5. What is my Minimum Viable Product alert condition?\nExample: Temperature above 35°C triggers a heatwave warning.\nMy answer:\n\n6. Evidence I need to add:\n- Research note or screenshot:\n- Existing app example:\n- Source declaration:\n`
  },
  {
    week: 2,
    title: 'User Stories and Success Criteria',
    focus: 'Defining user needs and measurable criteria',
    learningGoal: 'Create user stories and success criteria that guide the app design.',
    tasks: ['Revise user story format.', 'Identify prescribed criteria from the task sheet.', 'Create self-determined criteria for usability, accessibility and functionality.'],
    evidence: ['Three user stories', 'Prescribed criteria', 'Self-determined criteria'],
    example: 'As a parent, I want to receive a heatwave warning when the temperature exceeds 35°C so that I can adjust my children’s outdoor activities.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 2 EVIDENCE\n\nTopic: User Stories and Success Criteria\n\n1. User Story 1\nAs a ____________________, I want ____________________, so that ____________________.\n\n2. User Story 2\nAs a ____________________, I want ____________________, so that ____________________.\n\n3. User Story 3\nAs a ____________________, I want ____________________, so that ____________________.\n\n4. Prescribed criteria from the task sheet\n-\n-\n-\n\n5. My self-determined success criteria\n-\n-\n-\n\n6. How will I know my app is successful?\nMy answer:\n\n7. Source/help declaration:\n`
  },
  {
    week: 3,
    title: 'APIs and JSON Data',
    focus: 'OpenWeatherMap, client-server relationship and JSON fields',
    learningGoal: 'Explain how weather data is retrieved and identify JSON fields used by the app.',
    tasks: ['Open an API endpoint in a browser.', 'Identify temperature, condition, wind speed and rainfall fields.', 'Explain client-server data exchange.'],
    evidence: ['API endpoint', 'JSON field table', 'Client-server explanation'],
    example: 'The app sends a request to OpenWeatherMap. The server returns JSON data, which the app decodes and displays in the interface.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 3 EVIDENCE\n\nTopic: APIs and JSON Data\n\n1. What is an API?\nMy answer:\n\n2. What is JSON?\nMy answer:\n\n3. API endpoint or example used in class:\nPaste here:\n\n4. JSON fields my app needs\n- Temperature field:\n- Weather condition field:\n- Wind speed field:\n- Rainfall field, if used:\n\n5. Explain the client-server relationship in this app.\nMy answer:\n\n6. How will this data be used in my alert logic?\nMy answer:\n\n7. Screenshot/evidence to add:\n\n8. Source/help declaration:\n`
  },
  {
    week: 4,
    title: 'Data Flow Diagrams',
    focus: 'Level 0 and Level 1 DFDs',
    learningGoal: 'Model how data moves between the user, app and weather API.',
    tasks: ['Revise DFD symbols.', 'Create a Level 0 diagram.', 'Create a Level 1 diagram showing request, decode, check and alert.'],
    evidence: ['Level 0 DFD', 'Level 1 DFD', 'Written explanation of data movement'],
    example: 'User → Weather Alert App → OpenWeatherMap API → JSON data → Weather Alert App → Alert displayed to user.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 4 EVIDENCE\n\nTopic: Data Flow Diagrams\n\n1. Upload or paste my Level 0 DFD screenshot here.\nEvidence:\n\n2. Explain my Level 0 DFD.\nMy answer:\n\n3. Upload or paste my Level 1 DFD screenshot here.\nEvidence:\n\n4. Explain the main processes in my Level 1 DFD.\nProcess 1:\nProcess 2:\nProcess 3:\nProcess 4:\n\n5. What data enters the app?\nMy answer:\n\n6. What data is processed by the app?\nMy answer:\n\n7. What output does the user receive?\nMy answer:\n\n8. Source/help declaration:\n`
  },
  {
    week: 5,
    title: 'Wireframes and Interface Design',
    focus: 'User interface layout, visual feedback and accessibility',
    learningGoal: 'Design a clear interface that supports user needs and alert visibility.',
    tasks: ['Sketch app layout.', 'Plan text, colour, icons and refresh button.', 'Justify accessibility decisions.'],
    evidence: ['Labelled wireframe', 'UI design justification', 'Accessibility notes'],
    example: 'I will use a high-contrast alert banner so the warning is clear even when the user quickly checks the screen.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 5 EVIDENCE\n\nTopic: Wireframes and Interface Design\n\n1. Upload or paste my wireframe screenshot here.\nEvidence:\n\n2. Label the main parts of my interface.\n- Title/location area:\n- Weather display:\n- Alert message area:\n- Refresh button:\n- Colour/icon feedback:\n\n3. Explain how my interface helps the user.\nMy answer:\n\n4. Explain one accessibility feature I included.\nMy answer:\n\n5. What feedback will the user see when an alert is active?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 6,
    title: 'SwiftUI Basic Build',
    focus: 'Create the initial Swift Playground interface',
    learningGoal: 'Build a basic interface with placeholders for weather data.',
    tasks: ['Create Swift Playground project.', 'Add Text, Button and layout elements.', 'Customise title and placeholder weather fields.'],
    evidence: ['Screenshot of basic UI', 'Annotated code snippet', 'Problem-solving notes'],
    example: 'My first prototype shows the app title, current temperature placeholder, condition placeholder and a Refresh Data button.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 6 EVIDENCE\n\nTopic: SwiftUI Basic Build\n\n1. Upload or paste a screenshot of my basic SwiftUI interface.\nEvidence:\n\n2. Paste a small code snippet showing one Text view and one Button.\nCode:\n\n3. Annotate the code in my own words.\nMy answer:\n\n4. What worked well this week?\nMy answer:\n\n5. What problem did I need to fix?\nMy answer:\n\n6. What is my next coding step?\nMy answer:\n\n7. Source/help declaration:\n`
  },
  {
    week: 7,
    title: 'Fetching API Data',
    focus: 'URLSession, decoding JSON and debugging',
    learningGoal: 'Connect the app to the weather API and retrieve data.',
    tasks: ['Use URLSession to fetch data.', 'Decode JSON into Swift structures.', 'Print or display weather values.'],
    evidence: ['API code snippet', 'Console/app screenshot', 'Annotation of fetch process'],
    example: 'URLSession sends the request, JSONDecoder converts the response into Swift data, and DispatchQueue.main updates the interface.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 7 EVIDENCE\n\nTopic: Fetching API Data\n\n1. Paste my API fetch code snippet.\nCode:\n\n2. Annotate what each important line does.\nMy answer:\n\n3. Upload or paste evidence that data was retrieved.\nEvidence:\n\n4. What JSON fields did my app successfully read?\n-\n-\n-\n\n5. What error or bug did I encounter, and how did I try to fix it?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 8,
    title: 'Displaying Data and IA1 Submission',
    focus: 'Bind weather data to the UI and prepare final IA1 evidence',
    learningGoal: 'Display weather data clearly and complete the IA1 explanation and testing evidence.',
    tasks: ['Show temperature and condition in UI.', 'Add refresh button.', 'Complete peer testing and 100–150 word explanation.'],
    evidence: ['Final MVP screenshot', 'Peer feedback', 'Short explanation', 'Final checklist'],
    example: 'My app displays current temperature and condition, and it refreshes the API data when the user taps the button.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 1 WEEK 8 EVIDENCE\n\nTopic: Displaying Data and IA1 Submission\n\n1. Upload or paste screenshot of my final IA1 MVP app.\nEvidence:\n\n2. Explain how my app displays weather data.\nMy answer:\n\n3. Explain how the Refresh button works.\nMy answer:\n\n4. Peer testing feedback\nTester name:\nWhat worked well:\nSuggestion for improvement:\n\n5. 100–150 word IA1 explanation\nMy answer:\n\n6. Final IA1 checklist\n[ ] API/weather data used\n[ ] Current conditions displayed\n[ ] Single alert trigger included\n[ ] Peer testing completed\n[ ] Sources declared\n\n7. Source/help declaration:\n`
  }
];

const semesterTwo = [
  {
    week: 1,
    title: 'Alert Logic and Algorithms',
    focus: 'If-else decisions and pseudocode',
    learningGoal: 'Design and explain alert logic using pseudocode and Swift decision structures.',
    tasks: ['Create pseudocode.', 'Implement if-else logic.', 'Test normal and alert states.'],
    evidence: ['Pseudocode', 'Normal state screenshot', 'Alert state screenshot'],
    example: 'IF temperature is greater than 35 THEN display Heatwave Warning ELSE display Conditions Normal.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 1 EVIDENCE\n\nTopic: Alert Logic and Algorithms\n\n1. What alert condition am I using?\nMy answer:\n\n2. Pseudocode for my alert logic\nSTART\n\n\nEND\n\n3. Explain how my if-else logic works.\nMy answer:\n\n4. Upload or paste normal state screenshot.\nEvidence:\n\n5. Upload or paste alert state screenshot.\nEvidence:\n\n6. What did I refine after testing?\nMy answer:\n\n7. Source/help declaration:\n`
  },
  {
    week: 2,
    title: 'Object-Oriented Programming',
    focus: 'Class-based structure for WeatherAlert, DataManager and UI',
    learningGoal: 'Plan and explain how classes can organise a larger weather alert app.',
    tasks: ['Identify useful classes.', 'Create class diagram.', 'Refactor code into functions/classes where possible.'],
    evidence: ['Class diagram', 'OOP code snippet', 'Explanation of class responsibilities'],
    example: 'A DataManager class retrieves weather data, while a WeatherAlert class checks the data against alert conditions.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 2 EVIDENCE\n\nTopic: Object-Oriented Programming\n\n1. What classes will my app use?\nClass 1:\nPurpose:\n\nClass 2:\nPurpose:\n\nClass 3:\nPurpose:\n\n2. Upload or paste my class diagram.\nEvidence:\n\n3. Paste a class-based code snippet.\nCode:\n\n4. Explain how OOP improves my app structure.\nMy answer:\n\n5. What part of my code did I improve or organise this week?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 3,
    title: 'Multiple Event Triggers',
    focus: 'Temperature, wind and rain alerts',
    learningGoal: 'Develop multiple alert triggers that respond to different weather conditions.',
    tasks: ['Add wind alert.', 'Add rain alert.', 'Test each trigger separately.'],
    evidence: ['Trigger table', 'Code snippet', 'Test screenshots'],
    example: 'The app can trigger a heat warning, strong wind warning or heavy rain warning depending on the weather data received.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 3 EVIDENCE\n\nTopic: Multiple Event Triggers\n\n1. List my alert triggers.\nTemperature trigger:\nWind trigger:\nRain trigger:\nOther trigger:\n\n2. Paste code showing multiple conditions.\nCode:\n\n3. Explain how the app decides which alert to show.\nMy answer:\n\n4. Testing evidence\nTest 1 condition:\nResult:\n\nTest 2 condition:\nResult:\n\nTest 3 condition:\nResult:\n\n5. What refinement did I make after testing?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 4,
    title: 'Privacy and Security',
    focus: 'API keys, personal data, privacy-aware design and ethical data handling',
    learningGoal: 'Explain privacy and security decisions used in the app.',
    tasks: ['Identify risks.', 'Explain secure API key handling.', 'Minimise personal data collection.'],
    evidence: ['Security risk table', 'Privacy statement', 'API key handling explanation'],
    example: 'The app should not collect unnecessary personal information, and the API key should not be shared publicly in screenshots or repositories.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 4 EVIDENCE\n\nTopic: Privacy and Security\n\n1. What data does my app use?\nMy answer:\n\n2. Does my app need personal data? Explain.\nMy answer:\n\n3. How should an API key be handled securely?\nMy answer:\n\n4. Privacy/security risk table\nRisk 1:\nPossible impact:\nHow I reduce the risk:\n\nRisk 2:\nPossible impact:\nHow I reduce the risk:\n\n5. Write a short privacy-aware design statement.\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 5,
    title: 'Agile Sprint 1',
    focus: 'Task board, sprint goals and project tracking',
    learningGoal: 'Use Agile methods to plan and monitor app development.',
    tasks: ['Create task board.', 'Set sprint goal.', 'Record stand-up reflection.'],
    evidence: ['Task board screenshot', 'Sprint goal', 'Stand-up notes'],
    example: 'Sprint goal: Add multiple alert triggers and test that each trigger shows the correct message.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 5 EVIDENCE\n\nTopic: Agile Sprint 1\n\n1. My sprint goal is:\n\n2. Task board evidence\nTo Do:\n-\n-\n\nDoing:\n-\n\nDone:\n-\n\n3. Upload or paste task board screenshot.\nEvidence:\n\n4. Sprint reflection\nWhat did I complete?\n\nWhat is still in progress?\n\nWhat blocker or problem do I have?\n\n5. How does this sprint help my user?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 6,
    title: 'Agile Sprint 2 and Refinement',
    focus: 'Bug tracking, refinement and UI polish',
    learningGoal: 'Use feedback and testing evidence to refine the app.',
    tasks: ['Record bugs.', 'Refine UI.', 'Document changes.'],
    evidence: ['Bug log', 'Before/after screenshots', 'Refinement explanation'],
    example: 'I changed the alert banner colour and wording after feedback that the original message was not obvious enough.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 6 EVIDENCE\n\nTopic: Agile Sprint 2 and Refinement\n\n1. Bug/refinement log\nIssue 1:\nHow I fixed or improved it:\n\nIssue 2:\nHow I fixed or improved it:\n\n2. Upload or paste before screenshot.\nEvidence:\n\n3. Upload or paste after screenshot.\nEvidence:\n\n4. Explain one important refinement I made.\nMy answer:\n\n5. How did feedback or testing influence my change?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 7,
    title: 'Testing and Evaluation',
    focus: 'Peer testing, user feedback and evaluation against criteria',
    learningGoal: 'Evaluate the app using user stories, success criteria and feedback.',
    tasks: ['Conduct peer testing.', 'Record results.', 'Evaluate against criteria.'],
    evidence: ['Testing table', 'Peer feedback', 'Evaluation notes'],
    example: 'The app met the temperature alert criterion because it displayed a clear warning when the test value exceeded 35°C.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 7 EVIDENCE\n\nTopic: Testing and Evaluation\n\n1. Peer tester name:\n\n2. Test table\nTest condition:\nExpected result:\nActual result:\nPass/fail:\nImprovement needed:\n\n3. Feedback received\nWhat worked well:\nWhat could be improved:\n\n4. Evaluate against success criteria\nCriterion 1:\nEvidence:\n\nCriterion 2:\nEvidence:\n\nCriterion 3:\nEvidence:\n\n5. What change will I make before final submission?\nMy answer:\n\n6. Source/help declaration:\n`
  },
  {
    week: 8,
    title: 'Final Reflection and Digital Impacts',
    focus: '400–600 word IA2 reflection and final evidence check',
    learningGoal: 'Justify design decisions and reflect on functionality, usability, security and Agile process.',
    tasks: ['Complete final reflection.', 'Check Agile evidence.', 'Prepare final screenshots/video demo.'],
    evidence: ['Final reflection', 'Agile evidence', 'Security summary', 'Final app demo'],
    example: 'The main strength of my app is that it gives a clear warning using colour, text and icons, which supports quick decision-making during weather risks.',
    scaffold: `YEAR 10 DIGITAL TECHNOLOGIES – SEMESTER 2 WEEK 8 EVIDENCE\n\nTopic: Final Reflection and Digital Impacts\n\n1. Final app evidence\nUpload screenshots or video demo link here:\n\n2. 400–600 word reflection draft\nParagraph 1: What my app does and who it helps\n\nParagraph 2: How my app uses data, OOP and alert triggers\n\nParagraph 3: How my interface supports usability and accessibility\n\nParagraph 4: Privacy/security decisions I made\n\nParagraph 5: How Agile helped me manage the project\n\nParagraph 6: Strengths, limitations and future improvements\n\n3. Digital impacts\nPositive impact:\nPossible limitation or risk:\n\n4. Final checklist\n[ ] Functional class-based app\n[ ] Multiple triggers\n[ ] Agile evidence\n[ ] Privacy/security documentation\n[ ] Testing evidence\n[ ] Reflection complete\n[ ] Sources declared\n\n5. Source/help declaration:\n`
  }
];

const allWeeks = [...semesterOne.map(w => ({ ...w, semester: 1 })), ...semesterTwo.map(w => ({ ...w, semester: 2 }))];

const TEACHER_PIN = '1234';

const tlapMap = [
  { sem: 1, week: 1, program: 'Weather emergencies, stakeholders and app purpose', assessment: 'IA1 MVP planning', evidence: 'Problem statement, stakeholders, one MVP alert condition', checkpoint: 'Student has chosen a weather risk and target user.' },
  { sem: 1, week: 2, program: 'User stories and success criteria', assessment: 'IA1 prescribed and self-determined criteria', evidence: 'Three user stories, prescribed criteria, self-determined criteria', checkpoint: 'User needs are clear and measurable.' },
  { sem: 1, week: 3, program: 'APIs, JSON and client-server relationship', assessment: 'IA1 API/data evidence', evidence: 'API endpoint, JSON field table, client-server explanation', checkpoint: 'Student can identify required weather data fields.' },
  { sem: 1, week: 4, program: 'Data Flow Diagrams', assessment: 'IA1 system modelling', evidence: 'Level 0 DFD, Level 1 DFD and explanation', checkpoint: 'DFDs show user, app, API, processes and data movement.' },
  { sem: 1, week: 5, program: 'Wireframes and interface design', assessment: 'IA1 UI design', evidence: 'Labelled wireframe and UI justification', checkpoint: 'Interface supports clear alert visibility.' },
  { sem: 1, week: 6, program: 'SwiftUI basic build', assessment: 'IA1 prototype', evidence: 'Basic UI screenshot, code snippet and annotation', checkpoint: 'App shell exists with placeholders.' },
  { sem: 1, week: 7, program: 'Fetching API data', assessment: 'IA1 implementation evidence', evidence: 'URLSession/API code, screenshot and annotation', checkpoint: 'Weather data can be retrieved or simulated.' },
  { sem: 1, week: 8, program: 'Displaying data and IA1 submission', assessment: 'IA1 final MVP', evidence: 'Final screenshot, peer testing and 100–150 word explanation', checkpoint: 'MVP submitted with source declarations.' },
  { sem: 2, week: 1, program: 'Alert logic and algorithms', assessment: 'IA2 alert logic', evidence: 'Pseudocode, normal state and alert state screenshots', checkpoint: 'Single alert condition works and is explained.' },
  { sem: 2, week: 2, program: 'Object-Oriented Programming', assessment: 'IA2 OOP structure', evidence: 'Class diagram, class-based code and explanation', checkpoint: 'WeatherAlert/DataManager/UI responsibilities are documented.' },
  { sem: 2, week: 3, program: 'Multiple event triggers', assessment: 'IA2 functionality expansion', evidence: 'Temperature, wind and rain trigger table, code and tests', checkpoint: 'Multiple triggers can be tested separately.' },
  { sem: 2, week: 4, program: 'Privacy and security', assessment: 'IA2 secure and ethical design', evidence: 'Risk table, API key handling and privacy statement', checkpoint: 'Student explains data minimisation and secure API use.' },
  { sem: 2, week: 5, program: 'Agile Sprint 1', assessment: 'IA2 project management', evidence: 'Task board, sprint goal and stand-up notes', checkpoint: 'Sprint evidence shows planning and progress.' },
  { sem: 2, week: 6, program: 'Agile Sprint 2 and refinement', assessment: 'IA2 refinement', evidence: 'Bug log, before/after screenshots and refinement explanation', checkpoint: 'Testing or feedback has caused a documented improvement.' },
  { sem: 2, week: 7, program: 'Testing and evaluation', assessment: 'IA2 evaluation evidence', evidence: 'Peer testing table, feedback and criteria evaluation', checkpoint: 'Evaluation links evidence to success criteria.' },
  { sem: 2, week: 8, program: 'Final reflection and digital impacts', assessment: 'IA2 final submission', evidence: '400–600 word reflection, Agile log, privacy/security summary and demo', checkpoint: 'Final product and reflection are ready for Compass.' }
];

const answerKey = [
  { sem: 1, week: 1, title: 'Understanding the Problem', answers: ['A suitable response identifies a specific weather risk such as heatwave, flooding, storm or high wind.', 'Stakeholders may include parents, school staff, outdoor workers, sports coordinators, elderly people, rural property owners or event organisers.', 'The app purpose should link weather data to a clear warning that helps a user make a safer decision.'] },
  { sem: 1, week: 2, title: 'User Stories and Success Criteria', answers: ['Correct user story format: As a [role], I want [goal], so that [benefit].', 'Prescribed criteria: uses weather/API data, displays current conditions, triggers one alert, includes peer testing and short explanation.', 'Strong self-determined criteria are measurable, for example: alert message appears within two seconds, uses high-contrast colours, has a refresh button, or clearly labels temperature and condition.'] },
  { sem: 1, week: 3, title: 'APIs and JSON Data', answers: ['API: a way for one program/app to request data or services from another system.', 'JSON: structured text data using key-value pairs, often returned by web APIs.', 'Client-server: the app/client sends a request to the weather API/server; the server returns JSON data; the app decodes and uses selected fields.'] },
  { sem: 1, week: 4, title: 'Data Flow Diagrams', answers: ['Level 0 should show User, Weather Alert App and OpenWeatherMap/API with request and response data flows.', 'Level 1 should break the app into processes such as request data, decode JSON, check alert condition and display result.', 'A good explanation names inputs, processes, data stores if used, and outputs.'] },
  { sem: 1, week: 5, title: 'Wireframes and Interface Design', answers: ['A suitable wireframe includes location/title, temperature, condition, alert banner/message and refresh control.', 'Accessibility answers may mention contrast, readable text, clear icons, simple layout and avoiding colour-only meaning.', 'UI choices should be justified against user needs, not just appearance.'] },
  { sem: 1, week: 6, title: 'SwiftUI Basic Build', answers: ['Evidence should show a functioning screen with Text views, Button and placeholders.', 'Annotations should explain what a Text view, Button action, state variable or layout container does.', 'Problems may include syntax errors, preview not loading, missing braces or incorrect variable names.'] },
  { sem: 1, week: 7, title: 'Fetching API Data', answers: ['URLSession sends the web request; JSONDecoder converts returned JSON into Swift structures; DispatchQueue.main updates the interface.', 'Valid JSON fields include main.temp, weather[0].main/description, wind.speed and rain fields where available.', 'Students may use simulated data if live API access is unavailable, but must explain this.'] },
  { sem: 1, week: 8, title: 'Displaying Data and IA1 Submission', answers: ['Final MVP should display current conditions and a single clear alert.', 'Peer testing should include a tester, feedback and at least one suggested improvement.', 'The 100–150 word explanation should describe API/data use, interface and alert logic.'] },
  { sem: 2, week: 1, title: 'Alert Logic and Algorithms', answers: ['Correct pseudocode uses IF/ELSE logic and a clear threshold such as temperature > 35.', 'Testing should show both normal and alert states.', 'Refinement should describe what changed after testing.'] },
  { sem: 2, week: 2, title: 'Object-Oriented Programming', answers: ['Useful classes include WeatherAlert, DataManager, WeatherData and UserInterface/ViewModel.', 'Class responsibilities should be separated: data retrieval, alert checking and UI display should not all be described as one vague process.', 'OOP improves organisation, reuse, debugging and maintenance.'] },
  { sem: 2, week: 3, title: 'Multiple Event Triggers', answers: ['Suitable triggers include heat, high wind, heavy rain, storm condition or UV if data is available.', 'Each trigger should have condition, threshold, expected alert and test result.', 'Good explanations describe how the app chooses between alerts.'] },
  { sem: 2, week: 4, title: 'Privacy and Security', answers: ['The app should avoid collecting unnecessary personal data.', 'API keys should not be exposed publicly in screenshots, repositories or shared files.', 'Risk responses should include impact and mitigation, such as data minimisation, secure key storage and clear user consent.'] },
  { sem: 2, week: 5, title: 'Agile Sprint 1', answers: ['A good sprint goal is specific and achievable within the week.', 'Task board should include To Do, Doing and Done items.', 'Stand-up/reflection should identify progress, blockers and next step.'] },
  { sem: 2, week: 6, title: 'Agile Sprint 2 and Refinement', answers: ['Bug logs should identify issue, cause or symptom, attempted fix and result.', 'Before/after evidence should show a visible or functional improvement.', 'Refinement must be linked to feedback, testing or success criteria.'] },
  { sem: 2, week: 7, title: 'Testing and Evaluation', answers: ['A complete test table has test condition, expected result, actual result, pass/fail and improvement.', 'Evaluation must link to success criteria and user stories.', 'Stronger responses justify changes with evidence.'] },
  { sem: 2, week: 8, title: 'Final Reflection and Digital Impacts', answers: ['Reflection should cover purpose, data/API, OOP, triggers, UI, privacy/security, Agile process, strengths, limitations and improvements.', 'Digital impacts may include community safety and timely decisions, balanced with equity, connectivity and privacy risks.', 'Final evidence should include app demo/screenshots, Agile log, testing and source declarations.'] }
];


const weeklyResources = {
  '1-1': {
    video: { title: 'Weather emergencies and why alert systems matter', url: 'https://www.youtube.com/results?search_query=Bureau+of+Meteorology+Australia+weather+warnings+explained', note: 'Use a short BOM/weather-warning explainer to introduce the real-world problem.' },
    learn: [
      { title: 'Bureau of Meteorology – Warnings', url: 'https://www.bom.gov.au/weather-and-climate/warnings-and-alerts', type: 'Core' },
      { title: 'OpenWeather – Current Weather Data', url: 'https://openweathermap.org/current', type: 'Support' }
    ],
    tryIt: 'Choose one weather hazard. Identify who is affected, what decision they need to make, and what information an alert app should provide.'
  },
  '1-2': {
    video: { title: 'User stories and success criteria', url: 'https://www.youtube.com/results?search_query=user+stories+acceptance+criteria+agile+students', note: 'Choose a concise introduction to the “As a… I want… so that…” format.' },
    learn: [
      { title: 'Atlassian – User stories', url: 'https://www.atlassian.com/agile/project-management/user-stories', type: 'Core' },
      { title: 'Interaction Design Foundation – Usability', url: 'https://www.interaction-design.org/literature/topics/usability', type: 'Support' }
    ],
    tryIt: 'Rewrite one vague app idea as a user story, then create one measurable success criterion that could be tested.'
  },
  '1-3': {
    video: { title: 'APIs, JSON and client-server systems', url: 'https://www.youtube.com/results?search_query=what+is+an+API+JSON+client+server+explained', note: 'Look for an introductory API/client-server video before students inspect JSON.' },
    learn: [
      { title: 'MDN – Introduction to Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction', type: 'Core' },
      { title: 'JSON.org – Introducing JSON', url: 'https://www.json.org/json-en.html', type: 'Core' },
      { title: 'MDN – Client-server overview', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview', type: 'Extension' }
    ],
    tryIt: 'Inspect a sample weather JSON response. Locate temperature, condition, wind speed and location fields, then explain which ones your app actually needs.'
  },
  '1-4': {
    video: { title: 'Data Flow Diagrams (DFDs)', url: 'https://www.youtube.com/results?search_query=data+flow+diagram+level+0+level+1+tutorial', note: 'Use a beginner DFD video covering external entities, processes, data stores and data flows.' },
    learn: [
      { title: 'Lucidchart – Data Flow Diagram guide', url: 'https://www.lucidchart.com/pages/data-flow-diagram', type: 'Core' },
      { title: 'diagrams.net – Free diagram tool', url: 'https://app.diagrams.net/', type: 'Support' }
    ],
    tryIt: 'On paper first, draw User → App → Weather API → App → User. Then expand the App into request, decode, check alert and display processes.'
  },
  '1-5': {
    video: { title: 'Wireframes, UI and accessibility', url: 'https://www.youtube.com/results?search_query=wireframing+UI+UX+accessibility+beginner+tutorial', note: 'Choose a simple wireframing video that focuses on layout before visual polish.' },
    learn: [
      { title: 'Apple – Accessibility', url: 'https://developer.apple.com/accessibility/', type: 'Core' },
      { title: 'Nielsen Norman Group – Wireflows/Wireframes', url: 'https://www.nngroup.com/articles/wireflows/', type: 'Support' }
    ],
    tryIt: 'Sketch two interface options. Compare which makes the alert easiest to notice and which is easiest to operate quickly.'
  },
  '1-6': {
    video: { title: 'SwiftUI essentials', url: 'https://developer.apple.com/swiftui/get-started/', note: 'Apple’s SwiftUI Get Started page includes official learning video/tutorial pathways.' },
    learn: [
      { title: 'Swift.org – Build an iOS app with SwiftUI', url: 'https://swift.org/getting-started/swiftui/', type: 'Core' },
      { title: 'Apple – SwiftUI documentation', url: 'https://developer.apple.com/documentation/swiftui', type: 'Support' }
    ],
    tryIt: 'Create a screen containing a title, temperature placeholder, condition placeholder and Refresh button. Change at least one layout property.'
  },
  '1-7': {
    video: { title: 'Fetching and decoding JSON in Swift', url: 'https://www.youtube.com/results?search_query=Swift+URLSession+JSONDecoder+beginner+tutorial', note: 'Use a recent beginner tutorial demonstrating URLSession and Codable/JSONDecoder.' },
    learn: [
      { title: 'Apple – URLSession', url: 'https://developer.apple.com/documentation/foundation/urlsession', type: 'Core' },
      { title: 'Apple – JSONDecoder', url: 'https://developer.apple.com/documentation/foundation/jsondecoder', type: 'Support' },
      { title: 'OpenWeather – Current Weather Data', url: 'https://openweathermap.org/current', type: 'Core' }
    ],
    tryIt: 'Trace the data journey: URL → request → response data → decode → Swift property → interface. Annotate each stage in your own words.'
  },
  '1-8': {
    video: { title: 'Testing a prototype and using peer feedback', url: 'https://www.youtube.com/results?search_query=usability+testing+prototype+peer+feedback+students', note: 'Choose a short usability-testing introduction focused on observable evidence.' },
    learn: [
      { title: 'Nielsen Norman Group – Usability testing 101', url: 'https://www.nngroup.com/articles/usability-testing-101/', type: 'Core' },
      { title: 'Apple – Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', type: 'Extension' }
    ],
    tryIt: 'Give your app to a peer without explaining it. Record what they do, where they hesitate and one improvement you can justify from the evidence.'
  },
  '2-1': {
    video: { title: 'Algorithms, pseudocode and selection', url: 'https://www.youtube.com/results?search_query=pseudocode+if+else+selection+algorithm+tutorial+beginners', note: 'Use a beginner video that links pseudocode decisions to if/else code.' },
    learn: [
      { title: 'Swift Book – Control Flow', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/controlflow/', type: 'Core' },
      { title: 'BBC Bitesize – Algorithms and programming concepts', url: 'https://www.bbc.co.uk/bitesize/subjects/z34k7ty', type: 'Support' }
    ],
    tryIt: 'Write an IF/ELSE rule for one alert threshold. Test it using one value below and one value above the threshold.'
  },
  '2-2': {
    video: { title: 'Object-oriented programming and classes', url: 'https://www.youtube.com/results?search_query=object+oriented+programming+classes+objects+beginner+Swift', note: 'Choose an OOP overview explaining classes, properties, methods and responsibilities.' },
    learn: [
      { title: 'Swift Book – Classes and Structures', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/', type: 'Core' },
      { title: 'Swift.org – The Swift Programming Language', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/', type: 'Support' }
    ],
    tryIt: 'List three responsibilities in your app and decide which class should own each responsibility. Explain why.'
  },
  '2-3': {
    video: { title: 'Multiple conditions and decision logic', url: 'https://www.youtube.com/results?search_query=Swift+multiple+conditions+if+else+logical+operators+tutorial', note: 'Use a tutorial showing AND/OR, else-if chains and testing multiple conditions.' },
    learn: [
      { title: 'Swift Book – Basic Operators', url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/', type: 'Core' },
      { title: 'OpenWeather – Weather condition codes', url: 'https://openweathermap.org/weather-conditions', type: 'Support' }
    ],
    tryIt: 'Create a test table for heat, wind and rain triggers. Include input, expected output and actual output.'
  },
  '2-4': {
    video: { title: 'Cybersecurity, privacy and API key safety', url: 'https://www.youtube.com/results?search_query=API+key+security+privacy+cybersecurity+beginners', note: 'Choose a security explainer that stresses secrets should not be hard-coded or committed publicly.' },
    learn: [
      { title: 'OWASP – REST Security Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html', type: 'Core' },
      { title: 'OWASP – Key Management Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html', type: 'Support' },
      { title: 'OAIC – Australian Privacy Principles', url: 'https://www.oaic.gov.au/privacy/australian-privacy-principles', type: 'Extension' }
    ],
    tryIt: 'Identify one privacy risk and one security risk in a weather app. For each, propose a practical mitigation.'
  },
  '2-5': {
    video: { title: 'Agile, Kanban and sprint planning', url: 'https://www.youtube.com/results?search_query=agile+kanban+sprint+planning+beginner+tutorial', note: 'Use an Agile/Kanban overview before students create sprint goals and task boards.' },
    learn: [
      { title: 'Atlassian – Agile tutorials', url: 'https://www.atlassian.com/agile/tutorials', type: 'Core' },
      { title: 'Atlassian – Kanban tutorial', url: 'https://www.atlassian.com/agile/tutorials/how-to-do-kanban-with-jira', type: 'Support' }
    ],
    tryIt: 'Create a sprint goal, then place at least six tasks into To Do, Doing and Done. Keep each task small enough to complete or review.'
  },
  '2-6': {
    video: { title: 'Debugging and iterative refinement', url: 'https://www.youtube.com/results?search_query=debugging+software+testing+iterative+development+beginners', note: 'Choose a debugging video that models reproduce → isolate → change → retest.' },
    learn: [
      { title: 'Apple – Debugging', url: 'https://developer.apple.com/documentation/xcode/debugging', type: 'Core' },
      { title: 'Atlassian – Iterative process', url: 'https://www.atlassian.com/agile/project-management/iterative-process', type: 'Support' }
    ],
    tryIt: 'Choose one bug. Record the symptom, likely cause, attempted fix and retest result. Capture before/after evidence.'
  },
  '2-7': {
    video: { title: 'Software testing and evaluation', url: 'https://www.youtube.com/results?search_query=software+testing+test+cases+expected+actual+results+beginner', note: 'Use a test-case video that distinguishes expected and actual results.' },
    learn: [
      { title: 'Nielsen Norman Group – Usability testing 101', url: 'https://www.nngroup.com/articles/usability-testing-101/', type: 'Core' },
      { title: 'Apple – Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', type: 'Support' }
    ],
    tryIt: 'Write three test cases: normal data, boundary/threshold data and alert data. Record expected result, actual result and pass/fail.'
  },
  '2-8': {
    video: { title: 'Evaluating a digital solution and reflecting on impacts', url: 'https://www.youtube.com/results?search_query=evaluating+digital+solution+reflection+strengths+limitations+improvements', note: 'Choose a reflection/evaluation explainer that uses evidence rather than unsupported opinions.' },
    learn: [
      { title: 'OAIC – Privacy fundamentals', url: 'https://www.oaic.gov.au/privacy/your-privacy-rights', type: 'Core' },
      { title: 'Australian Digital Inclusion Index', url: 'https://www.digitalinclusionindex.org.au/', type: 'Extension' }
    ],
    tryIt: 'Select one user story and one success criterion. Use testing evidence to judge how well the final app meets each, then identify a justified improvement.'
  }
};

function getResources(week) {
  return weeklyResources[`${week.semester}-${week.week}`];
}


function App() {
  const [selected, setSelected] = useState(allWeeks[0]);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState('student');
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [teacherTab, setTeacherTab] = useState('tlap');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allWeeks;
    return allWeeks.filter(w => `${w.title} ${w.focus} ${w.learningGoal}`.toLowerCase().includes(q));
  }, [query]);

  async function copyScaffold() {
    await navigator.clipboard.writeText(selected.scaffold);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  function unlockTeacher(e) {
    e.preventDefault();
    if (pin === TEACHER_PIN) {
      setTeacherUnlocked(true);
      setPinError('');
      setPin('');
    } else {
      setPinError('Incorrect PIN.');
    }
  }

  function downloadScaffold() {
    const blob = new Blob([selected.scaffold], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Y10_DT_S${selected.semester}_W${selected.week}_Scaffold.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><BookOpen size={28} /></div>
          <div>
            <h1>Year 10 Digital Technologies</h1>
            <p>Weekly Guide + Student Evidence Scaffold Generator</p>
          </div>
        </div>
        <div className="mode-tabs">
          <button className={mode === 'student' ? 'active' : ''} onClick={() => setMode('student')}><BookOpen size={16}/> Student guide</button>
          <button className={mode === 'teacher' ? 'active' : ''} onClick={() => setMode('teacher')}><Lock size={16}/> Teacher section</button>
        </div>
        {mode === 'student' && <div className="search-box"><Search size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search weeks..." /></div>}
        {mode === 'student' && <div className="week-list">
          <h2>Semester 1 – IA1 MVP</h2>
          {filtered.filter(w => w.semester === 1).map(w => <WeekButton key={`s1-${w.week}`} week={w} selected={selected} setSelected={setSelected} />)}
          <h2>Semester 2 – IA2 Final Build</h2>
          {filtered.filter(w => w.semester === 2).map(w => <WeekButton key={`s2-${w.week}`} week={w} selected={selected} setSelected={setSelected} />)}
        </div>}
      </aside>

      <main className="content">
        {mode === 'teacher' ? (
          teacherUnlocked ? <TeacherSection teacherTab={teacherTab} setTeacherTab={setTeacherTab} lock={() => setTeacherUnlocked(false)} /> : <TeacherPinForm pin={pin} setPin={setPin} pinError={pinError} unlockTeacher={unlockTeacher} />
        ) : (
        <>
        <section className="hero">
          <div>
            <p className="eyebrow">Semester {selected.semester} · Week {selected.week}</p>
            <h2>{selected.title}</h2>
            <p>{selected.focus}</p>
          </div>
          <div className="hero-card">
            <strong>Student Workflow</strong>
            <span>Read instructions → copy scaffold → paste into Student Evidence App → customise → submit checkpoint evidence.</span>
          </div>
        </section>

        <section className="grid two">
          <Card icon={<BookOpen/>} title="Learning Goal"><p>{selected.learningGoal}</p></Card>
          <Card icon={<FileText/>} title="Example Response"><p>{selected.example}</p></Card>
        </section>

        <section className="grid three">
          <Card icon={<Check/>} title="Student Tasks"><ul>{selected.tasks.map((t,i)=><li key={i}>{t}</li>)}</ul></Card>
          <Card icon={<Clipboard/>} title="Evidence Checklist"><ul>{selected.evidence.map((t,i)=><li key={i}>{t}</li>)}</ul></Card>
          <Card icon={selected.semester === 1 ? <Code2/> : <KanbanSquare/>} title="Teacher Note"><p>{selected.semester === 1 ? 'Focus on progressive IA1 evidence: user needs, API data, DFDs, UI design, MVP build and short explanation.' : 'Focus on IA2 evidence: OOP, multiple triggers, Agile tracking, privacy/security, testing and 400–600 word reflection.'}</p></Card>
        </section>

        <LearningResources week={selected} />

        <section className="scaffold-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Copy-ready evidence scaffold</p>
              <h3>Paste this into the Student Evidence App</h3>
            </div>
            <div className="actions">
              <button onClick={copyScaffold}>{copied ? <Check size={18}/> : <Clipboard size={18}/>} {copied ? 'Copied' : 'Copy scaffold'}</button>
              <button className="secondary" onClick={downloadScaffold}><Download size={18}/> Download .txt</button>
            </div>
          </div>
          <pre>{selected.scaffold}</pre>
        </section>

        <section className="teacher-guide">
          <h3>Teacher Guide</h3>
          <div className="teacher-grid">
            <div><ShieldCheck/><strong>Authentication</strong><p>Students complete weekly evidence in the Student Evidence App, creating a visible draft trail and clear checkpoints.</p></div>
            <div><Clipboard/><strong>Checkpoint Use</strong><p>Use Week 2, Week 4, Week 6 and Week 8 as progress checks for each semester.</p></div>
            <div><FileText/><strong>Final Export</strong><p>The copied scaffold keeps the final evidence consistent while allowing each student to customise their response.</p></div>
          </div>
        </section>
        </>
        )}
      </main>
    </div>
  );
}



function LearningResources({ week }) {
  const resources = getResources(week);
  if (!resources) return null;
  return (
    <section className="learning-resources">
      <div className="resources-heading">
        <div>
          <p className="eyebrow">Learn before you write</p>
          <h3>Teaching Videos & Training Resources</h3>
          <p>Use these resources to learn and practise the concept. Complete assessed writing in the Student Evidence App.</p>
        </div>
      </div>
      <div className="resource-grid">
        <article className="resource-card featured-resource">
          <div className="resource-icon"><Video size={22}/></div>
          <span className="resource-type core">WATCH</span>
          <h4>{resources.video.title}</h4>
          <p>{resources.video.note}</p>
          <a href={resources.video.url} target="_blank" rel="noreferrer">Open teaching video <ExternalLink size={16}/></a>
        </article>
        {resources.learn.map((resource, i) => (
          <article className="resource-card" key={i}>
            <div className="resource-icon"><BookOpen size={22}/></div>
            <span className={`resource-type ${resource.type.toLowerCase()}`}>{resource.type}</span>
            <h4>{resource.title}</h4>
            <p>{resource.type === 'Core' ? 'Recommended learning resource for this week.' : resource.type === 'Support' ? 'Use this when you need another explanation or example.' : 'Explore this for deeper learning and extension.'}</p>
            <a href={resource.url} target="_blank" rel="noreferrer">Open resource <ExternalLink size={16}/></a>
          </article>
        ))}
      </div>
      <div className="try-it">
        <div className="resource-icon"><GraduationCap size={22}/></div>
        <div><strong>Try It – Guided Practice</strong><p>{resources.tryIt}</p></div>
      </div>
    </section>
  );
}

function TeacherResources() {
  return (
    <div className="teacher-resource-list">
      {allWeeks.map((week) => {
        const r = getResources(week);
        return (
          <article className="teacher-resource-week" key={`${week.semester}-${week.week}`}>
            <div className="teacher-resource-title">
              <div><span>S{week.semester} W{week.week}</span><h3>{week.title}</h3></div>
              <a href={r.video.url} target="_blank" rel="noreferrer"><Video size={16}/> Teaching video</a>
            </div>
            <p className="teacher-resource-note">{r.video.note}</p>
            <div className="teacher-resource-links">
              {r.learn.map((item, i) => <a key={i} href={item.url} target="_blank" rel="noreferrer"><span className={`resource-type ${item.type.toLowerCase()}`}>{item.type}</span>{item.title}<ExternalLink size={14}/></a>)}
            </div>
            <div className="teacher-practice"><strong>Suggested practice:</strong> {r.tryIt}</div>
          </article>
        );
      })}
    </div>
  );
}


function TeacherPinForm({ pin, setPin, pinError, unlockTeacher }) {
  return (
    <section className="pin-panel">
      <div className="pin-card">
        <KeyRound size={42}/>
        <h2>Teacher Section</h2>
        <p>Enter the teacher PIN to view the TLAP mapping and answer key.</p>
        <form onSubmit={unlockTeacher}>
          <input type="password" value={pin} onChange={e => setPin(e.target.value)} placeholder="Teacher PIN" autoFocus />
          <button type="submit"><Unlock size={18}/> Unlock</button>
        </form>
        {pinError && <p className="pin-error">{pinError}</p>}
      </div>
    </section>
  );
}

function TeacherSection({ teacherTab, setTeacherTab, lock }) {
  return (
    <section className="teacher-secure">
      <div className="secure-header">
        <div>
          <p className="eyebrow">Protected teacher area</p>
          <h2>Year 10 Digital Technologies Teacher Section</h2>
          <p>TLAP mapping, suggested answer guide and curated teaching resources for the Weather Emergency Alert App unit.</p>
        </div>
        <button className="lock-button" onClick={lock}><Lock size={18}/> Lock</button>
      </div>

      <div className="teacher-tabs">
        <button className={teacherTab === 'tlap' ? 'active' : ''} onClick={() => setTeacherTab('tlap')}><Table2 size={18}/> TLAP Map</button>
        <button className={teacherTab === 'answers' ? 'active' : ''} onClick={() => setTeacherTab('answers')}><Check size={18}/> Answer Key</button>
        <button className={teacherTab === 'resources' ? 'active' : ''} onClick={() => setTeacherTab('resources')}><GraduationCap size={18}/> Resources</button>
      </div>

      {teacherTab === 'tlap' ? <TLAPTable /> : teacherTab === 'answers' ? <AnswerKey /> : <TeacherResources />}
    </section>
  );
}

function TLAPTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Semester</th><th>Week</th><th>Weekly Program</th><th>Assessment Link</th><th>Student Evidence</th><th>Teacher Checkpoint</th></tr></thead>
        <tbody>{tlapMap.map((r, i) => <tr key={i}><td>S{r.sem}</td><td>W{r.week}</td><td>{r.program}</td><td>{r.assessment}</td><td>{r.evidence}</td><td>{r.checkpoint}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function AnswerKey() {
  return (
    <div className="answer-list">
      {answerKey.map((r, i) => (
        <article className="answer-card" key={i}>
          <h3>S{r.sem} W{r.week}: {r.title}</h3>
          <ul>{r.answers.map((a, j) => <li key={j}>{a}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}

function WeekButton({ week, selected, setSelected }) {
  const active = selected.semester === week.semester && selected.week === week.week;
  return <button className={`week-button ${active ? 'active' : ''}`} onClick={() => setSelected(week)}><span>S{week.semester} W{week.week}</span><strong>{week.title}</strong></button>;
}

function Card({ icon, title, children }) {
  return <article className="card"><div className="card-title">{React.cloneElement(icon, { size: 20 })}<h3>{title}</h3></div>{children}</article>;
}

createRoot(document.getElementById('root')).render(<App />);
