module.exports = [
    {
        id:1,
        title: 'Obedient Cat',
        description: "This file has a flag in plain sight (aka \"in-the-clear\"). Try to find key. You can find it in test-vm opg1.",
        points: 5,
        categoryId : 4,
        difficultyId:1,
        hints:["$ man cat"],
        isInTerminal: true,
    },
    {
        id:2,
        title: 'Mod 26',
        description: "Cryptography can be easy, do you know what ROT13 is? PGS-{URERVFNAFJRE}",
        points: 5,
        categoryId : 2,
        difficultyId:1,
        hints:["This can be solved online if you don't want to do it by hand!"],
    },
    {
        id:3,
        title: 'Cookie Monster',
        description: "Who doesn't love cookies? Try to figure out the best one. Go to the path /problems/cookie-problem",
        points: 5,
        categoryId : 1,
        difficultyId:1,
        hints:["How does it connected with cookie?"],
    },
    {
        id:4,
        title: 'CipherSight: Text Concealed',
        description: "Files can always be changed in a secret way. " +
            "Can you find the flag? You can find the flag it in test-vm/terminal opg4.",
        points: 5,
        categoryId : 3,
        difficultyId:1,
        hints:["What is steganography?","Read more about tool steghide"],
        isInTerminal: true,
    },
    {
        id:5,
        title: 'Little-endian Letter Crunch',
        description: "You are developing a program to process textual data but encountered an issue with byte order in a little-endian system. " +
            "Your task is to write a program that correctly handles text presented in little-endian format, including characters and ASCII encoding. " +
            "The program should be able to interpret characters correctly and process text regardless of byte order.",
        points: 5,
        categoryId : 5,
        difficultyId:1,
        hints:["Why does it called Little-endian?",
        "Read about buffer overflow",
        "python3 -c 'print(SOME LETTERS)' | ./buffer_over flow"],
        isInTerminal: true,
    },
    {
        id:6,
        title: 'Uncover the XSS Treasure',
        description: "You are working on a web application for leaving comments. " +
            "However, your users complain that when they enter certain comments, they see strange messages. " +
            "Your task is to find the problem and figure out a way to access the hidden CTF key. Website is located on /problems/xss-problem",
        points: 5,
        categoryId : 1,
        difficultyId:1,
        hints:[],
    },
    {
        id:7,
        title: 'Numeric Modulus Cipher Puzzle',
        description: "Find file in /test-vm or in attached files." +
            "Calculate the remainder when each number is divided by 41, then determine the modular inverse of the resulting remainders. " +
            "Afterward, assign each modular inverse to its corresponding character in the specified character set: letters from A to Z (capital) represent numbers 1 to 26, digits from 0 to 9 represent numbers 27 to 36, and the underscore character represents the number 37." +
            "Put text that you will get in CTF-{your_text}.",
        points: 5,
        categoryId : 2,
        difficultyId:1,
        hints:[],
    },
    {
        id:8,
        title: 'DNA SCAN',
        description: "Find image in test-vm or in attached files. Download it and find the flag. In terminal opg8.",
        points: 5,
        categoryId : 3,
        difficultyId:1,
        hints:[],
        isInTerminal: true,
    },
    {
        id:9,
        title: 'Branch Worker',
        description: "You should find CTF key hidden in this git branch stucture",
        points: 5,
        categoryId : 4,
        difficultyId:1,
        hints:[],
        isInTerminal: true,
    },
    {
        id:10,
        title: 'Guess the number',
        description: "Here's a program where you need to guess number from 1 to 5. " +
            "I hear something good happens if you win 5 times in a row. You can find program in test-vm opg10.",
        points: 5,
        categoryId : 5,
        difficultyId:1,
        hints:[],
        isInTerminal: true,
    },

]
