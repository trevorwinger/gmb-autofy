import React from 'react';

const Keywords = (props) => {
    var keywords = ['residential roofing', 'roofing contractor', 'residential roofing contractor', 'local roofing company', 
    'roofing', props.loc + ' roofer', 'roof repair', 'roof replacement', 'shingle roofing', 'tile roofing'];

    return (
        <div>
            <h2>Keywords</h2>
            <p>{keywords.join()}</p>
        </div>
    )

}

export default Keywords;
