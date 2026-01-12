
export default function StudentCard(props){
    const {name, grade, isTopper} = props;
    return(
        <>
        <div className="border-2">
            <h1>{name}</h1>
            <p>Class:{grade}</p>
            <p>{isTopper ? "Topper" : "NotTopper"}</p>
        </div>
        </>
    )
}