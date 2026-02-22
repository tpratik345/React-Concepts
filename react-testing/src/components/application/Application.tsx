
function Application() {
  return (
    <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' />
        </div>
        <div>
            <label htmlFor='job-location'>Job Location</label>
            <select id='job-location'>
                <option value={''}>Select a country</option>
                <option value={'US'}>United States</option>
                <option value={'GB'}>United Kingdom</option>
                <option value={'CA'}>Canada</option>
                <option value={'IN'}>India</option>
                <option value={'AU'}>Australia</option>
            </select>
        </div>
        <div>
            <input type='checkbox' id='terms' />
            <label htmlFor='terms'>I agree to the terms and conditions.</label>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default Application