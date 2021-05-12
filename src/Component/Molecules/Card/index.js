import React from 'react';

function Card({fullName, email, avatar}) {
    return(
    <div className="card" style={{width: "18rem"}}>
  <img src={avatar} className="card-img-top" alt="avatar" />
  <div className={fullName}>
    <p className={email}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
)
};

export default Card;