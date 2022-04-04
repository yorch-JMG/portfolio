import {Navbars} from '../components/navbars';

export default function Timeline() {
  const timelineObjects = [
    {
      title: 'Caracol Science Museum',
      location: 'Ensenada, B.C.',
      date: '2021 - 2022',
      projects: [
        {
          name: 'Museo Caracol Website',
          position: 'Fullstack developer',
          date: 'December 2021 – March 2022',
          bulletPoints: [
            {
              text:
                'Used NextJS to develop a web application for Museo Caracol',
            },
            {
              text:
                'Developed backend using NestJS, Typeorm, GraphQL and MySQL for CRUD functionality.',
            },
          ],
          technologiesUsed: [
            {name: 'ReactJS'},
            {name: 'NextJS'},
            {name: 'Javascript/Typescript'},
            {name: 'MySQL'},
            {name: 'Typeorm'},
            {name: 'GraphQL'},
          ],
        },
        {
          name: 'Registro Guias Website',
          position: 'Backend developer',
          date: 'November 2021 – December 2021',
          bulletPoints: [
            {
              text:
                'Utilized NodeJS, Express and MySQL to develop a REST API for websites that automates guide shift processes.',
            },
          ],
          technologiesUsed: [
            {name: 'NodeJS'},
            {name: 'Express'},
            {name: 'Javascript/Typescript'},
            {name: 'MySQL'},
            {name: 'SQL'},
          ],
        },
      ],
    },
  ];
  return (
    <div className="max-w-3xl mx-auto z-20 font-main pb-5">
      <Navbars />
      <h1 className="text-base-text-color text-5xl font-bold px-5 pt-6">
        Timeline
      </h1>
      <div className="w-full px-5">
        {timelineObjects.map(timelineObject => {
          return (
            <>
              <div>
                <div className="flex justify-between py-5 align-middle items-center">
                  <div className="flex space-x-3 items-center">
                    <h1 className="text-base-text-color font-bold text-3xl">
                      {timelineObject.title}
                    </h1>
                    <h2 className="text-background bg-harder-text-color font-bold p-1 px-2 rounded-md">
                      {timelineObject.location}
                    </h2>
                  </div>
                  <h2 className="text-base-text-color font-bold text-xl">
                    {timelineObject.date}
                  </h2>
                </div>
                <div>
                  {timelineObject.projects.map(project => {
                    return (
                      <div className="pl-5 pt-5">
                        <div className="flex justify-between">
                          <h1 className="text-base-text-color font-bold text-2xl">
                            {project.name}
                          </h1>
                          <h2 className="text-base-text-color font-bold text-lg">
                            {project.date}
                          </h2>
                        </div>
                        <div className="text-base-text-color pt-2">
                          <h4>{project.position}</h4>
                          <ul className="list-disc pl-8">
                            {project.bulletPoints.map(bulletPoint => {
                              return <li>{bulletPoint.text}</li>;
                            })}
                          </ul>
                          <div className="text-base-text-color pt-2">
                            <h5>Technologies used</h5>
                            <div className="flex pt-2">
                              {project.technologiesUsed.map(technology => {
                                return (
                                  <p className="text-background bg-harder-text-color font-bold p-1 px-2 mr-3 rounded-md">
                                    {technology.name}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
