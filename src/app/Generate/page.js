"use client";

import { useEffect, useState } from 'react';
import { quiz } from '../data';

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false);
  const [notification, setNotification] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  useEffect(() => {
    const currentQuestionId = `question-${quiz.questions[currentQuestionIndex].id}`;
    setIsCurrentQuestionAnswered(answers[currentQuestionId] !== undefined && answers[currentQuestionId] !== '');
    setNotification(''); // Clear the notification when the user changes the input
  }, [answers, currentQuestionIndex]);

  useEffect(() => {
    // Clear the radio selection when the current question changes
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false;
    });
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (isCurrentQuestionAnswered) {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setNotification('Please answer the question first.');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
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
        <div className='w-11/12 md:w-8/12 h-[436px] rounded-[51px] shadow-2xl shadow-green-400'>
          <div className="mt-6 pl-6 w-11/12 md:w-9/12 items-start justify-center flex flex-col bg-yellow-200">
            <h1 className="font-bold text-2xl">Generate diet plan</h1>
            <p className="font-light text-sm text-gray-600">Answer the following questions to generate a diet plan</p>
          </div>

          <div className='w-11/12 md:w-8/12 m-auto h-2/3 items-start justify-center flex flex-col bg-green-200'>
            <div className="w-full">
              <p className='font-bold text-lg md:text-xl mb-2 leading-6'>Q: {currentQuestion.id} {currentQuestion.question}</p>
              {currentQuestion.type === 'text' ? (
                <input
                  type="text"
                  name={`question-${currentQuestion.id}`}
                  onChange={handleInputChange}
                  className="w-10/12 ml-10 h-10 outline-none border-none shadow-lg p-3 rounded-md"
                  placeholder={currentQuestion.placeholder}
                  required
                />
              ) : (
                currentQuestion.options.map((option, index) => (
                  <div key={index} className='ml-3'>
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${currentQuestion.id}`}
                      value={option}
                      onChange={handleInputChange}
                      className='mr-1'
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))
              )}
            </div>
            {notification && <p className="text-red-500 text-center mt-2 w-full text-sm">{notification}</p>}
          </div>
          <div className='flex justify-center items-center gap-3 mt-4'>
            {currentQuestionIndex > 0 && (
              <button
                onClick={handlePreviousQuestion}
                className='quizFilledBtnRed'
              >
                Back
              </button>
            )}
            <button
              onClick={handleNextQuestion}
              className='quizFilledBtn2'
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className='m-auto w-11/12'>
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
