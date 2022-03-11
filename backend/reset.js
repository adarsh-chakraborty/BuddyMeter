require('dotenv').config();

const Quiz = require('./model/Quiz');
const Question = require('./model/Question');
const { default: mongoose } = require('mongoose');

const questions = [
  {
    question: 'Favourite Bollywood actor?',
    options: ['Shahrukh Khan', 'Salmon bhoi', 'Amir Khan', 'Akshay Kumar']
  },
  {
    question: 'If I met a genie, what would be my wish?',
    options: ['100 Crore 🤑', 'Beautiful Wife 😍', 'To be King of the World 👑']
  },
  {
    question: 'My wife/husband be the Hottest or the Smartest?',
    options: ['Hottest', 'Smartest']
  },
  {
    question: 'I drink the most?',
    options: ['Tea', 'Coffee']
  },
  {
    question: 'My Preference',
    options: ['Desi Daari', 'Angrazi Daaru', 'Koi bhi mil jaaye', 'None']
  },
  {
    question: '✈ Favourite Vacation Spot',
    options: ['🏂 Manali', '❄ Ladakh', '🏖 Goa', '⛄ Shimla']
  },
  {
    question: '🎬 Favorite Avengers Movie?',
    options: ['Avengers 2012', 'Age of Ultron', 'Infinity War', 'Endgame']
  },
  {
    question: 'Favorite Marvel Hero?',
    options: ['Thor', 'Iron-man', 'Spiderman', 'Dr. Strange']
  },
  { question: 'DC or MCU?', options: ['DC', 'MC'] },
  {
    question: 'Pet I want the most?',
    options: ['A Dog', 'A Cat', 'A Moose', 'A Cow']
  },
  {
    question: 'VEG OR NON-VEG??',
    options: ['VEG 🌿', 'NON-VEG 🍗']
  },
  {
    question: 'My Favourite anime genre?',
    options: ['Shonen', 'Slice of life', 'Isekai', 'Harem']
  },
  {
    question: 'Favourite Activity?',
    options: [
      'Sleeping',
      'Listening Music',
      'Coding / Reading',
      'Playing Games'
    ]
  }
];
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) {
    console.log('Error occured: ', err);
    return;
  }

  const deleteQuiz = Quiz.deleteMany({});
  const deleteQuestions = Question.deleteMany({});

  Promise.all([deleteQuiz, deleteQuestions]).then((result) => {
    console.log('Deleted Quizzes: ', result[0]);
    console.log('Deleted Questions: ', result[1]);
    console.log(`Inserting ${questions.length} questions now...`);
    Question.insertMany(questions).then((result) => {
      console.log('Questions Inserted: ', result);
      console.log('Exiting now...');
      process.exit();
    });
  });
});
