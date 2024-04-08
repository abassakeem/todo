import React from 'react'
import gif from "./../assets/Ooyn.gif"

export default function Preloader() {
    return (
        <div className="preloader">
          <img src={gif} alt="Loading..." />
        </div>
      );
    }
