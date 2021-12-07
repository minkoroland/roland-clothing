import "./profile.styles.scss";

const ProfilePage = () => {
  return (
    <div className="main">
      <div className="data">
        <p>Name: Minkó Roland</p>
        <p>Favourite actor: Mucsi Zoltán</p>
        <p>Pictures:</p>
          <img className="picture" src="https://kapa.hu/img/termek/10.jpg" alt="roland" />
          <img className="picture" src="https://media.port.hu/images/000/118/757.jpg" alt="mucsi" />
      </div>
    </div>
  );
};

export default ProfilePage;
