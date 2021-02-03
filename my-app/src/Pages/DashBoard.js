import React from 'react';


const DashBoard=()=>{

return(
<div className="panels">
  <div className="panel-info">
    <InfoPanel />
  </div>
  <div className="panel-allocation">
    <AllocationPanel />
  </div>
  <div className="panel-balance">
    <PerformancePanel />
  </div>
  <div className="panel-positions">
    <PositionsPanel />
  </div>
</div>

);


}
export default DashBoard;