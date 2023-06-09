import {Form,Row, FormGroup, Col, Label, Input, Button } from 'reactstrap'


const CheckoutForm = ({toggleModal}) => {
    return(
        <Form className='form'>
  <Row>
    <Col md={6}>
      <FormGroup>

        <Label for="exampleEmail" >
          Email:
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Confirm email:
        </Label>
        <Input
          id="examplePassword"
          name="confirmEmail"
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Full Name
    </Label>
    <Input
      id="exampleAddress"
      name="address"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleAddress2">
      Address 
    </Label>
    <Input
      id="exampleAddress2"
      name="address2"
      placeholder="Please include your apartment # & floor"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          Card Number
        </Label>
        <Input
          id="exampleCity"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          Card Expiration Date
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          SEC
        </Label>
        <Input
          id="exampleZip"
          name="zip"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      I agree with terms & conditions
    </Label>
  </FormGroup>
  <Button>
    Proceed Payment
  </Button>
</Form>
    )
}


export default CheckoutForm;