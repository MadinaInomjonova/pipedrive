import {
  AddOutlined,
  ContactPageOutlined,
  EmojiObjectsOutlined,
  ExtensionOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <p>Deals</p>
      </div>

      <div className="search">
        <div className="search-container">
          <i>
            <SearchOutlined />
          </i>
          <input type="text" placeholder="Search Pipedrive" />
        </div>
        <i>
          <AddOutlined />
        </i>
      </div>

      <div className="header-icons">
        <ul className="list">
          <li className="list-item">
            <ExtensionOutlined />
          </li>
          <li className="list-item">
            <ContactPageOutlined />
          </li>
          <li className="list-item">
            <EmojiObjectsOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
