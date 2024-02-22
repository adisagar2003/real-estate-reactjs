import React from 'react'
import ValueImage from "../../assets/images/value.png";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from "../../utils/accordion";

import "./Value.css";
import { MdOutlineArrowDownward } from 'react-icons/md';
function Value() {
  return (
    <section className='v-container'>
        <div className='wrapper'>
            <div className='v-content'>
                <div className='v-left'>
                    <img className="image-container" src={ValueImage} width={100} height={100}/>
                </div>
                <div className='v-right'>
                    <h3>Our Value</h3>
                    <h2>Value We Give to You</h2>
                    <span>We always ready to help by providing the best services for you.
                    We beleive a good blace to live can make your life better</span>
                    <Accordion className='accordion'>
                        {
                            data.map((item , i )=> {
                                return (<AccordionItem className='accordion-item' key={i}>
                                <AccordionItemHeading >
                                    <AccordionItemButton className='accordion-button'>
                                        <div className="accordion-icon" key={i} uuid={i}>
                                            {item.icon}
                                        </div>
                                        <span className='accorion-heading'>
                                            {item.heading}
                                        </span>
                                        <div className='accordion-icon'>
                                            <MdOutlineArrowDownward size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondary-text'>{item.detail}</p>
                                </AccordionItemPanel>
                                </AccordionItem>
                                    )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Value