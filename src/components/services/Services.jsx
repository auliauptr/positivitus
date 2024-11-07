import Headings from '../headings/Headings';
import Cards from './cards/Cards';
import './services.scss';

const Services = () => {
    return (
        <div className='services'>
            <Headings
                main='Services'
                sub='At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:'
                widthSub={520}
            />
            <Cards />
        </div>
    );
};

export default Services;
