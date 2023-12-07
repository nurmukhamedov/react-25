const List = (props) => {
    const num = props.getItems();
    return (
        <div>
            {num.map(number => <div key={number}>{number}</div>)}
        </div>
    )
}

export default List