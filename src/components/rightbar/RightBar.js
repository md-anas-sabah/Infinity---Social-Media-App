import React from "react";
import "./rightBar.scss";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/310307.jpg"
                alt=""
              />
              <span>Monkey D. Luffy</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXxHX-U8tc16xB1lV27ClD0OlRtu9T_N7xQ&usqp=CAU"
                alt=""
              />
              <span>Naruto Uzumaki</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/310307.jpg"
                alt=""
              />
              <p>
                <span>Monkey D. Luffy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/310307.jpg"
                alt=""
              />
              <p>
                <span>Monkey D. Luffy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/310307.jpg"
                alt=""
              />
              <p>
                <span>Monkey D. Luffy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cdn.myanimelist.net/images/characters/9/310307.jpg"
                alt=""
              />
              <p>
                <span>Monkey D. Luffy</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
