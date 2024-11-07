import Headings from '../headings/Headings';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import './caseStudies.scss';
import CaseStudiesMobile from './CaseStudiesMobile';

const CaseStudies = () => {
    return (
        <div className='caseStudies'>
            <Headings
                main='Case Studies'
                sub='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
                widthSub={520}
            />
            <div className='caseStudies__block'>
                <div className='caseStudy'>
                    <p className='caseStudy__text'>
                        For a local restaurant, we implemented a targeted PPC
                        campaign that resulted in a 50% increase in website
                        traffic and a 25% increase in sales.
                    </p>
                    <div className='caseStudy__link'>
                        <span>Learn more</span>
                        <HiOutlineArrowSmallRight className='arrow__icon' />
                    </div>
                </div>
                <div className='caseStudy'>
                    <p className='caseStudy__text'>
                        For a B2B software company, we developed an SEO strategy
                        that resulted in a first page ranking for key keywords
                        and a 200% increase in organic traffic.
                    </p>
                    <div className='caseStudy__link'>
                        <span>Learn more</span>
                        <HiOutlineArrowSmallRight className='arrow__icon' />
                    </div>
                </div>
                <div className='caseStudy'>
                    <p className='caseStudy__text'>
                        For a national retail chain, we created a social media
                        marketing campaign that increased followers by 25% and
                        generated a 20% increase in online sales.
                    </p>
                    <div className='caseStudy__link'>
                        <span>Learn more</span>
                        <HiOutlineArrowSmallRight className='arrow__icon' />
                    </div>
                </div>
            </div>

            <div className='caseStudy__slider'>
                <CaseStudiesMobile />
            </div>
        </div>
    );
};

export default CaseStudies;
