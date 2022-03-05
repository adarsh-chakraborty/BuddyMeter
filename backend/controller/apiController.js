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
    },
    {
      question: 'Your favourite thing to do in free time?',
      _id: '7x7',
      options: ['BGMI', 'MSW', 'Music', 'All of them']
    },
    {
      question: 'Your favourite animal?',
      _id: '8xxx7',
      options: ['Dog', 'Cat', 'Elephant', 'Lion']
    },
    {
      question: 'Your favourite actor?',
      _id: '10x2xx7',
      options: [
        'Salmon bhoi',
        'Robert Downey Jr.',
        'Cris Evans',
        'Shah rukh khan'
      ]
    },
    {
      question: 'Your favourite actoress?',
      _id: '11xkx7',
      options: ['Priyanka Chopra', 'Deepika', 'Anuskha', 'Karena']
    },
    {
      question: 'Your favourite youtuber?',
      _id: '12xkx7',
      options: ['Dikz', 'MrBallen', 'Web Dev Simplified', 'Canadian Lad']
    }
  ];
  res.json(questions);
};

const postQuestions = (req, res, next) => {
  const data = req.body;

  const questions = [];

  for (const key in data) {
    questions.push({
      queId: data[key].queId,
      answer: data[key].answer,
      index: data[key].index
    });
  }

  console.log(questions);
  res.send('OK');
};

module.exports = { postQuestions, getQuestions };
