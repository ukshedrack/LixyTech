# LixyTech
Simple JavaScript Web Application (To launch the website, please follow the link https://ukshedrack.github.io/LixyTech/)

This is a web application that displays multiplication of prime numbers. 
At the beginning is an instruction with an input tag and button tag.
To generate any number of primes, type it in the input field and then click on the "Enter" button. 
There you have your multiplication table. 

#Thought Proccess.
1. I needed an array of prime numbers. 
2. Since I don't want to hard-code, I need a way to get the user's input i.e. how many primes does s/he want.
3. I was constantly using the console.log for testing so that I can detect errors and ensure that the project is working fine.
4. As you can see from the HTML, I only have within the table tag, the thead and tbody tag. 
   All table rows and columns were dynamically added using JavaScript found in 'script.js'. 
   This is necessary so that I don't hard-code anything and my table can be displayed based on the user's input. 
5. I used the 'onblur' event so that when the user leaves the input field, I can register the inputed value
   and also call the primeNumbers function which gives us the array we need.
6. Finally, I needed to register a click even on the button and the function within it is what produced the table we have.
