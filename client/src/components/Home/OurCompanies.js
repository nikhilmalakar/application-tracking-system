import React from 'react'


export const OurCompanies = () => {
  const companyLogos = [
    {
      id: 1,
      logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
    },
    {
      id: 4,
      logo: "https://static.vecteezy.com/system/resources/thumbnails/013/760/485/small_2x/abstract-connection-logo-illustration-in-trendy-and-minimal-style-png.png",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Switch_%28technology_company%29_logo.svg/1200px-Switch_%28technology_company%29_logo.svg.png",
    },
    {
      id: 6,
      logo: "https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1652276339",
    },
  ]

  return (
    <div className="mt-56">
      <h1 className='text-center text-xl md:text-2xl font-bold text-primary mt-12 md:mt-6 my-6 md:my-12'>Our Trusted Partners</h1>
            

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center items-center gap-4">
        {companyLogos.map((obj) => (
          <li
            className=""
            key={obj.id}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={obj.logo}
                width={70}
                height={10}
                alt={obj.logo}
                class="transform hover:scale-110 transition duration-300 ease-in-out"
              />

              <h3 className="m-2 font-bold">{obj.title}</h3>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};
