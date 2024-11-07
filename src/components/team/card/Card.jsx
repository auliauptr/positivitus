import './card.scss';
import { FaLinkedinIn } from 'react-icons/fa';

const Card = ({ item }) => {
    return (
        <div className='team__card'>
            <div className='tc__top'>
                <div className='tc__img'>
                    <img src={item.img} alt='' />
                </div>
                <div className='tc__identity'>
                    <span className='tc__name'>{item.name}</span>
                    <span className='tc__job'>{item.job}</span>
                </div>
                <div className='tc__link'>
                    <FaLinkedinIn className='icon' />
                </div>
            </div>
            <hr />
            <div className='tc__bottom'>
                <p>{item.about}</p>
            </div>
        </div>
    );
};

export default Card;
