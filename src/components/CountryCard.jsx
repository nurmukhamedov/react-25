
const CountryCard = (props) => {
    const { name, flags } = props.countryData;

    return (
        <div>
            <img src={flags.png} alt={name.common} />
            <h2>{name.common}</h2>
        </div>
    );
};


export default CountryCard;
