import './App.css';
import { useState } from 'react';


function App() {

    const [ inputValues, setInputValues ] = useState({left: '#ffff00', right: '#000044', extra: '#ab1313'})
   
    const [ backgroundImage, setBackgroundColor ] = useState(`linear-gradient(180deg, '#ffff00', '#000044')`)

    const handleChange = function(event) {
      console.log('>>>>', event.target.value)
      setInputValues(prevState => {
        return {...prevState, [event.target.name]: event.target.value}
      })
    }


    // setInputValues(prevState => {
    //   const l = ''
    //   const r = ''
    //   const obj = {
    //     leftInputColor: l,
    //     rightInputColor: r
    //   }
    //   if (event.target.name === 'left') {
    //     l = event.target.value
    //     r = prevState.rightInputColor
    //     return obj
    //   } else {
    //   const obj = {
    //     l = prevState.leftInputColor
    //     r = event.target.value
    //     return obj
    //   }
    //   return obj
    // }})





    // const handleChangeLeft = function(event) {
    //   setLeftInputColor(event.target.value)
    // }
    // const handleChangeRight = function(event) {
    //   setRightInputColor(event.target.value)
    // }

    

    const onSubmit = function(event) {
      event.preventDefault()
      console.log(Object.values(inputValues).join(', '))
      setBackgroundColor(`linear-gradient(180deg, ${Object.values(inputValues).join(', ')})`)
    }


    // left = leftInputColor
      // right = rightInputColor
      // const gradient = {
      //   background: `linear-gradient(180deg, ${leftInputColor}, ${rightInputColor})`
      // }

    // const buttons = [
    //   {
    //     class: 'left-input',
    //     name: 'left'
    //   },
    //   {
    //     class: 'right-input',
    //     name: 'right'
    //   }
    // ]



  return (
    <div className="App" style={{backgroundImage}}>
      <div>
      <form onSubmit={onSubmit}>

          {Object.entries(inputValues).map(([inputName, value]) => (
            <div className={inputName} key={inputName}>
              <input
                
                type='text'
                value={value}
                name={inputName}
                onChange={handleChange}
              />
            </div>
          ))}

          {/* <div className='left-input'>
                  <input 
                    type='text'
                    value={inputValues.left}
                    name='left'
                    onChange={handleChange}
                  />
          </div>
          <div className='right-input'>
                  <input 
                    type='text'
                    value={inputValues.right}
                    name='right'
                    onChange={handleChange}
                  />
          </div> */}
          <div className='go'>
                <button
                  type='submit'
                > go
                </button>
          </div>
          </form>
      </div>
      
    
    </div>
  );
}

export default App;
