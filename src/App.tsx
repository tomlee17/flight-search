import { useState, FormEventHandler } from 'react'
import { LabeledInput } from './LabeledInput';

function App() {
  const [depart_date, setDepartDate] = useState("");
  const [return_date, setReturnDate] = useState("");

  const searchFlight: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    /* WIP */
  }

  const handleDepartDateChange: FormEventHandler<HTMLInputElement> = (e) => {
    const new_depart_date = e.currentTarget.value;
    setDepartDate(() => new_depart_date);

    if (!return_date || new Date(return_date) < new Date(new_depart_date)) {
      setReturnDate(() => new_depart_date);
    }
  }

  return (
    <>
      <div className='flex justify-center min-h-screen w-screen bg-gradient-to-br from-sky-800 to-teal-500'>
        <div className="pt-10">
          <form className='w-full max-w-xs bg-slate-200 rounded shadow-lg px-8 pt-6 pb-8 mb-4'
            onSubmit={searchFlight}>

            <LabeledInput type="text" id="fromCity"
              labelClass="block text-gray-700 text-sm font-bold mb-2"
              inputClass="mb-2">
              From
            </LabeledInput>

            <LabeledInput type="text" id="toCity"
              labelClass="block text-gray-700 text-sm font-bold mb-2"
              inputClass="mb-2">
              To
            </LabeledInput>

            <LabeledInput type="date" id="departDate" min={new Date().toISOString().split('T')[0]}
              onChange={handleDepartDateChange}
              labelClass="block text-gray-700 text-sm font-bold mb-2"
              inputClass="mb-2">
              Departure Date
            </LabeledInput>

            <LabeledInput type="date" id="returnDate" min={depart_date}
              value={return_date}
              onChange={e => e.currentTarget.value}
              labelClass="block text-gray-700 text-sm font-bold mb-2"
              inputClass="mb-2">
              Return Date
            </LabeledInput>

            <button className='bg-green-500 px-2 mx-2 border rounded-l-xl rounded-r-xl border-black'
              type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
