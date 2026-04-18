function Header({ name, role, email, phone, location, about }) {
  return (
    <div className="card mb-4 shadow">
      <div className="card-body text-center">
        <h1 className="card-title text-primary fw-bold">{name}</h1>
        <h5 className="text-muted">{role}</h5>
        <p className="mb-1"> {email} &nbsp; &nbsp; {phone} &nbsp; &nbsp;  {location}</p>
        <hr />
        <p className="card-text">{about}</p>
      </div>
    </div>
  )
}

export default Header