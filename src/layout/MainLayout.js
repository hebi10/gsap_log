import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <ul>
        <li>DeepDive</li>
        <li><Link to='/deepDive/250318'>2-1.콜백처리</Link></li>
        <li><Link to='/deepDive/250319'>2-2.타임라인 비주얼라이저</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MainLayout;