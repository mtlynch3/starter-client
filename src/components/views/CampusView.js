

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl}/>
      <p> {campus.address} </p>
      <p>{campus.description}</p> 
      {campus.students.length == 0 ?
      <p> There are no students currently at this campus </p> :
      <div>
      <p> Students: </p> 
            <ul>
            {campus.students.map( student => {
              let name = student.firstname + " " + student.lastname;
              return (
                <li key={student.id}>{name}</li>
              );
            })}
            </ul>
            </div>
      }
    </div>
  );

};

export default CampusView;
