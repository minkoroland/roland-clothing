import "./profile.styles.scss";

const ProfilePage = () => {
  return (
    <div className="main">
      <div className="data">
        <p>Name: Mucsi Zoltán</p>
        <p>Occupation: actor, plumber</p>
        <p>Pictures:</p>
          <img className="picture" src="https://media.port.hu/images/000/118/757.jpg" alt="mucsi" />
      </div>
    </div>
  );
};

export default ProfilePage;
