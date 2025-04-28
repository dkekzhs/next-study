import classes from "./Test.module.css"

function Test(props) {
    return (
        <li className={classes.post}>
            <p>{props.name} </p>
            <p> {props.id} </p>
        </li>
    );
};
export default Test;