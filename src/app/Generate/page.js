// import React from 'react'

// const page = () => {
//   return (
//     <section className='w-full flex items-center justify-center my-40'>
//       <div className="bg-red-400 w-[980px] h-[306px] rounded-[51px] shadow-lg ">
//         <div className="mt-6 ml-6 ">
//           <h1 className="">Genrate diet plan</h1>
//           <p className="">Answer the following questions to genrate a diet plan</p>
//         </div>
//         <div className="flex items-center justify-center">

//           <div id="personalized-diet-plan" className="w-1/2 bg-green-200">
//             <label htmlFor="name" className="block">Name:</label>
//             <input type="text" id="name" placeholder="Enter your name" className="outline-none p-2 w-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default page

"use client";

import { useEffect, useState } from 'react';
import { quiz } from '../data';

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  useEffect(() => {
    if (isLastQuestion) {
      console.log('Final Answers:', answers);
    }
  }, [isLastQuestion, answers]);

  return (
    <div className='w-full flex items-center justify-center my-40'>
      {!isLastQuestion ? (
        <div className='bg-red-300 w-9/12 h-[416px] rounded-[51px] shadow-lg'>
          <div className="mt-6 pl-6 w-9/12 items-start justify-center flex flex-col" >
            <h1 className="font-bold text-2xl">Genrate diet plan</h1>
            <p className="font-light text-sm text-gray-600">Answer the following questions to genrate a diet plan</p>
          </div>
          <div className=' w-8/12 m-auto h-2/3 items-start justify-center flex flex-col'>
            <div className="w-full">
              <p className='font-bold text-xl mb-2'>{currentQuestion.question}</p>
              {currentQuestion.type === 'text' ? (
                <input
                  type="text"
                  name={`question-${currentQuestion.id}`}
                  onChange={handleInputChange}
                  className="w-full ml-10 h-10 outline-none border-none shadow-lg p-3 rounded-md"
                  required
                />
              ) : (
                currentQuestion.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${currentQuestion.id}`}
                      value={option}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))
              )}
            </div>
          </div>
          <button onClick={handleNextQuestion} className='quizFilledBtn2 m-auto block'>Next</button>
        </div>
      ) : (
        <div>
          <h2>Your Answers:</h2>
          <ul>
            {Object.entries(answers).map(([key, value]) => {
              const questionId = parseInt(key.split('-')[1]);
              const question = quiz.questions.find(q => q.id === questionId);
              return (
                <li key={key}>
                  <strong>{question.question}:</strong> {value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
