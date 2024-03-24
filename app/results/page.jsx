'use client'

// pages/results.js

import { useRouter } from 'next/navigation';

const ResultsPage = () => {
  const router = useRouter();
  // const { correct, incorrect } = router.query;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Results</h1>
      <p>Correct Answers: </p> 
      <p>Incorrect Answers: </p>
      <button onClick={() => router.push('/levels')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Play Again</button>
    </div>
  );
};

export default ResultsPage;
