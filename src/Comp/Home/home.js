import React from "react";
import Map from "../Map/map.js";
import Table from "../Table/table.js";

function Home() {
    return (
        <>
        <div className="container">
      <div className="row">
        <div className="col">
        <label>Filter:</label>
          <input type="text" className="form-control" placeholder="filter" />
        </div>
        <div className="col">
          <div className='row g-2'>
            <div className='col-10'>
              <label>Search:</label>
              <input type="text" className="form-control" placeholder="Search" width={5} />
            </div>
            <div className='col-auto'>
              <br />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="row">
        <div className="col">
        <Table />
        </div>
        <div className="col">
        <Map />
        </div>
      </div>
    </div>
    </>
    );
}


export default Home;