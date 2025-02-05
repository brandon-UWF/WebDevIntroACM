import Project from "@/components/project";

/* new project template
            <Project
                title="" 
                body="" 
                outcome="" 
            />
*/

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl m-8"><strong>Projects - most recent at the top</strong></h1>
            <Project
                title="Next.js Portfolio Website - this website!" 
                body="This project was mainly so that I could play around with learning Next.js. I had done the course that 
                they put out on their official site 'From React to Next.js' and I wanted to play around with something, but 
                I did not want a project that I would throw away later, so I decided to make my older raw html/CSS/js website 
                into a Next.js project, while also using tailwind, to learn both Next.js and tailwind." 
                outcome="Learn Front-end Next.js and gain some mastery over both Next.js and Tailwind CSS."
            />
            <Project
                title="MineSweeper Game - C++" 
                body="Created a terminal-based simulation of the classic MineSweeper game in C++ where users can click or flag 
                cells via commands like 'c 0 1' or 'f 0 1'. The program features recursive functionality to clear surrounding 
                cells, marking cells with the number of adjacent mines or spreading clears when safe. Users win by clearing 
                all safe cells or lose by clicking on a mine. This was incredibly challenging for me, and one of the hardest 
                things that I've done, as I had to learn minesweeper before I coded this, and I did not really understand the
                game." 
                outcome="Gained a deeper understanding of recursion and its application in solving problems that require multi-level 
                dependency resolution. I also learned it is very important to know what you are trying to code very well." 
            />
            <Project
                title="Fantasy Football Player Analyzer - Java" 
                body=" Developed a Java program that uses inheritance to model football players with specific traits based on
                their positions (e.g., RB, QB, DB). The program takes player stats as input, analyzes their performance, and 
                calculates position-specific scores, such as touchdowns for QBs. This tool provides a numerical analysis of player 
                effectiveness for fantasy football enthusiasts." 
                outcome="Learned how to effectively use inheritance and polymorphism in Java to create modular, reusable code 
                for specialized scenarios." 
            />
            <Project
                title="Personal Portfolio Website - Raw HTML/CSS/JS - https://brandon-hog.github.io/PortfolioProj/" 
                body="Built a simple yet functional personal portfolio website using raw HTML, CSS, and JavaScript, focusing on fundamental
                web development principles. The website highlights my education and projects, with basic interactive features such as 
                navigation buttons and simple styling achieved without any frameworks or libraries. Hosted the project on GitHub Pages 
                to make it publicly accessible." 
                outcome="Strengthened my understanding of elementary web development concepts, including structuring with HTML, styling
                with CSS, and adding interactivity using vanilla JavaScript. Learned how to deploy a static site and manage basic version control with Git." 
            />
        </div>
    );
}