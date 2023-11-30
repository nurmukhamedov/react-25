import ComponentMainC from "./ComponentMainC"

const ComponentMainB = (props) => {
    return (
        <div>
            B
            <ComponentMainC name={props.name} />
        </div>
    )
}

export default ComponentMainB