import { Deal, Info, Main } from "../";

import "./single-deal.css";

const SingleDeal = () => {
  return (
    <div>
      <Info />
      <div className="content-body">
        <Deal />
        <Main />
      </div>
    </div>
  );
};

export default SingleDeal;
