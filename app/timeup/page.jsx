'use client'

import { useRouter, useSearchParams } from 'next/navigation';

const TimeUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const correct = searchParams.get('correct');
  const incorrect = searchParams.get('incorrect');

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Time's Up!</h1>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
      <button onClick={() => router.push('/levels')} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Play Again
      </button>
    </div>
  );
};

export default TimeUp;
