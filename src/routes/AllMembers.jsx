import MemberCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/member-items/MemberCard";
import CardView from "../components/ui-components/CardView";

import { useSelector } from "react-redux";

export default function AllMembers() {

  const membersData = useSelector((state) => state.members);

  console.log(membersData);

  return (
    <CardView title={`All Members`}>
      {membersData.map((member) => (
        <MemberCard key={member.id} img={member.img} name={member.name} />
      ))}
    </CardView>
  );
}