import './Apper.css'

function Apper(props){
    return(
        <div className = "Apper">
            <h1>Hello Dojo</h1>
            <h2>bye</h2>
            <ul>
                <li>{props.data}</li>
                <li>{props.shalash}</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}
export default Apper;