


import React, {useEffect , useState } from 'react';

import axios from 'axios';
const App = () => {
	
			const [post , setPost] = useState([]);
			const [year , setYear] = useState('');
			const [launch , setLaunch] = useState('');
			const [land , setLand ]= useState('');
		

useEffect(() => {
  //setPost(orignal.filter(item => item.launch_year == byOrigin ))
  handleResultFilter();
}, [year,launch,land]);
//setActive(!isActive);

const handleResultFilter = ()=> {
const url = year + launch + land;
	axios.get(`https://api.spacexdata.com/v3/launches?limit=100${url}`).then(res => {
	
	setPost(res.data);
 //setOrignal(res.data)
		   })
		   .catch(err => {
			   console.log(err)
		   });

  return () => {
	
  };
}

//year filter funtion
const HandleYearFilter = (param, event) => {

const elems = document.querySelector(".year-btns .active");
HandleFilterButtons(event, elems);
  
//push the param into state
	 setYear(param);
	handleResultFilter();
	
}



// launch Filter function
const HandleLaunchFilter =(param , event) => {
	const elems = document.querySelector(".launch-btns .active");
	HandleFilterButtons(event, elems);

   //push the param into state
	setLaunch(param);
	handleResultFilter();
	
}

// land filter function
const HandleLandFilter =(param, event) => {
	const elems = document.querySelector(".land-btns .active");
	HandleFilterButtons(event, elems);
	
	 //push the param into state
	setLand(param);
	handleResultFilter();
}

// filter button common method
const HandleFilterButtons = (event, elems) => {
	if(elems !==null){
		elems.classList.remove("active");
		elems.classList.add('btn');
	   }
	   event.target.className = "active";
}

		const ResultView = post.map(item=> {
			
			return (
				
				<div key={item.mission_name}  className='col-1'>
				<div className="card">
				<img src={item.links.mission_patch_small} style={{width:'130px', margin: '10px 25%'}} alt="Avatar" />
				<div className="container">
				  <h4><b>Misson Name:{item.mission_name}</b></h4> 
				  <p className="card-text">Launch Year  : {item.launch_year}</p>
				  <p className="card-text">Misson ID : {item.mission_id}</p>
				  <p className="card-text">Launch Success: {`${item.launch_success}`}</p>
				</div>
			  </div>
					
				</div>
			

			)
		})
return(
  
<div>
	
<div className="App"> 
<div className="grid-container">
  <div className="item1"><h1> SPACE-X LAUNCH PROGRAMS</h1></div>
  <div className="item2 ">
	 <h2>Filters</h2>
	 <div className='heading'>
		 <h4>Launch Year</h4>
	 </div>
	 <div class="year-btns">
	 <div className='buttons'>
		 <button className='btn'  onClick={(event) => HandleYearFilter('&launch_year=2014', event)}>2014</button>
		 <button className='btn'  onClick={(event) => HandleYearFilter('&launch_year=2015', event)}>2015</button>
	 </div>
	 <div className='buttons'>
		 <button className='btn' onClick={(event) => HandleYearFilter('&launch_year=2016', event)}>2016</button>
		 <button className='btn'onClick={(event) => HandleYearFilter('&launch_year=2017', event)}>2017</button>
	 </div>
	 <div className='buttons'>
		 <button className='btn'onClick={(event) => HandleYearFilter('&launch_year=2018', event)}>2018</button>
		 <button className='btn'onClick={(event) => HandleYearFilter('&launch_year=2019', event)}>2019</button>
	 </div>
	 <div className='buttons'>
		 <button className='btn'onClick={(event) => HandleYearFilter('&launch_year=2020', event)}>2020</button>
		 
	 </div>
	 </div>
	 <div className='heading'>
		 <h4>Sucessful Launch</h4>
	 </div>
	 <div class="launch-btns">
	 <div className='buttons'>
	 <button className='btn' onClick={(event) => HandleLaunchFilter('&launch_success=true', event)}>True</button>
		 <button className='btn' onClick={(event) => HandleLaunchFilter('&launch_success=false', event)}>False</button>
		 
	 </div>
</div>
	 <div className='heading'>
		 <h4>Sucessful Land</h4>
	 </div>
<div className="land-btns">
	 <div className='buttons'>
		 <button className='btn' onClick={(event) => HandleLandFilter('&land_success=true', event)}>True</button>
		 <button className='btn' onClick={(event) => HandleLandFilter('&land_success=false', event)}>False</button>
		 
	 </div>
	 </div>
  </div>
  <div className="item3 main-layout"> 
    {ResultView} 

	 
		  </div>
		  </div>  
  
  <div className="item5"> <h5>Demo purpose only by parshant</h5></div>
</div>

</div> 











)
}

export default App

