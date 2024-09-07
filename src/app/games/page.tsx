'use client'

import React, { useState, useEffect, useRef } from "react";

const Game: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer] = useState({ x: 50, y: 300, velocityY: 0, isJumping: false });
  const [enemy, setEnemy] = useState({ x: 800, y: 300, speed: 5 }); // Enemy will move from right to left
  
  const canvasRef = useRef<HTMLDivElement>(null);

  // Handle player movement for desktop
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isStarted) return;

    switch (e.key) {
      case "ArrowUp":
        if (!player.isJumping) {
          setPlayer((prev) => ({ ...prev, isJumping: true, velocityY: -12 }));
        }
        break;
    }
  };

  // Game logic for gravity and jumping
  useEffect(() => {
    const gravity = () => {
      if (player.isJumping) {
        setPlayer((prev) => ({
          ...prev,
          y: prev.y + prev.velocityY,
          velocityY: prev.velocityY + 0.8, // Gravity effect
        }));

        if (player.y >= 300) {
          setPlayer((prev) => ({
            ...prev,
            y: 300,
            velocityY: 0,
            isJumping: false,
          }));
        }
      }
    };

    const gameLoop = setInterval(() => {
      gravity();
    }, 20);

    return () => clearInterval(gameLoop);
  }, [player]);

  // Game loop for enemy movement and collision detection
  useEffect(() => {
    const enemyMovement = () => {
      setEnemy((prev) => ({
        ...prev,
        x: prev.x - prev.speed,
      }));

      // If the enemy moves off the screen, reset its position
      if (enemy.x < 0) {
        setEnemy({ x: 800, y: 300, speed: enemy.speed + 0.5 }); // Increase speed as levels progress
        setScore((prevScore) => prevScore + 1); // Increase score when enemy is avoided
      }

      // Collision detection: If player collides with the enemy
      if (enemy.x <= player.x + 50 && enemy.x >= player.x && player.y >= 280) {
        setGameOver(true);
        setIsStarted(false);
      }
    };

    if (isStarted && !gameOver) {
      const gameInterval = setInterval(enemyMovement, 30);
      return () => clearInterval(gameInterval);
    }
  }, [enemy, player, isStarted, gameOver]);

  // Key listener for desktop
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [player]);

  const startGame = () => {
    setIsStarted(true);
    setShowInstructions(false);
    setGameOver(false);
    setScore(0);
    setEnemy({ x: 800, y: 300, speed: 5 });
  };

  const resetGame = () => {
    setIsStarted(false);
    setShowInstructions(true);
    setPlayer({ x: 50, y: 300, velocityY: 0, isJumping: false });
    setEnemy({ x: 800, y: 300, speed: 5 });
    setScore(0);
    setLevel(1);
    setGameOver(false);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
      {showInstructions && (
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Game!</h1>
          <p>Instructions:</p>
          <ul className="list-disc text-left ml-8">
            <li>Use arrow keys (Up) to jump.</li>
            <li>Jump over the enemy to avoid collision.</li>
            <li>The game gets harder as you progress!</li>
          </ul>
          <button
            className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 rounded-lg"
            onClick={startGame}
          >
            Start Game
          </button>
        </div>
      )}

      {!showInstructions && (
        <div className="relative w-full max-w-lg h-[400px] bg-gray-800">
          {/* Game area */}
          <div ref={canvasRef} className="absolute inset-0 w-full h-full bg-gray-500">
            {/* Player */}
            <div
              className="absolute bg-red-500 w-10 h-10 rounded-md"
              style={{
                left: `${player.x}px`,
                bottom: `${player.y}px`,
              }}
            ></div>

            {/* Enemy */}
            <div
              className="absolute bg-green-500 w-10 h-10 rounded-md"
              style={{
                left: `${enemy.x}px`,
                bottom: `${enemy.y}px`,
              }}
            ></div>

            {/* Mobile controls */}
            <div className="absolute bottom-2 right-2 flex space-x-4 md:hidden">
              <button
                onClick={() => setPlayer((prev) => ({ ...prev, isJumping: true, velocityY: -12 }))}
                className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
              >
                ⬆️
              </button>
            </div>
          </div>

          {/* Score and Level Display */}
          <div className="absolute top-2 left-2 text-xl font-bold">Score: {score}</div>
          <div className="absolute top-2 right-2 text-xl font-bold">Level {level}</div>

          {/* Reset Button */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-3xl font-bold">Game Over!</h2>
              <button
                className="mt-4 px-6 py-2 bg-red-500 rounded-md hover:bg-red-700"
                onClick={resetGame}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
