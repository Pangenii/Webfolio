const SkillButton = ({ name }) => {
  return (
    <div className="px-5 sm:px-4 py-2 border-3 rounded-xl text-xs font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer md:text-sm">
      {name}
    </div>
  );
};

const SkillsCard = () => {
  return (
    <div className="items-center border-2 border-dashed text-black border-black rounded-2xl p-6 mx-auto sm:mr-[10%] sm:ml-0 my-[8%] ">
      <div className="mb-6">
        <h2 className="text-sm sm:text-2xl font-bold tracking-widest uppercase mb-3">
          Languages
        </h2>

        <div className="flex flex-wrap gap-4">
          <SkillButton name="JavaScript" />
          <SkillButton name="C++" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm sm:text-2xl font-bold tracking-widest uppercase mb-6">
          Web Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillButton name="React.js" />
          <SkillButton name="Node.js" />
          <SkillButton name="MongoDB" />
          <SkillButton name="Express.js" />
          <SkillButton name="Redis" />
          <SkillButton name="PostgreSQL" />
        </div>
      </div>

      <div>
        <h2 className="text-sm sm:text-2xl font-bold tracking-widest uppercase mb-6">
          DevOps & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillButton name="Docker" />
          <SkillButton name="Git" />
          <SkillButton name="Github" />
          <SkillButton name="Bitbucket" />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
