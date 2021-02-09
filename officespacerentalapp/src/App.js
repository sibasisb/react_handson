import logo from './logo.svg';
import './App.css';

function App() {
  const heading="Office Space";
  const officeObject={name:"DBS",rent:50000,address:"Chennai"};
  const officeList=[officeObject,
  {name:"IBM",rent:50000,address:"Jaipur"},
  {name:"CTS",rent:50000,address:"Bengaluru"},
  {name:"TCS",rent:50000,address:"Kolkata"}];
  const imageAttribute=<img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="300" width="300" alt="Office space image"/>;
  return (
    <div className="App">
      <h1>{heading}, at Affordable Range </h1>
      {officeList.map((office)=>{
        return (
          <div class="tile">
            <div>
            {imageAttribute}
            </div>
            <div>
              <h1>Name : {office.name} </h1>
            </div>
            <div>
              {
                (office.rent>=60000)?<font color="green">Rent : {office.rent}</font>:<font color="red">Rent : {office.rent}</font>
              }
            </div>
            <div>
              Address : {office.address}
            </div>
          </div>  
        )
      })}

    </div>
  );
}

export default App;
