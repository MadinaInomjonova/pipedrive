import { useParams } from "react-router-dom";
import { Deal, Info, Main } from "../";

import "./single-deal.css";

const SingleDeal = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      <Info data={data} id={id} />
      <div className="content-body">
        <Deal data={data} id={id} />
        <Main />
      </div>
    </div>
  );
};

export default SingleDeal;
