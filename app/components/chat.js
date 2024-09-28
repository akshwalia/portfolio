import { useStore } from "@/store";
import Image from "next/image";
import localFont from 'next/font/local';
import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import next from "next";

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

const Message = ({ message }) => {
    return (
        <motion.div
            className="bg-[#ffffffac] p-4 w-fit max-w-[87%] rounded-xl font-semibold mb-2 text-primary-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {message}
        </motion.div>
    );
};

const UserMessage = ({ message }) => {
    return (
        <motion.div
            className="bg-[#E3F6F1] p-4 w-fit max-w-[87%] rounded-xl font-semibold mb-2 text-darker-green self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {message}
        </motion.div>
    );
};

const LinkOption = ({ option, link, messages, setMessages, setCurrentOptions }) => {
    // console.log("LinkOption", option, link);
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 cursor-pointer rounded-full font-bold text-darker-green border-darker-green border-[2.2px] border-solid w-fit mb-2 mr-2 block"
            download={option === "Download Resume" ? "Aksh Walia Resume.pdf" : undefined}
        >
            {option}
        </a>
    );
};

const Option = ({ option, messages, setMessages, setCurrentOptions }) => {
    const addMessagesSequentially = (newMessages) => {
        return new Promise((resolve) => {
            newMessages.forEach((msg, index) => {
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, msg]);
                    if (index === newMessages.length - 1) {
                        resolve();
                    }
                }, (index + 1) * 1000); // 1000ms (1 second) delay between each message
            });
        });
    };

    const addMessage = async (message) => {
        setCurrentOptions(-1); // Hide options immediately when a choice is made
        const userMessage = { type: "user", message };
        let systemResponses = [];

        if (message === "We'd like to hire you") {
            systemResponses = [
                { type: "system", message: "That's great!🕺" },
                { type: "system", message: "Please send me a mail with the details of the project.", nextOptions: 1 }
            ];
        } else if (message === "Just saying Hello!") {
            systemResponses = [
                
                { type: "system", message: "Hello!" },
                { type: "system", message: "I hope you've enjoyed browsing my work 😁" },
                { type: "system", message: "Can I help you with anything else?", nextOptions: 0 }
            ];
        } else if (message === "Looking for Aksh's contact information") {
            systemResponses = [
                { type: "system", message: "Sure, I can help you with that. How would you like to connect with Aksh?", nextOptions: 2 }
            ];
        } else if (message == "Other options") {
            systemResponses = [
                { type: "system", message: "There you go!", nextOptions: 2 }
            ];
        }
        else if (message == "Return to main menu") {
            systemResponses = [
                { type: "system", message: "Sure, let's go back to the main menu.", nextOptions: 0 }
            ];
        }
        else {
            systemResponses = [
                { type: "system", message: "I'm sorry, I don't have a specific response for that option. Is there anything else I can help you with?", nextOptions: 0 }
            ];
        }

        await addMessagesSequentially([userMessage, ...systemResponses]);

        const lastResponse = systemResponses[systemResponses.length - 1];
        if (lastResponse.nextOptions !== undefined) {
            setTimeout(() => {
                setCurrentOptions(lastResponse.nextOptions);
            }, 1000); // 1000ms (1 second) delay before showing new options
        }
    };

    return (
        <div
            className="py-3 px-4 cursor-pointer rounded-full font-bold text-darker-green border-darker-green border-[2.2px] border-solid w-fit mb-2 mr-2"
            onClick={() => addMessage(option)}
        >
            {option}
        </div>
    );
};

const options = [
    ["We'd like to hire you", "Just saying Hello!", "Looking for Aksh's contact information", { message: "Download Resume", link: "/Aksh Walia Resume.pdf" }],
    [{ message: "Mail", link: "mailto:akshwalia20@gmail.com" }, "Other options", "Return to main menu"],
    [{ message: "LinkedIn", link: "https://linkedin.com/in/aksh-walia/" }, { message: "Instagram", link: "https://www.instagram.com/akshwalia_/" }, { message: "Mail", link: "mailto:akshwalia20@gmail.com" }, "Return to main menu"],
    ["Return to main menu"]
];

export default function Chat() {
    const [messages, setMessages] = useState([
        { type: "system", message: "Hi!" },
        { type: "system", message: "I'm Aksh Bot. I'm here to help you with any questions you might have about Aksh's work." },
        { type: "system", message: "How can I help you today?" }
    ]);
    const [currentOptions, setCurrentOptions] = useState(0);

    const showContact = useStore((state) => state.showContact);
    const setShowContact = useStore((state) => state.setShowContact);
    const scrollAreaRef = useRef(null);

    useEffect(() => {
        scrollAreaRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, currentOptions]);

    return (
        <AnimatePresence>
            {showContact && (
                <motion.section
                    className="w-[90%] sm:w-[30rem] h-[87%] fixed top-10 right-10 z-[2000] rounded-xl bg-[#ffffff80] backdrop-blur-xl shadow-[#00000033] shadow-2xl flex flex-col overflow-hidden"
                    key="chat"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className="bg-primary-green px-5 py-4 flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <Image src="/aksh3.jpg" alt="Aksh" width={100} height={100} className="rounded-full w-[2.5rem] h-[2.5rem] object-cover origin-bottom border-white border-2 border-solid" />
                            <div className="text-white">
                                <h1 className={`${acorn.className} text-lg -mb-[0.1rem] font-light`}>Aksh Bot</h1>
                                <p className="-mt-[0.3rem] text-sm"> Ask me a question!</p>
                            </div>
                        </div>

                        <div className="mr-1 cursor-pointer text-white" onClick={() => setShowContact(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    <ScrollArea className="flex-grow px-4" style={{ height: 'calc(100% - 120px)' }}>
                        <div ref={scrollAreaRef}>
                            <div className="py-4">
                                <AnimatePresence>
                                    {messages.map((message, index) => (
                                        <motion.div
                                            className="flex flex-col"
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {message.type === "system" ?
                                                <Message message={message.message} /> :
                                                <UserMessage message={message.message} />
                                            }
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div>
                                {currentOptions !== -1 && options[currentOptions].map((option, index) => (
                                    option.message !== undefined ?
                                        <LinkOption
                                            key={index}
                                            option={option.message}
                                            link={option.link}
                                        /> :
                                        <Option
                                            key={index}
                                            option={typeof option === 'string' ? option : option.message}
                                            messages={messages}
                                            setMessages={setMessages}
                                            setCurrentOptions={setCurrentOptions}
                                        />
                                ))}
                            </div>
                        </div>
                    </ScrollArea>
                </motion.section>
            )}
        </AnimatePresence>
    );
}