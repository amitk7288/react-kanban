import MemberCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/member-items/MemberCard";
import CardView from "../components/ui-components/CardView";
//import members from "/src/data/members.js";

import { useSelector, useDispatch } from "react-redux";
import { addMember } from "../features/members/membersSlice";

export default function AllMembers() {

  const dispatch = useDispatch();
  const membersData = useSelector((state) => state.members);

    const handleClick = () => {
      const data = {
        id: 100,
        img: "/src/assets/members/1.jpg",
        name: "Amit",
      };
      dispatch(addMember(data));
    };

  console.log(membersData);

  return (
    <CardView title={`All Members`}>
      <button className="border" onClick={handleClick}>
        Add member test
      </button>
      {membersData.map((member) => (
        <MemberCard key={member.id} img={member.img} name={member.name} />
      ))}
    </CardView>
  );
}

// import MemberCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/member-items/MemberCard";
// import CardView from "../components/ui-components/CardView";
// import members from "/src/data/members.js";

// export default function AllMembers() {

//   return (
//     <CardView title={`All Members`}>
//       {members.map((member) => (
//         <MemberCard key={member.id} img={member.img} name={member.name} />
//       ))}
//     </CardView>
//   );
// }
