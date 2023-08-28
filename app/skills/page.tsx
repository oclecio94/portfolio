import React from "react";

interface IPropSkill {
    Name: string;
    ExpertiseValue: number;

}
const Skill: React.FC<IPropSkill> = ({ Name, ExpertiseValue }): JSX.Element => {
    return (
        <div>
            <p>{Name}</p>
            <div className="relative bg-gray-400 h-[4px] mt-2 w-[100%]">
                <div
                    className="bg-teal-600 h-[4px]"
                    style={{ width: `${ExpertiseValue}%` }}
                ></div>
            </div>
        </div>
    );
}

const DashboardSkills = (): JSX.Element => {
    return (
        <section className="w-[100%]">
            <h3 className="text-3xl text-center py-4 font-bold text-teal-600">Skills</h3>
            <div
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-2 gap-2 border-2 border-teal-600 rounded-md p-4 drop-shadow-md">

                <Skill Name="React.js" ExpertiseValue={60} />
                <Skill Name="Node.js" ExpertiseValue={70} />
                <Skill Name="Next.js" ExpertiseValue={65} />
                <Skill Name="HTML.js" ExpertiseValue={90} />
                <Skill Name="CSS.js" ExpertiseValue={80} />
                <Skill Name="Javascript" ExpertiseValue={70} />
                <Skill Name="Typescript" ExpertiseValue={50} />
                <Skill Name="C#/AspNet" ExpertiseValue={40} />
                <Skill Name="Banco de Dados" ExpertiseValue={50} />
                <Skill Name="Php" ExpertiseValue={50} />
                <Skill Name="Inglês Técnico" ExpertiseValue={50} />
            </div>
        </section>
    );
};

export default DashboardSkills;
