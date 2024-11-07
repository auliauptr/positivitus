import { useState } from 'react';
import Headings from '../headings/Headings';
import img from '../../assets/contact_img/img.png';
import star from '../../assets/contact_img/green-star.svg';
import star2 from '../../assets/contact_img/black-star.svg';
import './contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        inputRadio: 'Say Hi',
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='contact'>
            <Headings
                main='Contact Us'
                sub="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                widthSub={350}
            />
            <div className='contact__wrapper'>
                <div className='contact__form'>
                    <form className='contact__form-radio'>
                        <label>
                            <input
                                type='radio'
                                name='inputRadio'
                                className='radio__input'
                                value='Say Hi'
                                checked={formData.inputRadio === 'Say Hi'}
                                onChange={handleChange}
                            />
                            <span className='radio__checkmark'></span>
                            Say Hi
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='inputRadio'
                                className='radio__input'
                                value='Get a Quote'
                                checked={formData.inputRadio === 'Get a Quote'}
                                onChange={handleChange}
                            />
                            <span className='radio__checkmark'></span>
                            Get a Quote
                        </label>
                    </form>
                    <div className='contact__form-input'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            id='name'
                            onChange={handleChange}
                        />
                        <label htmlFor='email'>Email*</label>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor='message'>Message*</label>
                        <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='6'
                            placeholder='Message'
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
                <div className='contact__images'>
                    <div className='big'>
                        <img src={img} alt='' />
                    </div>
                    <div className='star'>
                        <img src={star} alt='' />
                    </div>
                    <div className='star2'>
                        <img src={star2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
