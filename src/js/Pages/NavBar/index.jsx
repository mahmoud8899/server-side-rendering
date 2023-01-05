import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiBasket, BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { TheCloseAndOpen, initialState } from "../../Components/Response";
import LoginScreen from "../LogoinScreen/LoaginScrren";
import { FunctionLogout } from "../../../redux/features/AuthAction";


import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  // it is a open logoinscreen
  const [show, setShow] = useState(initialState);

  const navigation = useNavigate()

  // open and close logginscreen
  const TheCheckoutScreen = () => TheCloseAndOpen(show, setShow);

  // get user info
  const Auth = useSelector((state) => state.auth?.userInfo?.firstname);
  const dispatch = useDispatch();

  const Testx = () => {
    console.log("click...");

    dispatch(FunctionLogout());
  };



  return (
    <Container fluid className="background-coloranther box-shadow padding-half">
      <Row>
        <Col xs={12} sm={10} md={10} lg={10}>
          <div className="flexRow Align-items justify-content-between" >
            <h1  className="cursor TitleFontSize" onClick={() => navigation('/')}  > Food Desgin </h1>
            <div className="cursor flex  flexreverse Align-items">
              {!Auth ? (
                <div
                  onClick={TheCheckoutScreen}
                  className="background-Color whitecolor border-radius padding-half marginright"
                >
                  logo in
                </div>
              ) : (
                <div
                  onClick={Testx}
                  className="background-Color whitecolor border-radius padding-half marginright"
                >
                  logo out
                </div>
              )}

              <BiBasket className="Icons marginright" />
              <BiSearchAlt2 className="Icons " />
            </div>
          </div>
        </Col>
      </Row>

      {show?.open && <LoginScreen show={show} setShow={setShow} />}
    </Container>
  );
}
