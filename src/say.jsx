import propTypes from "prop-types"

function Say(props) {
    return(
        <h1>Cacetadas {props.name}</h1>
    );
}

Say.defaultProps = {
    name : "cuzao"
}

Say.propTypes = {
    name : propTypes.string
}

export default Say;