import { DealsGroup } from "../";

import {
  AddOutlined,
  EqualizerOutlined,
  FormatAlignJustifyOutlined,
  PaidOutlined,
} from "@mui/icons-material";
import "./create-deal.css";

const CreateDeal = () => {
  return (
    <div className="create-deal">
      <div className="main-section">
        <div className="deal-btns">
          <ul>
            <li className="list-item">
              <EqualizerOutlined />
            </li>
            <li className="list-item">
              <FormatAlignJustifyOutlined />
            </li>
            <li className="list-item">
              <PaidOutlined />
            </li>
          </ul>
          <button className="deal-btn">
            <AddOutlined />
            Deal
          </button>
        </div>
      </div>
      <DealsGroup />
    </div>
  );
};

export default CreateDeal;
