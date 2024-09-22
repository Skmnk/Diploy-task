import React from "react";
import HowItWorks from "./HowItWorks";
import './styles/HowItWorks.css'

export default function HowItWorksList({datas}){
    return (
        <div className='work-container'>
            {datas.map((data, index) => (
        <HowItWorks
          key={index}
          iconSrc={data.iconSrc}
          title={data.title}
          description={data.description}
          descriptionText={data.descriptionText}
        />
      ))}
        </div>
    )
}