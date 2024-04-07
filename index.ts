/// Task # 1 ///
// Q1: Print a "Hello World"//

console.log("Hello World!");

/// Task # 2 ///
// Q2: Personal Message: Store a person’s name in a variable, and print a message to 
//that person. Your message should be simple, such as, “Hello Eric, would you 
//like to learn some Python today?”

let personsName: string = "Eric,";
console.log(`Hello ${personsName} Would you like to learn some Python today?`);

/// Task # 3 ///
// Q3: Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.

let person_Name: string = "Mehwish Naz";
// in lowercase
console.log("lowercase:", person_Name.toLowerCase());
//in upper case
console.log("uppercase:", person_Name.toLocaleUpperCase());
//in title case
console.log("titlecase:", person_Name.replace(/\bw/g,c=>c.toUpperCase()));

///Task # 4 ///
// Q4: Famous Quote: Find a quote from a famous person you admire. Print the
//quote and the name of its author. Your output should look something 
//like the following, including the quotation marks:

let quote: string = " A person who never made a mistake never tried anything new ";
let author: string = "Albert Einstein"
console.log(` ${author } once said, "${quote}`);


/// Task # 5///
// Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famousperson’s name in a variable
//called famous_person. Then compose your message and store it in a new variable called message.
// Print your message.

let qoute: string= "A person who nevere made a mistake never tried anything new "
let famous_person= "Albert Einstein";
let message=`${famous_person} once said, ${qoute}`;
console.log(message);

/// Task # 6 ///

// Q6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
//and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//Print the name once, so the whitespace around the name is displayed. Then print the name after 
//striping the white spaces.

let personName= "\n\t Mehwish Naz \t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);

/// Task # 7 And Task # 8///

//Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3) //
//Your output should simply be four lines with the number 8 appearing once on each line.//

//In Addition Case//
console.log(5+3);
//In Substract Case//
console.log(11-3);
//In Multiplication Case//
console.log(4*2);
//In Division Case//
console.log(16/2);

/// Task # 9 ///
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create 
//message that reveals your favorite number. Print that message.

let favouriteNumber: number = 7;
console.log(`My favourite Number is ${favouriteNumber}`)

/// Task # 10 ///
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.

//Program 1 // File 1
//My name is Mehwish Naz
//Dated: 19/02/1997
console.log('Hellow world simple program');

//Program 2 //File 2
//My name is Mehwish Naz
//Dated: 19/02/2024
console.log(5*2);

/// Task # 11 ///
// Q11:Names: Store the names of a few of your friends in a array called names. Print each person’s 
//name by accessing each element in the list, one at a time. //
let members_names = ['sana', 'ayesha', 'nimra', 'kinza'];
for (let i = 0; i < members_names.length; i++) 
    {console.log(members_names[i]);}

/// Task # 12 ///
// Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
//name, print a message to them. The text of each message should be the same, but each message should
//be personalized with the person’s name.//

let names: string [] =["sana", "ayesha", "munza", "inza", "bisma"];
let massage: string = "Do you like to read some books?"
console.log(names[0] + " "+ massage);
console.log(names[1]+ " " + massage);
console.log(names[2]+ " " + massage);
console.log(names[3]+ " " + massage);
console.log(names[4]+ " " + massage); 

/// Task # 13 ///
// Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about
//these items, such as “I would like to own a Honda motorcycle.”//
let transportation = ["BMW", "Land Cruser V8", "Civic R.S Turbo", "Audi", "Honda City"];
for (let cars of transportation) {
console.log(`I would like to own a ${cars}`);}

///  Task # 14 ///
// Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to 
//invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.

let guest_list: string[] = ["Bisma","Ayesha", "Kiran","Kainat","Neha"]
guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`)
});

/// Task # 15 ///
// Q15: Changing Guest List: 
//You just heard that one of your guests can’t make the dinner, so you need to send
//out a new set of invitations. You’ll have to think of someone else to invite.Sn

let guest_list1: string[] = ["Bisma","Ayesha","Sana","Neha","Kainat"]
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
})
let unavailable = "Ayesha"
console.log(`${unavailable} can't make it to dinner.`)
let new_guest = "Noorulain"
guest_list1[guest_list1.indexOf(unavailable)] = new_guest
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`)
})

/// Task # 16 ///
//Q16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

let guest_List: string[] = ["Nimra", "Ahsan", "Kainat"];
guest_List.forEach(guest_List => {
    console.log(`Dear ${guest_List}, would you like to join me for dinner?`)
})
//a guest who can't make it
let guest11: string= guest_list[1];
console.log(`\nUnfortunately, ${guest11} can't make it to the dinner.\n`);
//Replace the guest who can't make it with a new guest
let newGuest: string = "Ayesha";
guest_List[1] = newGuest;
console.log(guest_List);
// Print second set of dinner invitations
for (let guest of  guest_List) {
    console.log(`Dear ${guest}, \n\twould you like to join me for dinner?\n\t`);}
