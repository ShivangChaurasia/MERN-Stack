import UserProfile from "./pages/userProfile";
import StudentCard from "./pages/studentCard";

export default function App(){

    let details = {
        name: "Shivang",
        age : 20,
        isPremium : true,
    }
    let student = {
        name: "Shivang",
        class: "10th Grade",
        isTopper: false
    }
    return(
        <>
            <UserProfile name = {details.name} age = {details.age} isPremium = {details.isPremium}></UserProfile>
            <StudentCard name= {student.name} grade = {student.class} isTopper = {student.isTopper}></StudentCard>
        </>
    )
}