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
  },
  {
    question: 'Preferred Superpower?',
    options: ['Flight', 'Invisibility', 'Teleportation', 'Super Strength']
  },
  {
    question: 'Favorite Dessert?',
    options: ['Chocolate Cake', 'Ice Cream', 'Cheesecake', 'Fruit Salad']
  },
  {
    question: 'Preferred Mode of Transportation?',
    options: ['Car', 'Bicycle', 'Motorcycle', 'Public Transport']
  },
  {
    question: 'Morning Person or Night Owl?',
    options: ['Morning Person', 'Night Owl']
  },
  {
    question: 'Favorite Social Media Platform?',
    options: ['Instagram', 'Twitter', 'Facebook', 'Snapchat']
  },
  {
    question: 'Preferred Gaming Platform?',
    options: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
  },
  {
    question: 'Favorite Movie Genre?',
    options: ['Action', 'Comedy', 'Drama', 'Sci-Fi']
  },
  {
    question: 'Preferred Pizza Topping?',
    options: ['Pepperoni', 'Mushroom', 'Pineapple', 'Margherita']
  },
  {
    question: 'Preferred Music Genre?',
    options: ['Pop', 'Rock', 'Hip-Hop', 'EDM']
  },
  {
    question: 'Favorite Book Genre?',
    options: ['Mystery', 'Fantasy', 'Science Fiction', 'Romance']
  },
  {
    question: 'Preferred Season?',
    options: ['Spring', 'Summer', 'Fall', 'Winter']
  },
  {
    question: 'Favorite Sport?',
    options: ['Football', 'Basketball', 'Cricket', 'Tennis']
  },
  {
    question: 'If I met a genie, what would be my wish?',
    options: ['100 Crore 🤑', 'Beautiful Wife 😍', 'To be King of the World 👑']
  },
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
