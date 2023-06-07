import moment from "moment/moment";

import {
  ApartmentOutlined,
  EditOutlined,
  ExpandMoreOutlined,
  FlagOutlined,
  PaidOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import "./deal.css";

const Deal = ({ data, id }) => {
  return (
    <div className="deal">
      {data.map((item) => {
        if (item?.id == id) {
          const d = moment(new Date(item?.add_time)).format("MMM DD, YYYY");
          const arr = (item?.person_name).split(" ");

          return (
            <>
              <div className="summary">
                <button>
                  <ExpandMoreOutlined /> Summary
                </button>
                <p className="value">
                  <PaidOutlined />
                  {item?.formatted_value}
                </p>
                <p>
                  <EditOutlined />
                  Add label
                </p>
                <p>
                  <FlagOutlined />
                  Set expected close date
                </p>
                <p className="summary-info">
                  <PersonOutlined />
                  {item?.person_name}
                </p>
                <p className="summary-info">
                  <ApartmentOutlined />
                  {item?.org_name}
                </p>
              </div>
              <div className="details"></div>
              <div className="person">
                <button>
                  <ExpandMoreOutlined /> Person
                </button>
                <div className="ul-groups">
                  <ul>
                    <li>
                      <PersonOutlined />
                    </li>
                    <li>Label</li>
                    <li>Last name</li>
                    <li>First name</li>
                    <li>Phone</li>
                    <li>Email</li>
                  </ul>

                  <ul>
                    <li>{item?.person_id?.name}</li>
                    <li>-</li>
                    <li>{arr.length === 2 ? arr[0] : "-"}</li>
                    <li>{arr.length === 2 ? arr[1] : arr[0]}</li>
                    <li>{item?.person_id?.phone[0]?.value}</li>
                    <li>{item?.person_id?.email[0]?.value}</li>
                  </ul>
                </div>
              </div>

              <div className="organization">
                <button>
                  <ExpandMoreOutlined /> Organization
                </button>
                <div className="ul-groups">
                  <ul>
                    <li>
                      <ApartmentOutlined />
                    </li>
                    <li>Label</li>
                    <li>Address</li>
                  </ul>
                  <ul>
                    <li>{item?.org_name}</li>
                    <li>-</li>
                    <li>-</li>
                  </ul>
                </div>
              </div>

              <div className="overview">
                <button>
                  <ExpandMoreOutlined /> Overview
                </button>
                <div className="overview-info">
                  <div>
                    <p>Deal age</p>
                    <p>Inactive (days)</p>
                    <p>Created</p>
                  </div>
                  <div>
                    <p>2 days</p>
                    <p>1</p>
                    <p>{d}</p>
                  </div>
                </div>
                <div className="contentHeight"></div>
              </div>
            </>
          );
        } else return null;
      })}
    </div>
  );
};

export default Deal;
