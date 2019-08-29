# Anime Sage
Home project using ReactJS  

Requirement Stack list:  
* Webpack;  
* ReactJS;  
* Lint.  

Description:  
Project with allow users to determine who is the King of the Hill in the wonderful world of Anime by answering the questions from which title currently displayed character is from.  
Determination will be measured by the number of correctly answered questions. The number itself will be stored as a const in properties.  
After the question series the score screen should be presented with following:  
1. Score of teh knowledge from 0 to 10. Algoritm is = round((correct answers / total questions) * 10);  
2. Motivation phrase and screen (5 of them), which is depends from the knowledge. e.g: "baka/random guy/knows about anime from friends/man of culture (as well)/otaku-sama";  
3. "share" button, logic to be discussed;  
4. "try again" button, which will reset the session;  

Details:    
* При заходе на URL будет сразу открываться новая сессия опроса;  
* There will be 4 options to answer from;  
* It should be SPA;  
* Name of the character is optional and should be displayed by  (константа);  
* In case correct answer is selected - chosen option is marked with green color;  
* In case incorrect answer is selected - chosen option is marked with red color, correct answer is marked with green color
* After the option is selected, the "next question" button will appear, which will lead to the next question;  
* Result screen should also contain short info about database: how much characters are used from how much titles.  
