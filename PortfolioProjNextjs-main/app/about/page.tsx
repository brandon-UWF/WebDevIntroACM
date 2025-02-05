import Image from "next/image";

export default function Aboutme() {
    return (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl m-6"><strong>Biography</strong></h1>
              <div className="flex flex-col md:flex-row items-center justify-center space-x-4 m-4 p-4">
                <div className="">
                  <Image src="/kw_tie_red_CROPPED.png" alt="picture of brandon hoggatt" width={300} height={300} className="rounded-full"/>
                </div>
                <p className="sm:w-4/12">
                Brandon was born in Bossier City, LA, but has little recollection of it because he was a part of a military family. Among all that changed while he had to move around, video games were constant. Realizing his passion for computers and video games, he knew he wanted to pursue a career in that field. Currently, he is pursuing a Bachelors degree of science at the University of West Florida for computer science. Aside from that, Brandon still loves to play video games, and also works as a licensed Realtor in the state of Florida. **Make this better
                </p>
              </div>
            </div>
    )
}