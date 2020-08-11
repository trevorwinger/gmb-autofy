import React from 'react';


const Options = (props) => {

  const s1 = props.brand + ' is ' + props.loc + '\'s top Roofing Contractor. Contact us today to get an estimate on your next roof replacement or roof repair!';
  const s2 = props.brand + ' is the leading residential roofing contractor in the ' + props.loc + ' area. Contact us today about your next roofing project!';
  const s3 = 'Experienced, reliable roofers near you. ' + props.brand + ' provides ' + props.loc + ' with roof repair & replacement, backed by outstanding customer service.';
  const s4 = props.brand + ' is your trusted '  + props.loc +' Roofing Contractor. Whether you need roofing, siding, gutters or windows we can assist. Call for your free inspection!';
  const s5 = props.brand + ' is one of ' + props.loc + '\'s leading Roofing Contractors. We specialize in everything from Residential to Commercial. Contact us today!';

  return (
      <div>
          <h2>Title & Description Option(s)</h2>
          <ul>
            <li>{s1}</li>
            <li>{s2}</li>
            <li>{s3}</li>
            <li>{s4}</li>
            <li>{s5}</li>
          </ul>
      </div>
  )
}

export default Options;
