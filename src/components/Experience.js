import React from "react";
function Experience({ experience }) {
return (
<div className="card p-3 m-2">
<h5>Experience</h5>
{experience.map((exp, index) => (
<div key={index}>
<h6>{exp.role} - {exp.company}</h6>
<p>{exp.years}</p>
</div>
))}
</div>
);
}
export default Experience;