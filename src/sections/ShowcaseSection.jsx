const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="DiscordBot" />
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
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
