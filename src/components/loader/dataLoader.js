import React from 'react';
import Loader from 'react-loader-spinner'
class DataLoader extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Bars"
         color="#00BFFF"
         height={50}
         width={50} 
         secondaryColor="grey"
         style={{left: "50%", position: "absolute", top:"30%"}}
      />
     );
    }
 }

 export default DataLoader;