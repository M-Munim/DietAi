"use client";

import { useEffect, useState } from "react";
import { quiz } from "../data";
import { GoogleGenerativeAI } from "@google/generative-ai";

import jsPDF from "jspdf";

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] =
    useState(false);
  const [notification, setNotification] = useState("");
  const [result, setResult] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAbQtAVdQkGHZWkBt8eEhMsjaKzti4GouA" //gemeni key
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const questionText = quiz.questions[currentQuestionIndex].question;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionText]: value,
      // [name]: value,  // Use name to prevent wrong input persistence
    }));
  };

  useEffect(() => {
    const currentQuestionText = quiz.questions[currentQuestionIndex].question;
    setIsCurrentQuestionAnswered(
      answers[currentQuestionText] !== undefined &&
      answers[currentQuestionText] !== ""
    );
    setNotification(""); // Clear the notification when the user changes the input
  }, [answers, currentQuestionIndex]);

  // useEffect(() => {
  //   // Clear the radio selection when the current question changes
  //   const inputs = document.querySelectorAll('input[type="radio"]');
  //   inputs.forEach((input) => {
  //     input.checked = false;
  //   });
  // }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex % 5 === 0 && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Skip the image and move to the next question
      return;
    }

    if (isCurrentQuestionAnswered) {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setNotification("Please answer the question first.");
    }
  };

  const motivationalImages = [
    "https://media.istockphoto.com/id/1681619429/photo/silhouette-of-positive-man-celebrating-on-mountain-top-with-arms-raised-up-silhouette-of-man.jpg?s=612x612&w=0&k=20&c=qPt67d0B535UZrtk7kP3N_T7uZ-Nl_DdxB-xZIIhLRw=",
    "https://media.istockphoto.com/id/1398562021/photo/silhouette-man-jumping-over-the-cliffs-with-i-can-do-it-word-in-sunlight-never-give-up-good.jpg?b=1&s=612x612&w=0&k=20&c=NfAsWdpo2sfEUf7roeQBFPryfVqtnbI1jKa2YcghC9Q=",
    "https://media.istockphoto.com/id/1071104734/photo/woman-silhouette-at-sunset-on-hill.jpg?s=612x612&w=0&k=20&c=3PrCHcltS4TtxUXHxT9rLXrG154Lpf70BNDQfkysRnQ=",
  ];

  const getMotivationalImage = () => {
    return motivationalImages[Math.floor(currentQuestionIndex / 5) % motivationalImages.length];
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  useEffect(() => {
    const fetchDietPlan = async () => {
      if (isLastQuestion) {
        console.log("Final Answers:", answers);
        try {
          const model = await genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
          });

          const prompt = `Consider you are a doctor. Generate a diet plan based on the following answers: ${JSON.stringify(
            answers
          )}`;

          const result = await model.generateContent(prompt);
          console.log(result.response.text);

          const text = result.response.text || "No result text found";
          setResult(text);
        } catch (error) {
          console.error("Error generating diet plan:", error);
        }
      }
    };

    fetchDietPlan();
  }, [isLastQuestion, answers]);
  
  const convertToHTML = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.*?)\*/g, "<li>$1</li>");
    text = text.replace(/\n/g, "<br>");
    text = `<ul>${text}</ul>`;
    return { __html: text };
  };
  const convertToPlainText = (text) => {
    // Remove special markdown characters
    text = text.replace(/\*\*(.*?)\*\*/g, "$1");
    text = text.replace(/\*(.*?)\*/g, "$1");
    text = text.replace(/\n/g, "\n");
    return text;
  };
  const handleGeneratePDF = () => {
    const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

    const margin = 5;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const fontSize = 10;
    const lineHeight = 7; // Line height considering font size and padding

    doc.setFontSize(fontSize);

    const logoWidth = 30;
    const logoHeight = 30;
    const doctorName = "Dr. Shahzad khan";
    const generatedDate = new Date().toLocaleDateString();

    const logoDataUrl =
      "https://marketplace.canva.com/EAFBb6P4OLs/1/0/1600w/canva-red-blue-simple-logo-hbl5vlZh180.jpg"; // Replace with your actual base64 image data

    doc.addImage(logoDataUrl, "PNG", margin, margin, logoWidth, logoHeight);
    doc.text(
      `Generated on: ${generatedDate} / ${doctorName} `,
      pageWidth - margin - 80,
      margin + 10
    );
    const plainTextResult = convertToPlainText(result);

    const lines = doc.splitTextToSize(plainTextResult, pageWidth - margin * 2);

    // Initial position
    let yPosition = margin + logoHeight + 1;

    lines.forEach((line) => {
      if (yPosition + lineHeight > pageHeight - margin) {
        doc.addPage(); // Add a new page
        yPosition = margin; // Reset yPosition for the new page
      }
      doc.text(line, margin, yPosition); // Add text to the current page
      yPosition += lineHeight; // Move yPosition down for the next line
    });

    if (yPosition + 5 > pageHeight - margin) {
      doc.addPage(); // Add a new page if there's not enough space
    }
    doc.setFontSize(12);
    doc.text("Signature:", margin, pageHeight - margin - 10);
    doc.line(
      margin + 20,
      pageHeight - margin - 10,
      pageWidth - margin,
      pageHeight - margin - 10
    );

    // Save the PDF
    doc.save("diet-plan.pdf");
  };
  return (
    <div className="w-full flex items-center justify-center my-40">
      {!isLastQuestion ? (
        <div className="w-11/12 md:w-8/12 h-[436px] rounded-[51px] shadow-2xl shadow-green-400">
          <div className="mt-6 pl-6 w-11/12 md:w-9/12 items-start justify-center flex flex-col">
            <h1 className="font-bold text-2xl">Generate diet plan for Weight Loss</h1>
            <p className="font-light text-sm text-gray-600">
              Answer the following questions to generate a diet plan
            </p>
          </div>

          {/* Show Motivational Image After Every 5 Questions */}
          {currentQuestionIndex > 0 && currentQuestionIndex % 5 === 0 ? (
            <div className="w-full flex flex-col items-center justify-center my-6">
              <img
                src={getMotivationalImage()}
                alt="Stay Motivated!"
                className="w-2/3 md:w-1/3 rounded-lg shadow-lg"
              />
              <p className="text-center font-semibold text-lg mt-3">
                Keep Going! Your health matters! 💪
              </p>
            </div>
          ) : (

            <div className="w-11/12 md:w-8/12 m-auto h-2/3 items-start justify-center flex flex-col">
              <div className="w-full">
                <p className="font-bold text-lg md:text-xl mb-2 leading-6">
                  Q: {currentQuestion.id} {currentQuestion.question}
                </p>
                {currentQuestion.type === "text" ? (
                  // <input
                  //   type="text"
                  //   name={`question-${currentQuestion.id}`}
                  //   onChange={handleInputChange}
                  //   className="w-10/12 ml-10 h-10 outline-none border-none shadow-lg p-3 rounded-md"
                  //   placeholder={currentQuestion.placeholder}
                  //   required
                  // />
                  <input
                    type="text"
                    name={`question-${currentQuestion.id}`}
                    value={answers[currentQuestion.question] || ""}  // Ensure value is retained
                    onChange={handleInputChange}
                    className="w-10/12 ml-10 h-10 outline-none border-none shadow-lg p-3 rounded-md"
                    placeholder={currentQuestion.placeholder}
                    required
                  />

                ) : (
                  currentQuestion.options.map((option, index) => (
                    <div key={index} className="ml-3">
                      {/* <input
                        type="radio"
                        id={`option-${index}`}
                        name={`question-${currentQuestion.id}`}
                        value={option}
                        onChange={handleInputChange}
                        className="mr-1"
                      /> */}
                      <input
                        type="radio"
                        id={`option-${index}`}
                        name={`question-${currentQuestion.id}`}
                        value={option}
                        checked={answers[currentQuestion.question] === option}  // Retain selection
                        onChange={handleInputChange}
                        className="mr-1"
                      />

                      <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  ))
                )}
              </div>
              {notification && (
                <p className="text-red-500 text-center mt-2 w-full text-sm">
                  {notification}
                </p>
              )}
            </div>
          )}

          <div className="flex justify-center items-center gap-3 mt-4">
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreviousQuestion} className="quizFilledBtnRed">
                Back
              </button>
            )}
            <button onClick={handleNextQuestion} className="quizFilledBtn2">
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="m-auto w-11/12">
          {result ? (
            <>
              <h2 className="text-xl font-bold mb-3">Your Weight Loss Diet Plan Is:</h2>
              <div
                dangerouslySetInnerHTML={convertToHTML(result)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-y-auto h-[380px]"
              />
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                onClick={handleGeneratePDF}
              >
                Generate Report In PDF For Diet Plan
              </button>
            </>
          ) : (
            <p className="text-lg font-bold">Your result is generating...</p>
          )}
        </div>
      )}
    </div>

  );
};

export default Questionnaire;
