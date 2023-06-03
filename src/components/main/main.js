import {
  AttachFileOutlined,
  CallOutlined,
  DescriptionOutlined,
  EventOutlined,
  InsertInvitationOutlined,
  KeyboardArrowDownOutlined,
  MailOutlineOutlined,
  PaidOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="blocks">
        <ul>
          <li className="list-item active">
            <StickyNote2Outlined />
            <p>Notes</p>
          </li>
          <li className="list-item">
            <EventOutlined />
            <p>Activity</p>
          </li>
          <li className="list-item">
            <InsertInvitationOutlined />
            <p>Propose times</p>
          </li>
          <li className="list-item">
            <CallOutlined />
            <p>Call</p>
          </li>
          <li className="list-item">
            <MailOutlineOutlined />
            <p>Email</p>
          </li>
          <li className="list-item">
            <AttachFileOutlined />
            <p>Files</p>
          </li>
          <li className="list-item">
            <DescriptionOutlined />
            <p>Documents</p>
          </li>
          <li className="list-item">
            <PaidOutlined />
            <p>Invoice</p>
          </li>
        </ul>

        <div className="blocks-body">
          <p>Take a note, @name...</p>
        </div>
      </div>

      <div className="focus">
        <p>
          Focus <KeyboardArrowDownOutlined />
        </p>
      </div>

      <div className="focus">
        <p>
          History <KeyboardArrowDownOutlined />{" "}
        </p>
      </div>
    </div>
  );
};

export default Main;
