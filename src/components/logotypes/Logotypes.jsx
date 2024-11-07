import logo from '../../assets/company_logo/c_logo-1.svg';
import logo1 from '../../assets/company_logo/c_logo-2.svg';
import logo2 from '../../assets/company_logo/c_logo-3.svg';
import logo3 from '../../assets/company_logo/c_logo-4.svg';
import logo4 from '../../assets/company_logo/c_logo-5.svg';
import logo5 from '../../assets/company_logo/c_logo-6.svg';

import './logotypes.scss';

const logoArray = [logo, logo1, logo2, logo3, logo4, logo5];

const Logotypes = () => {
    return (
        <div className='logotypes'>
            <div className='logotypes__wrapper desktop'>
                {logoArray.map((item, i) => (
                    <div className='logotypes__items' key={i}>
                        <img src={item} alt='logo' />
                    </div>
                ))}
            </div>
            <div className='logotypes__wrapper mobile'>
                <div className='logo logo__top'>
                    {logoArray.slice(0, 3).map((item, i) => (
                        <div className='logotypes__items' key={i}>
                            <img src={item} alt='logo' />
                        </div>
                    ))}
                </div>
                <div className='logo logo__bottom'>
                    {logoArray.slice(3, logoArray.length).map((item, i) => (
                        <div className='logotypes__items' key={i}>
                            <img src={item} alt='logo' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Logotypes;
