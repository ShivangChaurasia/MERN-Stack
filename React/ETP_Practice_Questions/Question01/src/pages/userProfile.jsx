// Build a UserProfile component that:
// Accepts name, age, and isPremium as props
// Uses prop destructuring
// Displays user details
// Shows a “Premium User ⭐” badge only if isPremium is true



export default function UserProfile(props){

    const {name, age, isPremium} =  props;

    return(
        <>
            <div className="text-center">
                <h1>{name}</h1>
                <p>Age: {age}</p>
                <p>{isPremium ? "Premium User ⭐" : "NA"}</p>
            </div>
        </>
    )

}