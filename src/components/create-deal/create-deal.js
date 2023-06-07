import { DealsGroup, Modal } from "../";

import {
  AddOutlined,
  EqualizerOutlined,
  FormatAlignJustifyOutlined,
  PaidOutlined,
} from "@mui/icons-material";
import "./create-deal.css";

const CreateDeal = ({ data, setData, open, setOpen }) => {
  return (
    <>
      <div className={`${open ? "hide" : "create-deal"}`}>
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
            <button className="deal-btn" onClick={() => setOpen(true)}>
              <AddOutlined />
              Deal
            </button>
          </div>
        </div>
        <DealsGroup data={data} />
      </div>
      {open && <Modal closeModal={setOpen} setData={setData} />}
    </>
  );
};

export default CreateDeal;
