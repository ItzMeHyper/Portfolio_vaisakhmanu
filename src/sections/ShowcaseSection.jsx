import { use, useRef } from 'react';
import { gsap } from 'gsap';   
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

useGSAP(() => {
  const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        duration: 1,
        delay:0.3 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
        }
      }
    )
  })
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 }
    )
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/pDiscordBot.png" alt="DiscordBot" />
            </div>
            <div className="text-content">
              <h2>
                🤖 Your Ultimate Discord Companion — Fast, Fun & Feature-Packed
              </h2>
              <p>
                Powered by Discord.js v14, this bot brings fun, utility, music,
                moderation, and games — everything you need to boost your server
                experience!
              </p>
            </div>
          </div>
          
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/pStealthMsg.png" alt="StealthWebsite" />
              </div>
              <h2>Stealth Message</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/pLangTranslator.png" alt="LangTranslatorWebsite" />
              </div>
              <h2>Simple Language Translator</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;