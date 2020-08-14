import React from 'react';


const Options = (props) => {

  const sentences = [props.brand + ' is ' + props.loc + '\'s top Roofing Contractor. Contact us today to get an estimate on your next roof replacement or roof repair!',
  props.brand + ' is the leading residential roofing contractor in the ' + props.loc + ' area. Contact us today about your next roofing project!',
  'Experienced, reliable roofers near you. ' + props.brand + ' provides ' + props.loc + ' with roof repair & replacement, backed by outstanding customer service.',
  props.brand + ' is your trusted '  + props.loc +' Roofing Contractor. Whether you need roofing, siding, gutters or windows we can assist. Call for your free inspection!',
  props.brand + ' is one of ' + props.loc + '\'s leading Roofing Contractors. We specialize in everything from Residential to Commercial. Contact us today!']

  return (
      <div>
          <h2>Title & Description Option(s)</h2>
          <ul>
              {sentences.map((s) => <li>{s}</li>)}
          </ul>
      </div>
  )
}

export default Options;
