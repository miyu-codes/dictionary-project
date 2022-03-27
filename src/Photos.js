import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <section>
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  className="photoLink"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.photographer}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
