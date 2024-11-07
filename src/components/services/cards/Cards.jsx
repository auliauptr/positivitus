import Card from '../card/Card';
import data from '../../../data/cardsData';
import './cards.scss';

const Cards = () => {
    return (
        <div className='cards'>
            {data.map((item) => (
                <>
                    <Card
                        text1={item.text1}
                        text2={item.text2}
                        img={item.img}
                        bgCard={item.bgCard}
                        bgText={item.bgText}
                    />
                </>
            ))}
        </div>
    );
};

export default Cards;
