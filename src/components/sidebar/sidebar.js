import {
  AssignmentTurnedInOutlined,
  CampaignOutlined,
  ContactPageOutlined,
  EventOutlined,
  GpsFixed,
  InventoryOutlined,
  MailOutlineOutlined,
  MoreHorizOutlined,
  PaidOutlined,
  TakeoutDiningOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-items">
          <GpsFixed />
        </li>
        <li className="list-items">
          <PaidOutlined />
        </li>
        <li className="list-items">
          <AssignmentTurnedInOutlined />
        </li>
        <li className="list-items">
          <CampaignOutlined />
        </li>
        <li className="list-items">
          <MailOutlineOutlined />
        </li>
        <li className="list-items">
          <EventOutlined />
        </li>
        <li className="list-items">
          <ContactPageOutlined />
        </li>
        <li className="list-items">
          <TrendingUpOutlined />
        </li>
        <li className="list-items">
          <InventoryOutlined />
        </li>
        <li className="list-items">
          <TakeoutDiningOutlined />
        </li>
        <li className="list-items">
          <MoreHorizOutlined />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
