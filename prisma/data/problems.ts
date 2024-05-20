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
            "Can you find the flag? You can find the flag it in terminal opg4. It doesn`t has any passphrase to extract.",
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
            "The program should be able to interpret characters correctly and process text regardless of byte order. PS: You need to install this folder locally " + 
            "using command docker cp ics-ctf-platform-test-vm-1:/ctf-ics/opg5 . to run c-program",
        points: 10,
        categoryId : 5,
        difficultyId:2,
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
        hints:["Answer is laying in answer variable"],
    },
    {
        id:7,
        title: 'Numeric Modulus Cipher Puzzle',
        description: "Find file in /test-vm or in attached files." +
            "Calculate the remainder when each number is divided by 43, then determine the modular inverse of the resulting remainders. " +
            "Afterward, assign each modular inverse to its corresponding character in the specified character set: letters from A to Z (capital) represent numbers 1 to 26, digits from 0 to 9 represent numbers 27 to 36, and the underscore character represents the number 37." +
            "Put text that you will get in CTF-{your_text}.",
        points: 10,
        categoryId : 2,
        difficultyId:2,
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
            "I hear something good happens if you win 5 times in a row. You can find program in test-vm opg10. PS: You need to install this folder locally " + 
            "using command docker cp ics-ctf-platform-test-vm-1:/ctf-ics/opg10 . to run c-program",
        points: 5,
        categoryId : 5,
        difficultyId:1,
        hints:[],
        isInTerminal: true,
    },
    {   
        id: 11,
        title: 'Node-RED Configuration',
        description: "Node-RED is an essential part of the ICS testbed, which allows for connection between the testbed’s hardware and the respective APIs. " +
            "An essential part of Node-RED is configuring the flow settings which are used upon startup, which contains a key used to encrypt and decrypt credentials used in certain nodes within the flows. " +
            "Can you find the secret key used for credential encryption/decryption within the settings file?",
        points: 5,
        categoryId : 2,
        difficultyId: 1,
        hints:[],
        isInTerminal: true,
    },
    {   
        id:12,
        title: 'Node-RED Flows',
        description: "Flows in Node-RED allow for communication between different message protocols. " +
            "In the testbed, it is used to convert between MQTT and OPC/UA. " +
            "However, in this task there seems to be a vulnerability allowing for certain sensitive data to be exposed. " +
            "Have a look at the simulated flow and the packet traffic which it creates and see if you can find the key using the weakness.",
        points: 15,
        categoryId : 3,
        difficultyId: 3,
        hints:[],
        isInTerminal: true,
    },
    {
        id:13,
        title: 'Understanding OPC/UA',
        description: "OPC Unified Architecture is a machine-to-machine communication protocol used for exchange of various data and is frequently used in industrial applications to allow for secure exchange of industrial automation data. " +
            "Have a look at the files provided using UaExpert and develop an understanding of its functionality by attempting to find the flag hidden within.",
        points: 10,
        categoryId : 3,
        difficultyId: 2,
        hints:[],
        isInTerminal: true,
    },
    {
        id:14,
        title: 'The Broken Broker',
        description: "MQTT is a standard messaging protocol for IoT renown for its lightweight messaging transport which is ideal for connecting remote devices. " +
            "MQTT brokers are coordinators used to receive and filter messages for various clients. Unfortunately, MQTT brokers are often configured poorly - leading to security vulnerabilities and exposed topics with sensitive data. " +
            "In this task, your goal will be to find vulnerable topics to take advantage of and discover the flag hidden within. " +
            "Can you check out the broken broker and find the secrets within?",
        points: 10,
        categoryId : 4,
        difficultyId: 2,
        hints:[],
        isInTerminal: true,
    },
    {
        id:15,
        title: 'Open Airwaves',
        description: "While some MQTT brokers openly share their topics with all parties, more properly configured brokers can keep sensitive data hidden out of plain sight. " +
            "However, vulnerabilities still present themselves when the hidden data is not properly encrypted. " +
            "In this task, you will have to use packet sniffing tools at your disposal to find the data while it is in transport. " +
            "Can you find the unencrypted flag string that is hidden within datga packets?",
        points: 10,
        categoryId : 3,
        difficultyId: 2,
        hints:[],
        isInTerminal: true,
    },
    {
        id:16,
        title: 'Actions And Orders',
        description: "Client-to-server communication is crucial for industries in order to transmit orders and execute commands for the sake of efficient production. " +
            "Users should also only be able to execute commands and access resources corresponding to their rank. " +
            "Unfortunately, administrator security is not always properly implemented - which is exactly what happened with the MQTT broker in question. " +
            "As a standard user, it will be your job to uncover the hidden flag by acquiring critical information about the MQTT broker's functionalities and think of possible methods of exploitation.",
        points: 15,
        categoryId : 1,
        difficultyId: 3,
        hints:[],
        isInTerminal: true,
    },
    {
        id:17,
        title: 'Logic Lock',
        description: "CODESYS is an important PLC programming tool for developing automation software for industrial control systems, meaning it is a crucial part of any automation software engineer to understand how CODESYS programs work. " +
            "In this scenario, an export file was sent to you for analysis to see if you can extract any sensitive data out of the exported resource. " +
            "Familiarize yourself with the CODESYS structure and find the flag hidden within.",
        points: 5,
        categoryId : 4,
        difficultyId: 1,
        hints:[],
        isInTerminal: true,
    },
    {
        id:18,
        title: 'Authorization Alert',
        description: "Proper security is crucial when dealing with any kind of software which contains sensitive data. " +
            "our boss has recently mentioned that several unauthorized parties have managed to use certain passwords to access the control system through the TXT controller - making some of its functionality severely compromised. " +
            "He has assigned the task of decompiling and reverse engineering the existing TXT gateway PLC program in order to find the vulnerability to you using reverse engineering tools such as Ghidra. " +
            "Your goal is to find the hidden password variable and verify that is it is correct by authorizing yourself using said password into the auth checker program to obtain the flag.",
        points: 15,
        categoryId : 5,
        difficultyId: 3,
        hints:[],
        isInTerminal: true,
    },
    {
        id:19,
        title: 'Decryption Danger',
        description: "Your fellow colleague has recently created a password encryption system which they believe will be sufficient for ICS access management. " +
            "Another employee has come forward with saying that the system might not be as safe as initially believed. " +
            "Consequently, you have been assigned the role of trying to reverse engineer the compiled program using tools such as Ghidra in order to figure out the encryption mechanisms used and decrypt the password hidden within the code. " +
            "Is your understanding of reverse engineering sufficient enough to solve this demanding challenge?",
        points: 15,
        categoryId : 2,
        difficultyId: 3,
        hints:[],
        isInTerminal: true,
    },
    {
        id:20,
        title: 'PLC Problems',
        description: "The industrial control system which has been running flawlessly up until recently has started exhibiting irregular behaviour. " +
            "The company has conducted an investigation and has marked a PLC program involving cyclic interrupt functionality as the culprit behind the irregularities. " +
            "You have been assigned the job of finding out the cause of the issues by analyzing the program code." +
            "Can you utilize your knowledge of structured text programs and PLC to spot the anomalies and decode the flag created by them?",
        points: 10,
        categoryId : 4,
        difficultyId: 2,
        hints:[],
        isInTerminal: true,
    },
]

