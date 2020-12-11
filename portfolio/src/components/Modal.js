import React from "react";
import Popup from "reactjs-popup";
import "../Styles/Modal.css"

const Modal = props => {

    return(
        <Popup
        trigger={<button className="button1"> What is this? </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <div className="header"><h3>{props.content.title}</h3> </div>
            <div className="content">
                <p>
                    {props.content.topText}   
                </p>
              <br/>
              <p>
                {props.content.bottomText}
              </p>
            </div>
            <div className="actions">
              <button
                className="button2"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Got It!
              </button>
            </div>
          </div>
        )}
      </Popup>
    )
}

export default Modal;