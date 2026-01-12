const personalInfo = {
  name: "Amit",
  age: 21
};

const jobInfo = {
  role: "Developer",
  company: "Google"
};


export default function Info(){
    let merged = {
        ...personalInfo,
        ...jobInfo
    }
    const {name, age, role, company} = merged;
    console.log(name, age, role, company);
    // return (
    //     <>
    //     // <div>
    //     //     <h1>Name: {name}</h1>
    //     //     <h2>Age: {age}</h2>
    //     //     <h2>Role: {role}</h2>
    //     //     <h2>Company: {company}</h2>
    //     // </div>
    //     {/* </> */}
    // )
}