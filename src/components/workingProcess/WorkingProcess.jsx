import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Headings from '../headings/Headings';
import data from '../../data/workingProcess';
import './workingProcess.scss';

const WorkingProcess = () => {
    const [open, setOpen] = useState(null);
    const textRef = useRef(null);

    const handleToggle = (num) => {
        if (open === num) {
            setOpen(null);
        } else {
            setOpen(num);
        }
    };

    return (
        <div className='wp'>
            <Headings
                main='Working Process'
                sub='Step-by-Step Guide to Achieving Your Business Goals'
                widthSub={280}
            />
            <div className='wp__contents'>
                {data.map((item) => (
                    <div
                        className='wp__content'
                        key={item.num}
                        onClick={() => handleToggle(item.num)}
                        style={{
                            backgroundColor: `${
                                open === item.num
                                    ? 'var(--green-color)'
                                    : 'var(--grey-color)'
                            }`,
                        }}
                    >
                        <div className='wp__content-top'>
                            <div className='wp__content-title'>
                                <span>
                                    {item.num < 10 ? `0${item.num}` : item.num}
                                </span>
                                <h1>{item.title}</h1>
                            </div>
                            <div
                                className={`wp__content-btn ${
                                    open === item.num ? 'rotate' : 'rotate2'
                                }`}
                            >
                                {open === item.num ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                        <div
                            className={`wp__content-text ${
                                open === item.num ? 'open' : 'close'
                            }`}
                        >
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingProcess;
