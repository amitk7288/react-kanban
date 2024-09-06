import MemberCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/member-items/MemberCard";
import CardView from "../components/ui-components/CardView";

export default function AllMembers() {

  return (
    <CardView title={`All Members`}>
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </CardView>
  );
}
