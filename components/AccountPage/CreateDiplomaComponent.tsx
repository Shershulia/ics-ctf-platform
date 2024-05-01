import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    name:string,
    email:string,
    problemsSolved: number,
}

const CreateDiplomaComponent = ({name="",email="", problemsSolved=0} : Props) => {
    const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

    const downloadImage = async (url :any) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.crossOrigin = "anonymous";
            img.onload = () => resolve(img);
            img.onerror = (error) => reject(error);
        });
    }

    const generateImage = async () => {
        try {
            const background = await downloadImage("/diploma.jpg");
            const canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 350;
            const context = canvas.getContext('2d');
            context.drawImage(background, 0, 0);
    
            // Header
            const headerText = "Certificate of Achievement";
            context.font = "bold 28pt Calibri";
            context.textAlign = "center";
            context.fillText(headerText, canvas.width / 2, 50);
            const currentDate = new Date();
            // Main text with line breaks
            const mainText = `This is to certify that ${name} \n\nhas successfully completed the course CTF-ICS PLATFORM.\n\nEmail: ${email}\n\nTotal Problems Solved: ${problemsSolved} %\n\nIn recognition of your dedication, perseverance, and outstanding problem-solving skills \ndemonstrated throughout the course, we hereby confer upon you \nthis Certificate of Achievement.\n\nDate: ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}\n\nBY NTNU STUDENTS IVAN AND VLADIMIR`;
            const lines = mainText.split('\n');
            const lineHeight = 15; 
            const startY = 100; 
            context.font = "14pt Calibri";
            context.textAlign = "left";
            lines.forEach((line, index) => {
                if (line.includes("CTF-ICS PLATFORM.")){
                    context.font = "bold 14pt Calibri";
                    context.fillText(line,  20, startY + index * lineHeight);
                    context.font = "14pt Calibri";
                }else if (line.includes("In recognition of your dedication")){
                    context.font = "10pt Calibri";
                    context.fillText(line,  20, startY + index * lineHeight);
                }else {
                    context.fillText(line,  20, startY + index * lineHeight);
                }
            });
    
            const url = canvas.toDataURL();
            setGeneratedImageUrl(url);
        } catch (error) {
            console.error("Error generating image:", error);
        }
    }

    const generateDiploma = () => {
        toast.success("Generate Diploma")
        generateImage()
    }

    return (
        <>
            <Button
                color="primary"
                variant="flat"
                size={"lg"}
                className={"py-7 mb-5 m-auto"}
                onClick={generateDiploma}
                >
                Generate Diploma
            </Button>
            <div className="generatedImage py-4 mb-4">
                {generatedImageUrl && (
                        <img src={generatedImageUrl} alt="Generated Diploma" />
                )}
            </div>

        </>
    )
}

export default CreateDiplomaComponent;
