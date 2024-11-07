import './headings.scss';

const Headings = ({ main, sub, widthSub }) => {
    return (
        <div className='headings'>
            <h2 className='main__heading'>{main}</h2>
            <p className='sub__heading' style={{ width: `${widthSub}px` }}>
                {sub}
            </p>
        </div>
    );
};

export default Headings;
