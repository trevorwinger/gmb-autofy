import React from 'react';


const Options = (props) => {

  const sentences = [props.brand + ' is ' + props.loc + '\'s top Roofing Contractor. Contact us today to get an estimate on your next roof replacement or roof repair!',
  props.brand + ' is the leading residential roofing contractor in the ' + props.loc + ' area. Contact us today about your next roofing project!',
  'Experienced, reliable roofers near you. ' + props.brand + ' provides ' + props.loc + ' with roof repair & replacement, backed by outstanding customer service.',
  props.brand + ' is your trusted '  + props.loc +' Roofing Contractor. Whether you need roofing, siding, gutters or windows we can assist. Call for your free inspection!',
  props.brand + ' is one of ' + props.loc + '\'s leading Roofing Contractors. We specialize in everything from Residential to Commercial. Contact us today!', 
  props.brand + ' is the leader in Shingle Roof Replacement for ' + props.loc + 'areas. Contact us and schedule your estimate today!', 
  'Are you looking to permanently replace your roof for the last time? '+  props.brand +' has you covered! Contact us today about our Metal Roofing Services!', 
  'For a quality roof repair in ' + props.loc + ' and the surrounding areas, call' +  props.brand +'. We fix roofs with precision and care.', 
  'Having an expert perform an in-depth roof inspection can save both your roof & your wallet. Contact ' + props.brand + ' today!', 
  'For a roof replacement in ' + props.loc + ' completed using quality materials and the best in workmanship and customer care, call ' + props.brand, 
  props.brand + ' offers a wide variety of roof maintenance and roof repair services to help protect your home or business\'s roof before bigger problems arise.', 
  'A roof leak can cause serious damage to your home or business. ' + props.brand + ' offers reliable and prompt roof leak repairs around ' + props.loc, 
  props.brand + ' provides roof replacement in the ' + props.loc + '. You can count on integrity, hard work, and quality craftsmanship.', 
  props.brand + ' is the trusted name for high-quality shingle roof replacements in ' + props.loc + '. Contact us today to learn more!', 
  props.brand + ' is the leading Roofing Contractor offering Roof Repair Services in the ' + props.loc + ' area. Contact us for a free roof inspection!',
  'We work with your insurance company! ' + props.brand + ' offers shingle roof replacements in ' + props.loc + '& the surrounding areas.']

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
