import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import './card.scss';

const Card = ({ text1, text2, img, bgCard, bgText }) => {
    return (
        <div className='card'>
            <div
                className='card__content'
                style={{ backgroundColor: `var(${bgCard})` }}
            >
                <div className='card__content-left'>
                    <div className='card__content-title'>
                        <h3 style={{ backgroundColor: `var(${bgText})` }}>
                            {text1}
                        </h3>
                        <h3 style={{ backgroundColor: `var(${bgText})` }}>
                            {text2}
                        </h3>
                    </div>
                    <div className='card__content-link'>
                        <div
                            className='link__icon'
                            style={{
                                backgroundColor: `${
                                    bgCard === '--dark-color'
                                        ? 'white'
                                        : '#191a23'
                                }`,
                            }}
                        >
                            <HiOutlineArrowSmallRight
                                style={{
                                    color: `${
                                        bgCard === '--dark-color'
                                            ? '#191a23'
                                            : '#b9ff66'
                                    }`,
                                }}
                            />
                        </div>
                        <span
                            style={{
                                color: `${
                                    bgCard === '--dark-color'
                                        ? '#ffffff'
                                        : '#191a23'
                                }`,
                            }}
                        >
                            Learn more
                        </span>
                    </div>
                </div>
                <div className='card__content-right'>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Card;
