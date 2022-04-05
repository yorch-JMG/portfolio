import {TimelineProject} from '../timelineProject';

export const TimelineSection = ({key, title, location, date, projects}) => {
  return (
    <div key={key}>
      <div className="flex flex-col md:flex-row pt-10 md:justify-between md:align-middle md:items-center">
        <div className="flex flex-col md:justify-between">
          <h1 className="text-base-text-color font-bold flex-wrap text-2xl md:text-3xl pb-1 md:pb-0">
            {title}
          </h1>
          <h2 className="text-background bg-harder-text-color font-bold p-1 px-2 md:mt-2 rounded-md w-fit">
            {location}
          </h2>
        </div>
        <h2 className="text-base-text-color font-bold text-sm py-1 md:pt-0 md:text-xl pt-2">
          {date}
        </h2>
      </div>
      <div>
        {projects.map(project => {
          return (
            <TimelineProject
              key={project.name}
              name={project.name}
              date={project.date}
              position={project.position}
              bulletPoints={project.bulletPoints}
              technologiesUsed={project.technologiesUsed}
            />
          );
        })}
      </div>
    </div>
  );
};
