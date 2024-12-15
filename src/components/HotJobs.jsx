import JobCard from "./JobCard";
import { useEffect, useState } from "react";


const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;