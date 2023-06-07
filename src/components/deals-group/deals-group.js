import { AccountCircleOutlined } from "@mui/icons-material";
import "./deals-group.css";
import { Link } from "react-router-dom";

const DealsGroup = ({ data }) => {
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
      {data.map((item) => (
        <Link to={`/deal/${item.id}`} key={item?.id}>
          <div className="deals">
            <p className="deal-title">{item?.title}</p>
            {item?.org_name && item?.person_name && (
              <p className="deal-info">
                {item.org_name}, {item.person_name}
              </p>
            )}
            <div className="deal-value">
              <AccountCircleOutlined />
              <p>{item?.formatted_value}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DealsGroup;
