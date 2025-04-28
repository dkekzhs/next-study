import classes from "./TestList.module.css"
import Test from "./Test"

function TestList() {
    return (
        <ul className={classes.list}>
            <Test name="haha" id="1" />
            <Test name="haha2" id="2" />
            <Test name="haha3" id="3" />
            <Test name="haha4" id="4"/>
        </ul>
    )
}

export default TestList
