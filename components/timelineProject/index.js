export const TimelineProject = ({
  id,
  name,
  date,
  position,
  bulletPoints,
  technologiesUsed,
}) => {
  return (
    <div key={id} className="pl-5 pt-2 md:pt-3">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-base-text-color font-bold text-2xl">{name}</h1>
        <h2 className="text-base-text-color font-semibold md:text-lg">
          {date}
        </h2>
      </div>
      <div className="text-base-text-color pt-2">
        <h4>{position}</h4>
        <ul className="list-disc pl-8 pt-2">
          {bulletPoints.map((bulletPoint, index) => {
            return <li key={index + 3}>{bulletPoint.text}</li>;
          })}
        </ul>
        <div className="text-base-text-color pt-2">
          <h5>Technologies used</h5>
          <div className="flex flex-wrap pt-2">
            {technologiesUsed.map((technology, index) => {
              return (
                <p
                  key={index + technology.name}
                  className="text-background bg-harder-text-color w-fit font-bold p-1 px-2 my-1 mx-1 rounded-md">
                  {technology.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
