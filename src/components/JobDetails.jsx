import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData()
    const {_id, title, company, company_logo, description, requirements, location, salaryRange } = job;

    return (
        <div>
            
        </div>
    );
};

export default JobDetails;