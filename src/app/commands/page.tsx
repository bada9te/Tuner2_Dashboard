"use client"
import BotStatus from "@/components/bot-status/BotStatus";
import BreadNav from "@/components/bread-nav/BreadNav";
import BotCommand from "@/components/command/command";
import { TypingEffect } from "@/components/typing-effect/TypingEffect";
import commands from "@/static/bot_commands.json";
import { AnimatePresence, motion } from "framer-motion";
import Masonry from 'react-masonry-css'


const breakpointColumnsObj = {
  default: 4,
  1300: 3,
  1100: 2,
  760: 1
};


export default function Commands() {
    return (
        <div className="mt-28 p-0 md:py-5 md:px-10 w-full h-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-5 bg-base-100">
            <BreadNav/>
            <BotStatus absolute/>
        
            <div className="w-full h-full flex flex-row flex-wrap items-start justify-center md:justify-start gap-5">
                <AnimatePresence>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {commands.map((command, index) => (
                            <motion.div
                                key={command.title + index}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <BotCommand
                                title={command.title}
                                description={command.description}
                                parameters={new Map(Object.entries(command.parameters))}
                                />
                            </motion.div>
                        ))}
                    </Masonry>
                </AnimatePresence>

                <div className="w-full flex items-center justify-center text-gray-300 pb-14">
                    <TypingEffect text="More commands will be added as soon as the developer will get off the couch..."/>
                </div>
            </div>
        </div>
    );
}
