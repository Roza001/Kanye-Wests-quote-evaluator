# Kanye West's Quote Evaluator
![](https://img.shields.io/badge/Editor-Visual_Studio_Code-informational?style=flat&logo=Visual-Studio-Code&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=CSS3&logoColor=white&color=2bbc8a)

## Demo
Here is a live demo : https://roza001.github.io/Kanye-Wests-quote-evaluator/

## Web Page
  Kanye West's Quote Evaluator web app was created as part of an interview process.
  
  User may enter a number between 5 and 20 and this many unique quotes will be pulled from an open REST api available online at https://kanye.rest/. 
  These quotes are shown to the user.
  
  Next, all collected quotes through another public open REST API: https://sentim-api.herokuapp.com/ The "Sentim" API analyses provided text for 
  sentiment (positive / neutral / negative with the
polarity aspect (which is between -1 and 1)). Counted are all positive (polarity > 0), negative (polarity < 0) and neutral (polarity = 0) Kanye’s 
quotes from the sample obtained from the first API. The application finds the most extreme quote from sample (the closest to negative or positive 1) 
and displays it to the user along with the above counts.


