import React from "react";
function Education({ education }) {
return (
<div className="card p-3 m-2">
<h5>Education</h5>
{education.map((edu, index) => (
<div key={index}>
<h6>{edu.degree}</h6>
<p>{edu.college} ({edu.year})</p>
</div>
))}
</div>
);
}
export default Education;