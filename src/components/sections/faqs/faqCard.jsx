import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const FaqCard = ({ id, question, ans, parent_id, default_show }) => {
    return (
        <>
            <div key={id} className="accordion-item">
                <h2 className={`accordion-header`} id={id}>
                    <button className={`accordion-button ${id === default_show ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={`${id === "one" ? "true" : "false"}`} aria-controls={`collapse${id}`}>
                        {question}
                        <p>
                            <i className='plus'><FaPlus /></i>
                            <i className='minus'><FaMinus /></i>
                        </p>
                    </button>
                </h2>
                <div id={`collapse${id}`} className={`accordion-collapse collapse ${id === default_show ? "show" : ""}`} aria-labelledby={id} data-bs-parent={`#${parent_id}`}>
                    <div className="accordion-body">
                        <p>{ans}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqCard