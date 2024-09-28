import { useStore } from "@/store";
import Image from "next/image";
import localFont from 'next/font/local';
import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";

const acorn = localFont({ src: '../fonts/Acorn-Bold.woff2' });

const Message = ({ message }) => {
    return (
        <div className="bg-[#ffffffac] p-4 w-fit max-w-[87%] rounded-xl font-semibold mb-2 text-primary-green">
            {message}
        </div>
    );
};

const UserMessage = ({ message }) => {
    return (
        <div className="bg-[#E3F6F1] p-4 w-fit max-w-[87%] rounded-xl font-semibold mb-2 text-darker-green self-end">
            {message}
        </div>
    );
};

const Option = ({ option, messages, setMessages }) => {
    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, { type: "user", message }]);
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

export default function Chat() {
    const [messages, setMessages] = useState([
        { type: "system", message: "Hi!" },
        { type: "system", message: "I'm Aksh Bot. I'm here to help you with any questions you might have about Aksh's work." },
        { type: "system", message: "How can I help you today?" }
    ]);

    const showContact = useStore((state) => state.showContact);
    const setShowContact = useStore((state) => state.setShowContact);
    const scrollAreaRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    useEffect(() => {
        scrollAreaRef.current?.lastElementChild?.scrollIntoView();
    }, [messages]);

    return (
        <AnimatePresence>
            {showContact && ( 
            <motion.section
                className="w-[90%] sm:w-[30rem] h-[87%] fixed top-10 right-10 z-[2000] rounded-xl bg-[#ffffff80] backdrop-blur-xl shadow-[#00000033] shadow-2xl flex flex-col overflow-hidden"
                key="chat"
                initial={{ y: 15, opacity: 0 }} // Initial position and opacity
                animate={{ y: 0, opacity: 1 }}   // Animate to final position and opacity
                exit={{ y: 15, opacity: 0 }}     // Exit animation
                transition={{ duration: 0.3, ease: 'easeInOut' }} // Transition properties
            >
                <div className="bg-primary-green px-5 py-4 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <Image src="/aksh3.jpg" alt="Aksh" width={100} height={100} className="rounded-full w-[2.5rem] h-[2.5rem] object-cover origin-bottom border-primary-green border-2 border-solid" />
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
                        <div className="flex flex-col py-4">
                            {messages.map((message, index) => (
                                message.type === "system" ?
                                    <Message key={index} message={message.message} /> :
                                    <UserMessage key={index} message={message.message} />
                            ))}
                        </div>

                        <div>
                            <Option option="We'd like to hire you" messages={messages} setMessages={setMessages} />
                            <Option option="Just saying Hello!" messages={messages} setMessages={setMessages} />
                            <Option option="Looking for Aksh's contact information" messages={messages} setMessages={setMessages} />
                            <Option option="Download Resume" messages={messages} setMessages={setMessages} />
                        </div>
                    </div>
                </ScrollArea>
            </motion.section>
            )
            }
        </AnimatePresence>
    );
}
