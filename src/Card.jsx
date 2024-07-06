import profilPic from "./assets/pb.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilPic} alt="profil picture"></img>
      <h2 className="card-title">Reiner</h2>
      <p className="card-text">I learn React and play video games</p>
    </div>
  );
}

export default Card;
