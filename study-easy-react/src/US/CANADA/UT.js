import React from 'react'
import Select from 'react-select';
import pic from './UT.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const UT = (props) => {
  var courseOptions = [
    {value: 'CS', label: "Computer Science"},
    {value: 'DS', label: "Data Science"},
    {value: 'IS', label: "Informational Sciences"}
];
const [selectedcourse,updateData]= useState("Please pick a Course");
const update = (e) =>{updateData(e.value)}
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to University of Toronto</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>The University of Toronto (UToronto or U of T) is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in Upper Canada. Originally controlled by the Church of England, the university assumed its present name in 1850 upon becoming a secular institution. As a collegiate university, it comprises eleven colleges each with substantial autonomy on financial and institutional affairs and significant differences in character and history.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div><hr/>
      <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 60,000$<br/>
          <h4>Scholarship:</h4> NO<br/>
        </ReadMore>
      
      <br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button></div>
    </>
  );
};
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "click here" : " close"}
      </span>
    </p>
  );
};
export default UT;


