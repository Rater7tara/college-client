import React from 'react';

const CollegeCard = () => {


  return (
    <>
      <h1 className='text-5xl text-center font-bold my-4'>Top Universities</h1>
      <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-4 p-6 '>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/928PGwX/Stanford.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Stanford University</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span> "Stanford University has been at the forefront of cutting-edge research in various fields..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/C8hh8TP/Yale.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Yale University</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span> "Yale University is committed to research excellence and academic diversity..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/qMvdYM4/MIT.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Massachusetts Institute of Technology (MIT)</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span> "MIT is known for its pioneering contributions to various research fields..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/vZK1rq1/Califonia.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">University of California</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span>"UC Berkeley has made significant contributions to scientific research and innovation..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/QbDrWsL/Harvard.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Harvard University</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span> "Harvard University has a rich history of groundbreaking research and academic excellence..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={"https://i.ibb.co/m9cxBMm/Princeton.jpg"} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Princeton University</h2>
            <p className='text-xl'><span className='font-bold'>Admission date:</span> <br /> <span className='font-bold'>Start:</span> "2023-09-01", <br />
            <span className='font-bold'>End:</span> "2023-11-30"</p>
            <p className='text-lg'><span className='font-bold'>Research:</span> "Princeton University is renowned for its academic achievements and research endeavors..."</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeCard;