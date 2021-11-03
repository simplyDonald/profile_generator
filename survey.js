const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable: `, (name) => {
  rl.question(`What's an activity you like doing?: `, (activity)=>{
    rl.question(`What do you listen to while doing that?: `, (music)=>{
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)?: `, (favMealOfDay)=>{
        rl.question(`What's your favourite thing to eat for that meal?; `, (favMeal)=>{
          rl.question(`Which sport is your absolute favourite?: `, (sport)=>{
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!: `, (superPower)=>{
              console.log(`\n\n\nThank you for the survey\nHi everyone my name is ${name}, my favorite activity is ${activity} and i enjoy listening to ${music} while doing that.\nMy favorite meal of the day is ${favMealOfDay}, for that i like to have ${favMeal}.\nMy absolute favourite sport is ${sport} and my biggest superpower is ${superPower}, it sounds weird but it's true!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
