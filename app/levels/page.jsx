'use client'

import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter();

  const handleLevelSelect = (level) => {
    router.push(`/level/${level}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Please select the level of difficulty of questions</h1>
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5].map((level) => (
          <button key={level} onClick={() => handleLevelSelect(level)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">{`Level ${level}`}</button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
