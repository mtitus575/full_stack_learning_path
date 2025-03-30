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
    horoscopes : {
        ariesHoroscopes : ['Take bold steps today - your energy is contagious!', 'You are ready for new challenges—go after them!', 'Trust your instincts to lead the way.', 'Exciting opportunities come with a little risk.', 'Your confidence will open doors today.'],
        taurusHoroscopes : ['Slow down and enjoy the moment today.', 'Focus on what makes you feel secure.', 'Your patience will pay off soon.', 'Invest in your comfort and well-being.', 'Practical decisions bring the best rewards.'],
        geminiHoroscopes : ['Curiosity leads you to interesting people today.', 'Your words have power—use them wisely.', 'Keep an open mind—it will bring fresh ideas.', 'Stay adaptable, and success will follow.', 'Communication is key—make your voice heard.'],
        cancerHoroscopes : ['Trust your intuition—it is on point today.', 'Show love to someone who needs it.', 'Home is where your heart feels at peace.', 'Listen to your emotions—they guide you well.', 'Embrace nurturing energy and spread kindness.'],
        leoHoroscopes : ['Shine brightly today—your charisma is magnetic.', 'Lead with confidence, and others will follow.', 'A creative breakthrough is on the horizon.', 'Take charge—you are in control now.', 'Your energy brings people together.'],
        virgoHoroscopes : [],
        libraHoroscopes : [],
        scorpioHoroscopes : [],
        sagittariusHoroscopes : [],
        capricornHoroscopes : [],
        aquariusHoroscopes : [],
        piscesHoroscopes : []
    },
    actions : {
        ariesActions : [],
        taurusActions : [],
        geminiActions : [],
        cancerActions : [],
        leoActions : [],
        virgoActions : [],
        libraHoroscopes : [],
        scorpioActions : [],
        sagittariusActions : [],
        capricornActions : [],
        aquariusActions : [],
        piscesActions : []
    }
};
// console.log(rawText.horoscopeSigns);

//This function tests accessing the object to randomly retrieve a horoscope sign.
const test = sign => {
    return rawText.horoscopeSigns[Math.floor(Math.random() * 12)] //Note the 12- it is needed to actually randomize through all the items in that array
};
console.log(test('Aries'))
