import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import './caseStudiesMobile.scss';
import { useRef, useState } from 'react';

const CaseStudiesMobile = () => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        sliderRef.current.classList.add('active');
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        sliderRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        sliderRef.current.classList.remove('active');
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <div
            className='caseStudies__mobile'
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div
                className='caseStudies'
            >
                <div className='caseStudy__wrapper'>
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
                <div className='caseStudy__wrapper'>
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
                <div className='caseStudy__wrapper'>
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
        </div>
    );
};

export default CaseStudiesMobile;
