import MemberCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/member-items/MemberCard";
import CardView from "../components/ui-components/CardView";
import members from "/src/data/members.js";

export default function AllMembers() {

  return (
    <CardView title={`All Members`}>
      {members.map((member) => (
        <MemberCard key={member.id} img={member.img} name={member.name} />
      ))}
    </CardView>
  );
}
