import { AccountCircleOutlined } from "@mui/icons-material";
import "./deals-group.css";

const DealsGroup = () => {
  return (
    <div className="wrapper">
      <div className="deals-category">
        <ul>
          <li className="list-item">Qualified</li>
          <li className="list-item">Contact Made</li>
          <li className="list-item">Prospect Qualified</li>
          <li className="list-item">Needs Defined</li>
          <li className="list-item">Proposal Made</li>
          <li className="list-item">Negotiations Started</li>
        </ul>
      </div>
      <div className="deals">
        <p className="deal-title">title</p>
        <p className="deal-info">organization, contact person</p>
        <div className="deal-value">
          <AccountCircleOutlined />
          <p>$400</p>
        </div>
      </div>
    </div>
  );
};

export default DealsGroup;
