import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4 m-4">
      <h1 className="text-3xl"><strong>Welcome to my Portfolio Website!</strong></h1>
      <p className="p-4 m-4 md:w-8/12">
        This is my official website, and is in progress right now. I am currently using it 
        to learn more about Next.js, and improve my skills. I'm always looking for a challenge,
        so whether you are a potential employer, classmate, or anything else, welcome! For more
        information regarding who I am and what I enjoy, see the About page. If you're curious about
        my GPA or where I've been to school, check out the education page, and lastly if you want 
        to know more about what I am wokring on right now, take a look at the projects page. I have left
        my contact information in the footer, so if you're looking to reach me that is the best way.
      </p>
      {/* just putting in some random fillers */}
      <h2 className="md:text-xl">Fun Facts about me:</h2>
      <ul className=" list-disc md:w-8/12">
        <li className="m-4">
          I've been exploring a variety of programming tools and languages like <strong>C++</strong>, 
          <strong> Java</strong>, <strong>Python</strong>, <strong>SQL</strong>, and recently <strong>Next.js</strong>.
         I'm also planning to learn <strong>TypeScript</strong> and dive deeper into <strong>AI</strong> soon.  
        </li>
        <li className="m-4">
          I'm still building my skills, but I've enjoyed working on things like ICPC,
          figuring out <strong>difficult coding problems</strong>, and learning about <strong>backtracking 
          algorithms</strong>.  
        </li>
        <li className="m-4">
          On the side, I've been optimizing how to farm XP in <strong>Minecraft Java Edition</strong>. It's 
          fun to find efficient strategies in both gaming and programming. I love to play video games and am
          always looking for good new games.  
        </li>
        <li className="m-4">
          One of my class assignments involved designing circuits to convert inputs to binary outputs, and 
          it's been rewarding to apply logic in that way.  
        </li>
        <li className="m-4">
          I also feel fortunate to have an internship lined up with the <strong>Guided Weapons Evaluation Facility </strong>
          at Eglin Air Force Base this summer.  
        </li>
        <li className="m-4">
          Recently, I've been getting more comfortable with <strong>Next.js</strong> and that is even what this site is using!  
        </li>
        <li className="m-4">
          I'm hosting a <strong>Minesweeper server</strong>, which has been a fun way to combine programming with games.  
        </li>
        <li className="m-4">
          I'm always trying to learn something new, like <strong>Tailwind CSS</strong> or using 
          <strong> cool templates</strong> in Next.js. It's a work in progress, but I enjoy the challenge.  
        </li>
      </ul>
    </div>
  );
}
