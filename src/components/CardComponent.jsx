import { Card,CardBody,CardTitle,CardSubtitle,CardText } from "reactstrap";
import { MyContext } from '../context/MyContext';
import {React, useContext} from "react";
import { Link } from "react-router-dom";

const CardComponent = () => {
  const {data} = useContext(MyContext);
    return(
      <div className="cards">
         {
        (
          data?.map((item) => {
          return(
            <div className="one-card">
            <Link to={`/${item.id}`}>
              <Card 
            style={{ width: '23rem' }}>
             <img
              alt="item-image"
              src={item.fields.image[0].url}
        />
        <CardBody className="card-text">
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {item.fields.name}
          </CardSubtitle>
          <CardText>
            {item.fields.price}
          </CardText>
        </CardBody>
      </Card>
      </Link>
            </div>
            
)}))
          }
      </div>
    )
}

export default CardComponent;
