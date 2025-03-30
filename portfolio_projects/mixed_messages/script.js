//Horoscope Generator//
//Horoscope Signs:
const horoscopeSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

// Horoscopes for each sign:
// const ariesHoroscopes = ['Take bold steps today - your energy is contagious!', 'You are ready for new challenges—go after them!', 'Trust your instincts to lead the way.', 'Exciting opportunities come with a little risk.', 'Your confidence will open doors today.'];
// const taurusHoroscopes = ['Slow down and enjoy the moment today.', 'Focus on what makes you feel secure.', 'Your patience will pay off soon.', 'Invest in your comfort and well-being.', 'Practical decisions bring the best rewards.'];
// const geminiHoroscopes = ['Curiosity leads you to interesting people today.', 'Your words have power—use them wisely.', 'Keep an open mind—it will bring fresh ideas.', 'Stay adaptable, and success will follow.', 'Communication is key—make your voice heard.'];
// const cancerHoroscopes = ['Trust your intuition—it is on point today.', 'Show love to someone who needs it.', 'Home is where your heart feels at peace.', 'Listen to your emotions—they guide you well.', 'Embrace nurturing energy and spread kindness.'];
// const leoHoroscopes = ['Shine brightly today—your charisma is magnetic.', 'Lead with confidence, and others will follow.', 'A creative breakthrough is on the horizon.', 'Take charge—you are in control now.', 'Your energy brings people together.'];
// const virgoHoroscopes = [];
// const libraHoroscopes = [];
// const scorpioHoroscopes = [];
// const sagittariusHoroscopes = [];
// const capricornHoroscopes = [];
// const aquariusHoroscopes = [];
// const piscesHoroscopes = [];

//Actions for each Horoscope:




// Create a object to hold all the messages as nested arrays.
// This object has 3 properties
const rawText = {
    horoscopeSigns : ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    horoscopes : ['Take bold steps today - your energy is contagious!', 'You are ready for new challenges—go after them!', 'Trust your instincts to lead the way.', 'Exciting opportunities come with a little risk.', 'Your confidence will open doors today.', 'Slow down and enjoy the moment today.', 'Focus on what makes you feel secure.', 'Your patience will pay off soon.', 'Invest in your comfort and well-being.', 'Practical decisions bring the best rewards.', 'Curiosity leads you to interesting people today.', 'Your words have power—use them wisely.', 'Keep an open mind—it will bring fresh ideas.', 'Stay adaptable, and success will follow.', 'Communication is key—make your voice heard.'],
    actions : ['Start a new project that excites you and requires bold action.', 'Speak up in a group setting to share your fresh ideas.', 'Take a break from routine and try something spontaneous today.', 'Push yourself physically by trying a new workout or activity.', 'Lead a team or initiative to show your natural leadership skills.', 'Be direct in your communication and assert yourself in a conversation.', 'Channel your energy into a creative pursuit that requires quick thinking.', 'Challenge yourself with a task you have been avoiding.', 'Set a new goal that forces you to step outside of your comfort zone.', 'Focus on setting up your home or work environment for more comfort and efficiency.']
};

//This function  accesses the object to randomly retrieve a horoscope sign.
const signGenerator = () => {
    return rawText.horoscopeSigns[Math.floor(Math.random() * 12)] //Note the 12- it is needed to actually randomize through all the items in that array
};
    // console.log(signGenerator())

//This function  accesses the object to randomly retrieve an action.
const actionGenerator = () => {
    return rawText.actions[Math.floor(Math.random() * 10)] //Note the 20- it is needed to actually randomize through all the items in that array
};
    // console.log(actionGenerator())

//This function  accesses the object to randomly retrieve an horoscope.
const horoscopeGenerator = () => {
    return rawText.horoscopes[Math.floor(Math.random() * 15)]
};
    // console.log(horoscopeGenerator())



//Make a function below to generate a message based on all 3 functions above:
const messageGenerator = () => {
    return 'Sign: ' + signGenerator() + ', Horoscope: ' + horoscopeGenerator() + ', Action: ' + actionGenerator();
    // return 'Horoscope: ' + horoscopeGenerator();
    // return 'Action: ' + actionGenerator();
    // return `Your zodiac sign is ${signGenerator()}. Today'a horoscope for you is: ${horoscopeGenerator()}. Actions you should take include; ${actionGenerator}`
};
// messageGenerator();
console.log(messageGenerator());

