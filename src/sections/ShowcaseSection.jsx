const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
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
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/pStealthMsg.png" alt="StealthWebsite" />
              </div>
              <h2>Stealth Message</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/pLangTranslator.png" alt="LangTranslatorWebsite" />
              </div>
              <h2>Simple Language Translator</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;