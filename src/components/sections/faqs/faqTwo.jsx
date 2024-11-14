import React from 'react'
import FaqCard from './faqCard'
import { faqDataOne } from '../../../utils/fackData/faqDataOne'
import SectionTitle from '../services/sectionTitle'

const FaqTwo = () => {
    return (
        <section className="faq section-padding">
            <div className="shape1 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape1.png" alt="shape1" />
            </div>
            <div className="shape2 d-none d-lg-block float-bob-y">
                <img src="/images/shape/shape2.png" alt="shape2" />
            </div>
            <SectionTitle className={"text-center"}>
                <SectionTitle.Name>FAQ QUESTIONS</SectionTitle.Name>
                <SectionTitle.Title>Questions & Answers</SectionTitle.Title>
                <SectionTitle.Description>We have facility to produce advance work various industrial applications <br /> based on specially developed technol-ogy.</SectionTitle.Description>
            </SectionTitle>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="image">
                            <img src="/images/faq/01.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionExample3">
                            {faqDataOne.map(({ ans, id, question }) => <FaqCard key={id} ans={ans} id={`${id}_3`} question={question} default_show={"one_3"} parent_id={"accordionExample3"} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqTwo