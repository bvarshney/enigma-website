import React, { useEffect, useRef, useState } from 'react';
import { useAudioPlayer } from '../Audio/AudioPlayer';

const WavyLineCanvas = () => {
    const canvasRef = useRef(null);
    const [targetAmplitude, setTargetAmplitude] = useState(10);
    const { togglePlay, isPlaying, playAudio, pauseAudio } = useAudioPlayer();
    let currentAmplitude = 10; // Start with the wave
    let phase = 0;

    const canvasWidth = 35; 
    const canvasHeight = 35;
    const waves = 1.5;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const frequency = (2 * Math.PI * waves) / canvasWidth;

        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
            ctx.clip(); // Clip to a circle

            ctx.lineWidth = 4; // Set the line width
            ctx.strokeStyle = '#5d5ad6'; // Set the line color

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + currentAmplitude * Math.sin(frequency * x + phase);
                ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.restore();
        };

        let animationFrameId;

        const updateWave = () => {
            // Smoothly interpolate amplitude
            if (currentAmplitude < targetAmplitude) {
                currentAmplitude += 0.3; // Increment for a smoother transition
                if (currentAmplitude > targetAmplitude) {
                    currentAmplitude = targetAmplitude;
                }
            } else if (currentAmplitude > targetAmplitude) {
                currentAmplitude -= 0.3; // Decrement for a smoother transition
                if (currentAmplitude < targetAmplitude) {
                    currentAmplitude = targetAmplitude;
                }
            }

            phase += 0.1; // Keep updating the phase
            drawWave();
            animationFrameId = requestAnimationFrame(updateWave);
        };

        updateWave();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [targetAmplitude]); // React to changes in targetAmplitude

    const toggleAnimation = () => {
        setTargetAmplitude(targetAmplitude === 0 ? 10 : 0); // Toggle between 0 and 10
    };

    const handleClick = () => {
        toggleAnimation();
        if (togglePlay) togglePlay(); // Call togglePlay only if it's provided
    };

    return (
        <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={handleClick}
            className='WaveCanvas'
        ></canvas>
    );
};

export default WavyLineCanvas;
