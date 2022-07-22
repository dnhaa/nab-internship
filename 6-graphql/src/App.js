import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const JOB_QUERY = gql`
  {
    jobs{
      title
      company{
        logoUrl
        name
      }
      cities{
        name
      }
      remotes{
        name
      }
      tags{
        name
      }
    }
  }
`
function App() {
  const queryJobs = useQuery(JOB_QUERY);
  if (queryJobs.error){
    return <span>Error: {queryJobs.error}</span>
  }
  if (queryJobs.loading){
    return <header>Loading...</header> 
  }
  return queryJobs.data.jobs.map((item, index) => (
    <div key={index} style={{"display": "flex", "alignItems" : "center", "margin" : "5rem"}}>

    <img style={{"height" : "60px", "borderRadius" : "15px", "margin" : "1.1rem"}} src={item.company.logoUrl} />
      <div style={{"display": "flex"}}>
        
      </div>
      <div style={{"marginRight": "2rem"}}>
        {/* get jobs name */}
        <div style={{"fontSize" : "1.6rem", "fontWeight": "700"}}>{item.title}</div>

        {/* get jobs company */}
        <div style={{"fontSize" : "1.2rem"}}>{item.company.name}</div>
      </div>
      
      {/* get jobs tag */}
      <div style={{"display" : "flex", "marginLeft": "5rem", "marginRight": "5rem"}}>
        {item.tags.slice(0, 3).map(tag => (
        <div
        style={{
          "color" : "blue",
          "border" : "blue 2px solid", 
          "borderRadius": "5px",
          "fontSize" : "0.8rem", 
          "padding" : "0.5rem",
          "margin": "0.3rem"}}
          >{tag.name}</div>
      ))}</div>

      {/* get jobs cities */}
      <div style={{"display" : "flex"}}>{item.cities.map(city => (
        <div style={{"marginLeft" : "0.3rem"}}>{city.name}</div>
      ))}</div>

      { (item.remotes.length > 0 && item.cities.length > 0)?
        <div>,</div> : <div></div>
      }

      {/* get jobs remote */}
      <div>{item.remotes.map(remote => (
        <div style={{"fontStyle" : "italic"}}>{remote.name}</div>
      ))}</div>
      
    </div>
    
    
  ));

  }
    



export default App;
