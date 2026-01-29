import Image from "next/image";

const team = [
  {
    name: "Marko Marković",
    position: "CEO",
    image: "https://www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/personal1.jpg"
  },
  {
    name: "Ana Anić",
    position: "CFO",
    image: "https://www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/personal1.jpg"
  },
  {
    name: "Slavko Slavić",
    position: "CTO",
    image: "https://www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/personal1.jpg"
  },
  {
    name: "Branimir Branković",
    position: "CMO",
    image: "https://www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/personal1.jpg"
  },

]

const Team = () => {
  return (
    <div id="o-nama">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-3">dm<sup>2</sup> tim</h2>
        <p className="mb-7">Naše iskustvo stoji iza našeg uspeha i Vašeg profita.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {team.map((member, index) => (
            <div key={index} className="overflow-hidden rounded-xs">
              <img className="border border-b-0 border-zinc-300" src={member.image} alt={member.name} />
              <div className="p-3 bg-[#242424] text-white h-full">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;