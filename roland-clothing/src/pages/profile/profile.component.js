import "./profile.styles.scss";
import { connect } from "react-redux";
import { selectDisplayName, selectEmail } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const ProfilePage = ({ displayName, email }) => {
  return (
    <div className="main">
      <div className="data">
        <p>Name: {displayName}</p>
        <p>Occupation: actor, plumber</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  displayName: selectDisplayName,
  email: selectEmail,
});

export default connect(mapStateToProps)(ProfilePage);
