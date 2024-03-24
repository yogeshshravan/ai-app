'use client'

import { useState, useEffect } from 'react';
import { problems } from '@/app/problems/problems';
import { useRouter } from 'next/navigation';
// import { bell-sound as correctOption } from '../../../public/bell-sound.mp3'; // Import the correct answer sound
// import { wrongOption as incorrectOption } from '@/public/wrongOption.mp3'; // Import the incorrect answer sound

const QuizComponent = () => {  

  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter()

  useEffect(() => {
    if (timeLeft === 0) {
      // Time's up, move to the next question
      handleNextQuestion();
    }
  }, [timeLeft]);

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === problems[currentProblemIndex]?.correctAnswer) {
      // Correct answer
      setCorrectCount(prevCount => prevCount + 1);
      new Audio('/bell-sound.mp3').play(); // Play the correct answer sound
    } else {
      // Incorrect answer
      setWrongCount(prevCount => prevCount + 1);
      const wrongOptionSound = new Audio('/wrongOption.mp3');
      wrongOptionSound.play(); // Play the incorrect answer sound
    }

    // Move to the next question
    setSelectedOption('');
    // setTimeLeft(30);
    setCurrentProblemIndex(prevIndex => prevIndex + 1);
    if (timeLeft === 0) {
      router.push(`/timeup?${new URLSearchParams({
        correct: correctCount,
        incorrect: wrongCount,
      })}`,       
    )
    }
  };

  return (
    <div className='p-10 container mx-auto'>
      <h2 className='text-3xl font-bold mb-4'>Question {currentProblemIndex + 1}</h2>
      <p className='text-2xl font-semibold mb-2'>{problems[currentProblemIndex]?.question}</p>
      <div>
        {problems[currentProblemIndex]?.options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleOptionSelect(option.label)}
            disabled={selectedOption !== ''}
            className='mr-[30px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            {option.label}: {option.text}
          </button>
        ))}
      </div>
      <p>Time left: {timeLeft} seconds</p>
      <p>Correct responses: {correctCount}</p>
      <p>Wrong responses: {wrongCount}</p>
      {selectedOption !== '' && (
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' onClick={handleNextQuestion}>Next</button>
      )}
    </div>
  );
};

export default QuizComponent;


// 'use client'

// // pages/level/[id].js
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const LevelPage = ({ params }) => {
//   const router = useRouter();
//   // const { id } = router.query;
//   const { id } = params;

//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState('');
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     // Fetch questions for the selected level
//     // Example: fetchQuestions(id)
//     // setQuestions(questionsData);
//     // Generate initial question
//     generateQuestion();
//   }, [id]);

//   useEffect(() => {
//     // Start the timer when the component mounts
//     const countdown = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       } else {
//         // Redirect to results page when timer reaches 0
//         router.push('/results');
//       }
//     }, 1000);

//     // Clear the timer when the component unmounts
//     return () => clearInterval(countdown);
//   }, [timer]);

//   const generateQuestion = () => {
//     // Generate a new question for the current level
//     // Example: const newQuestion = generateQuestionForLevel(id);
//     // setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
//   };

//   const handleAnswerSelect = (answer) => {
//     // Check if the selected answer is correct
//     // Example: if (answer === questions[currentQuestionIndex].correctAnswer) { setScore(score + 1); }
//     // Move to the next question
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     setUserAnswer('');
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{`Level ${id} - Question ${currentQuestionIndex + 1}`}</h1>
//       {/* Display the current question and answer options */}
//       {/* Example: <QuestionComponent question={questions[currentQuestionIndex]} onAnswerSelect={handleAnswerSelect} /> */}
//       <p>Time left: {timer} seconds</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// };

// export default LevelPage;
