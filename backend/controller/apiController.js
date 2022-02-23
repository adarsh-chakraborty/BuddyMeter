const getQuestions = (req, res, next) => {
  const questions = [
    {
      question: 'What is your favorite movie?',
      _id: '1234',
      options: ['Iron Man', 'Thor', 'Captain Marvel', 'Section 3B']
    },
    {
      question: 'What is the best cartoon you have ever seen?',
      _id: '1234x',
      options: ['Tom and Jerry', 'Spongebob', 'Johnny Bravo', 'Doraemon']
    },
    {
      question: 'What is your favorite anime?',
      _id: '12345',
      options: [
        'Kaguya Sama: Love is war',
        'Attack on Titan',
        'Naruto',
        'Demon Slayer'
      ]
    },
    {
      question: 'What is your favorite food?',
      _id: '12345xsss',
      options: ['Noodles', 'Fried Chicken', 'Biryani', 'South Indian']
    },
    {
      question: 'Which one is your favorite destination to go?',
      _id: '123x45',
      options: ['Manali', 'Goa', 'Sri Lanka', 'Kerela']
    },
    {
      question: 'Favourite movie??',
      _id: '123xd45',
      options: [
        'Iron-man',
        'Infinity War',
        'Endgame',
        'Shang chi and the legends of the 10 rings'
      ]
    }
  ];
  res.json(questions);
};

module.exports = { getQuestions };
