import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
    const {_id, title, company, company_logo, description, requirements, location, salaryRange } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="flex gap-2 items-center">
                    <figure>
                        <img
                            className="w-16"
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h4 className="text-2xl font-semibold">{company}</h4>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                        {requirements.map((skill, idx) => <p
                            className="border rounded-md text-center p-2 border-blue-500 hover:text-blue-500 hover:bg-slate-300"
                            key={idx}>{skill}</p>)}
                    </div>
                    <div className="card-actions justify-end items-center mt-2">
                        <p>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`}>
                            <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;