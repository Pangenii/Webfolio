const SkillButton = ({ name }) => {
  return (
    <div className="px-4 py-2 border-3 rounded-xl text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
      {name}
    </div>
  );
};

const SkillsCard = () => {
  return (
    <div className="border-2 border-dashed text-black border-black rounded-2xl p-6 mr-[10%] my-[8%]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-2 ">
          Languages
        </h2>

        <div className="flex flex-wrap gap-4">
          <SkillButton name="JavaScript" />
          <SkillButton name="C++" />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-6">
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
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-6">
          DevOps & Architecture
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillButton name="Docker" />
          <SkillButton name="Microservices" />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
