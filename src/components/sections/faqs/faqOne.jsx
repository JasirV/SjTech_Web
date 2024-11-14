import React from 'react'
import { faqDataOne } from '../../../utils/fackData/faqDataOne'
import FaqCard from './faqCard'
import { faqDataTwo } from '../../../utils/fackData/faqDataTwo'

const FaqOne = () => {
    return (
        <section className="faq section-padding sub-bg">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionExample">
                            {faqDataOne.map(({ ans, id, question }) => <FaqCard key={id} ans={ans} id={id} question={question} default_show={"one"} parent_id={"accordionExample"} />)}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionExample-two">
                            {faqDataTwo.map(({ ans, id, question }) => <FaqCard key={id} ans={ans} id={id} question={question} default_show={"2_five"} parent_id={"accordionExample-two"} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqOne