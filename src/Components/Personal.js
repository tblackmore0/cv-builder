function Personal () {
    return (
        <div className = 'card'>
            <h1>Personal Information</h1>
            <form>
                <div className = 'formSection'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' required id='firstName' />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' required id='lastName' />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='number' required id='phoneNumber' />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' />
                </div>
            </form>
        </div>
    )
}

export default Personal;