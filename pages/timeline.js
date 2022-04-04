import {Navbars} from '../components/navbars';
import {timelineObjects} from '../components/timelineObj';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto z-20 font-main pb-5">
      <Navbars />
      <h1 className="text-base-text-color text-5xl font-bold px-5 pt-6">
        Timeline
      </h1>
      <div className="w-full px-3 md:px-5">
        {timelineObjects.map(timelineObject => {
          return (
            <>
              <div key={timelineObject.title}>
						<div className="flex flex-col md:flex-row pt-10 md:justify-between md:align-middle md:items-center">
                  <div className="flex flex-col md:justify-between">
                    <h1 className="text-base-text-color font-bold flex-wrap text-2xl md:text-3xl pb-1 md:pb-0">
                      {timelineObject.title}
                    </h1>
						<h2 className="text-background bg-harder-text-color font-bold p-1 px-2 md:mt-2 rounded-md w-fit">
                      {timelineObject.location}
                    </h2>
                  </div>
                  <h2 className="text-base-text-color font-bold text-sm py-1 md:pt-0 md:text-xl pt-2">
                    {timelineObject.date}
                  </h2>
                </div>
                <div>
                  {timelineObject.projects.map(project => {
                    return (
                      <div key={project.name} className="pl-5 pt-2 md:pt-3">
                        <div className="flex flex-col md:flex-row justify-between">
                          <h1 className="text-base-text-color font-bold text-2xl">
                            {project.name}
                          </h1>
                          <h2 className="text-base-text-color font-semibold md:text-lg">
                            {project.date}
                          </h2>
                        </div>
                        <div className="text-base-text-color pt-2">
                          <h4>{project.position}</h4>
                          <ul className="list-disc pl-8 pt-2">
                            {project.bulletPoints.map(bulletPoint => {
                              return <li key={bulletPoint.text}>{bulletPoint.text}</li>;
                            })}
                          </ul>
                          <div className="text-base-text-color pt-2">
                            <h5>Technologies used</h5>
                            <div className="flex flex-wrap pt-2">
                              {project.technologiesUsed.map((index, technology) => {
                                return (
                                  <p key={index} className="text-background bg-harder-text-color w-fit font-bold p-1 px-2 my-1 mx-1 rounded-md">
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
