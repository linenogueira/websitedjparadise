
export default function Home() {
  const additionalProjects = [

    { id: '13', imageUrl: '/images/partys/13.jpg' },
    { id: '12', imageUrl: '/images/partys/12.png' },
    { id: '14', imageUrl: '/images/partys/14.jpg' },
    { id: '11', imageUrl: '/images/partys/11.jpg' },
    { id: '10', imageUrl: '/images/partys/10.jpg' },
    { id: '9', imageUrl: '/images/partys/09.jpg' },
    { id: '19', imageUrl: '/images/partys/19.jpg' },
    { id: '18', imageUrl: '/images/partys/18.jpg' },
    { id: '17', imageUrl: '/images/partys/17.jpg' },
    { id: '15', imageUrl: '/images/partys/15.jpg' },
    { id: '16', imageUrl: '/images/partys/16.jpg' },
    { id: '8', imageUrl: '/images/partys/08.jpg' },
    { id: '7', imageUrl: '/images/partys/07.jpg' },
    { id: '6', imageUrl: '/images/partys/06.jpg' },
    { id: '5', imageUrl: '/images/partys/05.jpg' },
    { id: '4', imageUrl: '/images/partys/04.jpg' },
    { id: '3', imageUrl: '/images/partys/03.jpg' },
    { id: '2', imageUrl: '/images/partys/02.jpg' },
    { id: '1', imageUrl: '/images/partys/01.jpg' }
  ];

  const allProjects = [...additionalProjects];

  return (
    <div className="py-30">
      <p className="text-3xl text-white font-semibold text-center"> Sharing a few gigs I've been part of 
            – good times, great beats!</p>
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
        {allProjects.map((project, index) => (
        <div key={index} className="bg-neutral-800/10 p-2 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
        <img alt="Project" src={project.imageUrl} className="rounded-lg h-50 w-50 object-cover" />
            <p className="text-x2 font-semibold mt-5">{project.title}</p>
            
          </div>
        ))}

<div className="background-containerfundo"> 
  
  </div>
      </div>
    </div>
  );
}


