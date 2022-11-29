import { useParams } from "react-router";

const IdTest = (props) => {
    const {id} = useParams();
    return <div><h1>id Test {id}</h1></div>
}

export default IdTest;