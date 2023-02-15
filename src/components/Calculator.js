import React, { useState } from 'react'
import './calculator.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
const Calculator = () => {
  const [result, setresult] = useState("");/// to display values 
  const clickhandler = (event) => {
    setresult(result + event.target.value)
  }
  const cleardisplay = () => {  ////// to clear everything
    setresult("");
  }
  const calculate = () => {   /////// to operate
    setresult(eval(result) + " ");
  }
  const backspace = () => {
    setresult(result.slice(0, result.length - 1))  ///// delete one value at a time
  }
  return (
    <>
      <div className='calc'>
        <Container>
          <Row>
            <Col>
              <Col className=''>
                <input type="text" className='result' id='answer' placeholder='0' value={result}></input>
              </Col>
              <Col className='p-2'>
                <input type="button" value="Clear" className='button button1' onClick={cleardisplay}></input>
                <input type="button" value="%" className='button' onClick={clickhandler}></input>
                <input type="button" value="delete" className='button button1' onClick={backspace}></input>
                <input type="button" value="/" className='button' onClick={clickhandler}></input>
              </Col>
              <Col className='p-2'>
                <input type="button" value="7" className='button' onClick={clickhandler}></input>
                <input type="button" value="8" className='button' onClick={clickhandler}></input>
                <input type="button" value="9" className='button' onClick={clickhandler}></input>
                <input type="button" value="*" className='button' onClick={clickhandler}></input>
              </Col>
              <Col className='p-2'>
                <input type="button" value="4" className='button' onClick={clickhandler}></input>
                <input type="button" value="5" className='button' onClick={clickhandler}></input>
                <input type="button" value="6" className='button' onClick={clickhandler}></input>
                <input type="button" value="-" className='button' onClick={clickhandler}></input>
              </Col>
              <Col className='p-2'>
                <input type="button" value="1" className='button' onClick={clickhandler}></input>
                <input type="button" value="2" className='button' onClick={clickhandler}></input>
                <input type="button" value="3" className='button' onClick={clickhandler}></input>
                <input type="button" value="+" className='button' onClick={clickhandler}></input>
              </Col>
              <Col className='p-2'>
              <input type="button" value="00" className='button' onClick={clickhandler}></input>
                <input type="button" value="0" className='button' onClick={clickhandler}></input>
                <input type="button" value="." className='button' onClick={clickhandler}></input>
                <input type="button" value="=" className='button button1' onClick={calculate}></input>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Calculator