import MainContainer from "../components/ui-components/MainContainer";
import TimeItem from "../components/sidebar/sidebar-menu/sidebar-menu-item/TimeItem"

export default function Time() {
  return (
    <MainContainer title={`Time`}>
      <p>This info has been hardcoded and the page has otherwise been left intentionally blank</p>
      <TimeItem />
    </MainContainer>
  );
}
