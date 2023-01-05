import React from 'react'
import Modal from 'react-bootstrap/Modal'
import TheButton from '../../Components/Button'
import { TheCloseAndOpen } from '../../Components/Response'
import TheInput from '../../Components/TheInput'
import { useDispatch } from 'react-redux'
import { loginInAction } from '../../../redux/Api/Auth'




export default function LoginScreen(props) {
  const { show, setShow } = props



  // open and close logginscreen
  const TheCheckoutScreen = () => TheCloseAndOpen(show, setShow);




  const dispatch = useDispatch()





  const Submit = () => {
    console.log('show me result', 'email' + show.email, 'password' + show.password)

    const sendData = {
      email: show?.email,
      password: show?.password
    }

    dispatch(loginInAction(sendData))
  }

  return (
    <Modal show={show} onHide={TheCheckoutScreen}>
      <Modal.Header closeButton>
        <Modal.Title>Logo in</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <TheInput
          Title='your email'
          Type='email'
          placeholder='Enter email'
          value={show?.email}
          onChange={(e) => setShow({ ...show, email: e.target.value })}

        />


        <TheInput
          Title='your password'
          Type='password'
          placeholder='Enter password'
          value={show?.password}
          onChange={(e) => setShow({ ...show, password: e.target.value })}

        />

        <TheButton
          Title='logo in'
          ClassName="background-Color width whitecolor  padding-half border-half  Button margin-Top cursor"
          // disabled={!TheValidation(show?.email) || !TheValidation(show?.password)}
          onClick={Submit}

        />


      </Modal.Body>
    </Modal>
  )
}