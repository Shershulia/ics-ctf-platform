import React, { useState, useEffect, useRef } from 'react';

const TerminalVMPage = () => {
    const [command, setCommand] = useState<string>('');
    const [history, setHistory] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null); // For managing focus

    useEffect(() => {
        const focusInput = (event: MouseEvent) => {
            if (inputRef.current && event.target !== inputRef.current) {
                inputRef.current.focus();
            }
        };

        // Attach the event listener to document
        document.addEventListener('click', focusInput);

        // Cleanup the event listener
        return () => document.removeEventListener('click', focusInput);
    }, []);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus(); // Automatically focus the input on render and after every re-render
    });

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Simulating an API call
            // Note: Replace this with your actual fetch request
            const data = { output: 'Simulated response for ' + command }; // Assuming response has an 'output' property

            // Update command history
            setHistory((prevHistory) => [...prevHistory, `$ ${command}`, data.output]);
            setCommand('');

            // Keep the input focused after submitting a command
            event.preventDefault();
            if (inputRef.current) inputRef.current.focus();
        }
    };

    return (
        <div className="bg-black min-h-screen text-white font-mono">
            <div className="p-4">
                {history.map((line, index) => (
                    <div key={index} className="text-green-500">{line}</div>
                ))}
                <input
                    ref={inputRef}
                    className="bg-black text-white w-full focus:outline-none"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    );
};

export default TerminalVMPage;