let newGuest1: string = "Mohsin";
 guest_list.unshift(newGuest1);
let newGuest2: string ="Ayan";
 guest_List.splice(Math.floor(guest_list.length / 2), 0, newGuest2);
let newGuest3: string = "Neha";
guest_List.push(newGuest3);
for (let guest of  guest_List) {
    console.log(`Dear ${guest},\n\twould you like to join me for dinner?\n\t`);}

/// Task # 17 ////
//Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program

let guestlist: string[] = ["Arohi", "Kanwal", "Nimra","Ahsan","Hassan"];
guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}, would you like to join me for dinner?`)})
    console.log(" \nSorry, the dinner table can only accommodate two guests.")
//Removing guest
while (guestlist.length > 2) {
    const removedGuest = guestlist.pop();
    if (removedGuest) {
      console.log(`Sorry, ${removedGuest}, you can't be invited to dinne`);
    }
}
//print a message to remain guest
guestlist.forEach((remainingGuest) => {
    console.log(`${remainingGuest}, you're still invited to dinner.`)
  });
guestlist.slice(0, 2);
console.log(guestlist)

///Task # 18 ///
// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
//has changed.

let fvtPlace: string[] = ["Kashmir", "switzerland", "Ukraine", "Austria"];
//In orignal order
console.log("Orignal order:", fvtPlace)
//In alphabatical order
let order_place: string[] = [...fvtPlace].sort();
console.log("Alphabatic order:", order_place)
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)
// in reverse alphabetical order
let rev_ord: string[] = [...fvtPlace].sort().reverse()
console.log("Reverse alphabetical order:", rev_ord)
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)
fvtPlace.reverse()
console.log("Reversed Order:", fvtPlace)
console.log([...fvtPlace].sort())
console.log([...fvtPlace].sort().reverse())

/// Task # 19 //

//Q19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
let guest_dinner: string[] = ["Kinza", "Rafia", "Kashaf", "Tuba","Fariha"]
console.log(`I invited ${guest_dinner.length} people to dinner.`)

////Task # 20 ///

//Q20: Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates 
//a list containing these items.
   ////Countries///
let countries: string[] = ["Switzerland", "Japan", "London", "Norway","Dubai","Turkey"]
console.log(`I would like to visit: ${countries}` )
                                        ///Mountains///
let mountains: string[] = ["K2", "Himalaya", "Hindu Kash", "Salt Range"]
console.log(`I would like to See this: ${mountains}` )
                                        ///Cities///
let cities: string[] = ["Karachi", "Lahore", "Islamabad", "Sawat","kagan"]
console.log(`I would like go for vacations: ${cities}` )
                                         ///Languages///
let languages: string[] = ["English", "Arabic", "Chinese", "Hindi"]
console.log(`I would like to Speak: ${languages}` )

/// Task # 21 ///
// Q21:They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

let car: {model: string; Company: string; yearofimoprt: number} = {
    model: "Ghq365",
    Company: "Honda",
    yearofimoprt: 2022
}
console.log(`Car information: ${car.model} by ${car.Company} import in ${car.yearofimoprt}`)

//// Task # 22 ////

//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet,
//try to make one happen. Change an index in one of your programs to produce an index error. 
//Make sure you correct the error before closing the program.

let months: string[] = ["January", "February", "March", "April","May","June",
"July","August","September","October","November","December"]
console.log(months[12]) //Intentional Error
console.log(months[11]) //Correcting the error

/// Task # 23 ///

//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing 
//each test and your prediction for the results of each test.
// Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')

let facultyStudent= "Clear the Test"
console.log("If Faculty Student clear the test I predict it is true")
console.log(facultyStudent === "Clear the Test")
console.log("If Faculty Student clear the test I presdict it is false");
console.log(facultyStudent !== "Clear the Test")

/// Task # 24 ///
//Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let carr: string = 'subaru';
let numberA: number = 15;
let numberB: number = 10;
let fruits: string[] = ['apple', 'orange', 'banana'];

// Tests for equality and inequality with strings
console.log("Test 1: Is car equal to 'subaru'? I predict True.")
console.log(carr === 'subaru')

console.log("Test 2: Is car equal to 'honda'? I predict False.")
console.log(carr === 'honda')

// Tests using the lower case function
console.log("Test 3: Is car in lowercase equal to 'subaru'? I predict true.");
console.log(carr.toLowerCase() === 'subaru');

console.log("Test 4: Is car in lowercase equal to 'SUBARU'? I predict false.");
console.log(carr.toLowerCase() === 'SUBARU');

