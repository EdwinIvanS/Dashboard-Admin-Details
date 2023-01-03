import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Details = () => {
    const reports = [
        { title: "Orders", iconClass: "fa-bag-shopping", description: "1,235", percent: "+1.2" },
        { title: "Revenue", iconClass: "fa-money-check-dollar", description: "$35, 723", percent: "-5" },
        { title: "Sales", iconClass: "fa-sack-dollar", description: "$160,230", percent: "+20" },
    ];
    
    return(
        <div className='container-detail'>
            {
                reports.map((report, key) => (
                    <div className="d-flex" key={key}>
                        <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                                {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                        </div>
                        <div className="icon-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="icon-container rounded-circle bg-primary">
                                <i className={"bx " + report.iconClass + " font-size-24"}></i>
                                    <FontAwesomeIcon icon={`fa-solid ${report.iconClass}`} />
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Details;