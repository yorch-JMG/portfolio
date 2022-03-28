export const Project = ({name, description, stack}) => {
  return (
    <>
      <div className="w-full px-5 pt-5 pb-3">
        <div className="text-harder-text-color text-3xl">
          <h2 className="font-bold px-4">{name}</h2>
        </div>
        <div className="text-base-text-color pt-3 px-8">{description}</div>
        <div className="space-x-2 pt-2 px-14">
          <h3 className="text-harder-text-color font-semibold pb-2">
            Techstack:
          </h3>
          {stack.map(technology => {
            return (
              <>
							<span className="inline-block mt-2 md:mt-0 lg:mt-0 md:inline lg:inline bg-brown text-base-text-color p-1 rounded-sm px-2 font-semibold">
                  {technology.name}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
