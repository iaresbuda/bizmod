import React from "react";
import {  Button, Card, Icon, Table, Feed,Image,Form, Input, TextArea } from "semantic-ui-react";
const holder = 'data:image/jpeg;base64,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'

function TableExampleCollapsing(){

  const [vacancies, setVacancies] = React.useState([])
  const [selected, setSelected] = React.useState(0)
  const [heading, setHeading] = React.useState()
  const [Poster, setPoster] = React.useState()
  const [PosterJob, setPosterJob] = React.useState()
  const [responsibilities, setResponsibilities] = React.useState()
  const [skills, setSkills] = React.useState()
  const user = JSON.parse(localStorage.getItem('user'))
  const welcome = window.location.href.split('/')

  React.useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://saosa.herokuapp.com/api/Bizmod/get-vancies", requestOptions)
      .then(response => response.json())
      .then(result => setVacancies(result))
      .catch(error => console.log('error', error));
  })

  const apply = (id) =>{

    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json-patch+json");

    var raw = {userID:user.id,vacancyID:id};

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };

    fetch("https://saosa.herokuapp.com/api/Bizmod/apply", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const deletevac = (id) =>{

    var myHeaders = new Headers();
myHeaders.append("accept", "*/*");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://saosa.herokuapp.com/api/Bizmod/delete-vacancy?id="+id, requestOptions)
  .then(response => response.json())
  .then(result => window.location.reload())
      .catch(error => console.log('error', error));
  }

  const addVac = () => {
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json-patch+json");

    var raw = {heading:heading,responsibilities:responsibilities,skills:skills,poster:Poster,posterDesc:PosterJob};

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };

    fetch("https://saosa.herokuapp.com/api/Bizmod/add_vacancy", requestOptions)
      .then(response => response.JSON())
      .then(result => vacancies.push(result))
      .catch(error => console.log('error', error));
  }


  return (
  <div style={{ marginTop: 30,display:'flex' }}>
    <Table selectable celled='internally' style={{ width: 300 }}>
      <Table.Body>
        {
          vacancies.map((x, index) => (
            <Table.Row>
            <Table.Cell>
              <Feed onClick={() => setSelected(index)}>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name="user" size="massive" />{" "}
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      {x.poster}
                    </Feed.Summary>
                    <Feed.Extra text>
                      {x.heading}
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Table.Cell>
          </Table.Row>
          ))
        }
        {
          welcome[welcome.length-1] === "admin" ? <Table.Row>
          <Table.Cell>
            <Feed onClick={() => setSelected("add")}>
              <Feed.Event>
                <Feed.Label>
                  <Icon name="plus" size="massive" />{" "}
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    Add Vacancy
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Table.Cell>
        </Table.Row> :null
        }
      </Table.Body>
    </Table>
    <div style={{marginLeft:30}}>
      {

        selected === "add"? <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Heading'
            placeholder='Heading'
            onChange={ val => setHeading(val.target.value)}
          />
           <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Poster'
            placeholder='Poster'
            onChange={ val => setPoster(val.target.value)}
          />
           <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Poster Job Description'
            placeholder='Poster Job Description'
            onChange={ val => setPosterJob(val.target.value)}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='responsibilities'
          placeholder='responsibilities'
          onChange={ val => setResponsibilities(val.target.value)}
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='skills'
          placeholder='skills'
          onChange={ val => setSkills(val.target.value)}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Add Vacancy'
          onClick = {()=> addVac()}
        />
      </Form>:
    <Card style={{width:500, marginLeft:10}}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={holder}
        />
        <Card.Header>{vacancies.length > 0 ?vacancies[selected].poster:"" }</Card.Header>
        <Card.Meta>{vacancies.length > 0 ?vacancies[selected].posterDesc:"" }</Card.Meta>
        <Card.Description>
            <h3>{vacancies.length > 0 ?vacancies[selected].heading:"" }</h3>
            <p>
            Responsibilities <br/><br/>
            {
                vacancies.length > 0 ?vacancies[selected].responsibilities:"" 
              }<br/><br/>
Skills and Experience<br/><br/>
{
                vacancies.length > 0 ?vacancies[selected].skills:"" 
              }
            </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => apply(vacancies[selected].id)}>
            Apply
          </Button>
          {
            welcome[welcome.length-1] === "admin" ? 
            <Button basic color='red' onClick={() => deletevac(vacancies[selected].id)}>
            Delete
          </Button>:null
          }
          
        </div>
      </Card.Content>
    </Card>
    }
    </div>
    
  </div>
);
}

export default TableExampleCollapsing;
