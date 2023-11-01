// import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import team from "../../../../public/teamMembers.json";
function TheTeam() {
  // const url = "../../../../public/teamMembers.json";
  // const [team, setTeam] = useState([]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setTeam(data);
  //     });
  // }, []);
  // console.log(team);
  return (
    <>
      <div
        id="team"
        className="text-center border-y border-[#fff5ed] my-12 py-12 "
      >
        <h1 className="my-2 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Meet The Team
        </h1>
        <h3 className="text-[#f5a887] mb-4 md:mb-8">Our Dedicated Members</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}

export default TheTeam;
