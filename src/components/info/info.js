import {
  AccountCircleOutlined,
  ArrowDropDownOutlined,
  MoreHorizOutlined,
  WindowOutlined,
} from "@mui/icons-material";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info-header">
        <div className="title">Title</div>

        <div className="info-right">
          <div className="user-info">
            <i>
              <AccountCircleOutlined />
            </i>
            <div className="user">
              <p className="username">Madina</p>
              <p>Owner</p>
            </div>
            <i>
              <ArrowDropDownOutlined />
            </i>
          </div>

          <button className="btn">
            1 follower <ArrowDropDownOutlined />
          </button>

          <button className="btn won">Won</button>
          <button className="btn lost">Lost</button>
          <button className="btn">
            <WindowOutlined /> <ArrowDropDownOutlined />
          </button>
          <button className="btn">
            <MoreHorizOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