// Numerical tests
console.log("Test 5: Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);

console.log("Test 6: Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);

// Tests using "and" and "or" operators
console.log("Test 7: Is car equal to 'subaru' and numberA greater than 5? I predict True.");
console.log(carr === 'subaru' && numberA > 5);

console.log("Test 8: Is car equal to 'subaru' or numberB greater than 10? I predict False.");
console.log(carr !== 'subaru' || numberB > 10);

// Test whether an item is in an array
console.log("Test 9: Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Test 10: Is 'grape' is in the fruits array? I predict False.");
console.log(fruits.includes('grape'));

///Task # 25 ///
//Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
// and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the 
//player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)

let alien_color: string = "green";
console.log(`The alien has a color: ${alien_color}`);
// Check if the alien's color is green
if (alien_color === "green"){
  console.log("Player just earned 5 points!");
}
// Check if the alien's color is not green
if (alien_color !== "green") {
    console.log("Player just earned 5 points!");
  }
                    
/// Task # 26 ///
//Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

//version with if block
let aliencolor: string = 'green';

// If-else chain to determine points based on alien's color
if (aliencolor === 'green') {
  console.log("Player just earned 5 points for shooting the green alien!");
} else {
  console.log("Player just earned 10 points!");
}

//version with else block
if (aliencolor !== 'green') {
  console.log("Player just earned 5 points for shooting the green alien!");
} else {
  console.log("Player just earned 10 points!");
}

/// Task # 27 ///  
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


//for a green alien
let alien_Color: string = "green"
if (alien_Color === "green") {
  console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_Color === "yellow") {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_Color === "red") {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Unknown alien color - no points awarded.");
}

// for a yellow alien
let alien_Color2: string = "yellow";
if (alien_Color2 === "green") {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_Color2 === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_Color2 === "red") {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Unknown alien color - no points awarded.");
}

//Version for a red alien
let alien_Color3: string = "red";
if (alien_Color3 === "green") {
    console.log("Player earned 5 points for shooting the green alien!");
} else if (alien_Color3 === "yellow") {
    console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_Color3 === "red") {
    console.log("Player earned 15 points for shooting the red alien!");
} else {
    console.log("Unknown alien color - no points awarded.");
}

/// Task # 28 ///
//Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let age = 18; //// you can let any age which u desir 
// If-else chain to determine the person's stage of life
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}

//// Task # 29 ////
//Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
//that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
          
let favorite_Fruit: string[] = ["Mango", "Apple", "Strawberry", ];

// Checking for specific fruits in the array with If-else statments
//There are five IF-else list 
if (favorite_Fruit.includes('Mango')) {
    console.log("I really like Mango!");
}
if (favorite_Fruit.includes('Apple')) {
    console.log("I really like  Apples!");
}
if (favorite_Fruit.includes('Strawberry')) {
    console.log("I really like Strawberries!");
}
if (favorite_Fruit.includes('Watermalon')) {
    console.log("I really like bananas!");
} else {
    console.log("Watermalons are not in my list of favorite fruits.");
}
if (favorite_Fruit.includes('grape')) {
    console.log("I really like grapes!");
  } else {
    console.log("Grapes are not in my list of favorite fruits.");
}

/// Task # 30 ///
//Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they
//log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let userNames: string[] = ["Admin", "Sana", "Ayesha", "Tuba", "Neha","Kainat",]
userNames.forEach(userNames => {
    if(userNames === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again.`)
    }
});

/// Task # 31 ///
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 //• If the list is empty, print the message We need to find some users!
 //• Remove all of the usernames from your array, and make sure the correct message is printed.
              
 let usernames: string[] = []; // Empty array

// Check if the list of users is not empty
if (usernames.length > 0) {
  // Loop through the array and print greetings
  for (let username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}

/// Task # 32 ///
//Q32: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let current_users: string[] = ['Arsalan', 'Babar', 'daoud', 'Kumail', 'Wajahat'];

let new_users: string[] = ['Arsalan', 'Talha', 'Hamdan', 'Babar', 'Wajahat']; 

for (let new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}

/// Task # 33 ///
//Q33: Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.

let numbers: number[] = [1,2,3,4,5,6,7,8,9];
//Loop through the array
for (let number of numbers) {
    let ordinalEnding: string;
 if (number ===1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = 'nd';
    } else if (number === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }
console.log(`${number}${ordinalEnding}`);}

/// Task # 34 ///
//Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
//in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing 
//just the name of the pizza. For each pizza you should have one line of output containing a 
//simple statement like I like pepperoni pizza

let fvt_pizza: string[] = ["peproni","Cheese", "BBQ Chicken", "Sicilian"]
for (let pizzas of fvt_pizza) {
    console.log(`I like ${pizzas} pizza.`)}
    console.log(`I really love Pizzas`)

/// Task # 35 ///
//Q35: Think of at least three different animals that have a common characteristic. Store the names of these 
//animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a 
//sentence such as Any of these animals would make a great pet!

let pet_animal: string[] = ["Dog", "Cat", "Lion","Horse","Monkey"]
pet_animal.forEach(pet_animal => {
    console.log(`A ${pet_animal} would make a great pet.`)
})
console.log("But I always prefer cats.")

///Task # 36 ///

//Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the 
//size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string) {
    console.log(`The shirt size should be: ${size}, and must be printed with: ${message}`)
}
make_shirt("Small", "<\My Life My Rules\>")
make_shirt("Medium", "<\I am a Codinggirl\>")
make_shirt("Large", "<\I love codimg\>")

/// Task # 37 ///
//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a 
//shirt of any size with a different message.

function make_Shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
console.log(`Shirt Size: ${size}, Message: ${message}`)
}
make_Shirt()
make_Shirt("Medium", "Coding id my Passion")
make_Shirt("Small", "Full Stack Developer")

/// Task # 38 ///
// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//the country a default value. Call your function for three different cities, at least one of which 
//is not in the default country.

function describe_city(city: string = "Karachi", country: string  = "Pakistan"): void {
    console.log(`${city} is in ${country}`)
 }
 describe_city()
 describe_city("Moscow","Russia")
 describe_city("Dehli", "India")

/// Task # 39 ///
//Q39: City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): void {
    console.log(`"${city}", "${country}"`)
  }
    city_country("Islamabad", "Pakistan")
    city_country("Delhi", "India")
    city_country("Kabul", "Afghanistan")

/// Task # 40 ///
//Q40: Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a
//Object containing these two pieces of information. Use the function to make three dictionaries
//representing different albums. Print each return value to show that Objects are storing the 
//album information correctly. Add an optional parameter to make_album() that allows you to store 
//the number of tracks on an album. If the calling line includes a value for the number of tracks,
//add that value to the album’s Object. Make at least one new function call that includes the number
// of tracks on an album.

function make_album(artistName: string, title: string){
    return {artistName, title}
}
  let album_1 = make_album("Atif Aslam","Ao Madiney chalay")
  let album_2 = make_album("NFAK", "Kamli Waly")
  let album_3 = make_album("Amjad Sabri","Bhardo Jholi Meri Ya Muhammad")

  console.log(album_1)
  console.log(album_2)
  console.log(album_3)
//////Number Of Track////
function make_album_2(artistName: string, title: string, noOfTracks: number){
   return {artistName, title, noOfTracks}
}
let album_4 = make_album_2("Atif Aslam","Ao Madiney chalay", 8)
let album_5 = make_album_2("NFAK", "Kamli Waly", 16)
let album_6 = make_album_2("Amjad Sabri","Bhardo Jholi",0)

  console.log(album_4)
  console.log(album_5)
  console.log(album_6)

/// Task # 41 ///
//Q41: Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

let magician_name: string[] = ["Jack Nelson", "Herry Brown", "Peter","Henry"]
function show_magicians(magicin_name: string[]) {
    magician_name.forEach(magician_name => {
        console.log(magician_name)
    })
}
show_magicians(magician_name)


/// Task # 42 ///
//Q42: Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians
//by adding the phrase the Great to each magician’s name. Call show_magicians()
//to see that the list has actually been modified.

let magicians_name: string[] = ["Harry Houdini", "Peter nelson","Azur russel"]
function make_Great() {
    magicians_name.splice(3, 0, "The Great")
    console.log(magicians_name)
}
make_Great() 

/// Task # 43 ///
//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original 
//array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the Great added to each magician’s name.

function make_great(magicians: string[]): string[] {
    // Make a copy of the array
    const greatMagicians = [...magicians];
    
    // Add "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function show_magician(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansOriginal: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians: string[] = make_great([...magiciansOriginal]);

console.log("Original Magicians:");
show_magicians(magiciansOriginal);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

/// Task # 44 ///

//Q44: Sandwiches: Write a function that accepts a array of items a person wants on a
//sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of 
//arguments each time.

function make_sandwich(...item: string[]) {
console.log(`Making a sandwich with: ${item.join( )}.`);   
}
make_sandwich("chicken", "capsicum","cheese")
make_sandwich("deli meat", "lettuce", "tomato")
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado")

           // Task # 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive 
//a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the 
//function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
    manufacture: string
    model: string
    [key: string ]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
return{
    manufacture,
    model,
    ...optional
}
}
const mycar: car = createCar ("Honda", "Corolla", {colour: "Black", year: "2024"})
console.log(mycar)

          






