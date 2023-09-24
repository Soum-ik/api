export default function Squear(props) {
    return (
        <div onClick={props.onclick} style={{
            border: "1px solid black",
            width : "100%",
            height : "70px",
            display :"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>{props.value}</h1>
        </div>
    );
}