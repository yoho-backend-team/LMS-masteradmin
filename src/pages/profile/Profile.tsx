import User from '../../assets/Profile/User.png'

function Profile() {
  return (
    <div>
      <div>
        <button className='bg-[#68B39F] flex justify-center items-center'> <img src={User} alt="user" className='h-8' /> <span>Account</span> </button>
      </div>
      <div></div>
    </div>
  )
}

export default Profile