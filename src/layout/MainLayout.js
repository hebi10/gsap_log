import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <ul>
        <li>DeepDive</li>
        <li><Link to='/deepDive/250318'>2-1.콜백처리 - 250318</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MainLayout;