import Headings from '../headings/Headings';
import Card from './card/Card';
import data from '../../data/teamData.js';
import './team.scss';
import { useEffect, useState } from 'react';

const Team = () => {
    const [open, setOpen] = useState(false);
    const [visibleCard, setVisibleCard] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setVisibleCard(4);
            } else if (window.innerWidth <= 850) {
                setVisibleCard(4);
            } else {
                setVisibleCard(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='team'>
            <Headings
                main='Team'
                sub='Meet the skilled and experienced team behind our successful digital marketing strategies'
                widthSub={473}
            />
            <div className={`team__cards ${open && 'btn__position'}`}>
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`cards ${
                            open || index < visibleCard ? 'show' : ''
                        }`}
                    >
                        <Card item={item} />
                    </div>
                ))}
            </div>
            <button className='team__btn' onClick={() => setOpen(!open)}>
                {open ? 'Hide team' : 'See all team'}
            </button>
        </div>
    );
};

export default Team;
