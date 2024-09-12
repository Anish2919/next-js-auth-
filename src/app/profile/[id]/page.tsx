
const UserProfile = ({params}:{id: string}) => {
  return (
    <div>
        <h1>User Profile</h1>
        <p>user id: { params.id }</p>
    </div>
  )
}

export default UserProfile