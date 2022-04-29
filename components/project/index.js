import {MdOpenInNew} from 'react-icons/md';
export const Project = ({name, description, stack, deploymentUrl, codeUrl, codeUrl2}) => {
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
                <span className="inline-block mt-2 md:mt-0 lg:mt-0 md:inline lg:inline bg-brown text-background p-1 rounded-sm px-2 font-semibold">
                  {technology.name}
                </span>
              </>
            );
          })}
          {deploymentUrl && (
            <div>
              <h3 className="w-fit text-base-text-color font-semibold pt-2 mt-3 rounded-sm">
                This website is currently deployed!
              </h3>
              <div className="flex w-fit border text-base-text-color items-center space-x-1 p-1 px-3 rounded-sm mt-2">
                <a href={deploymentUrl}>Go to website</a>
                <MdOpenInNew />
              </div>
            </div>
          )}
          {codeUrl && (
            <div>
              <div className="flex w-fit border text-base-text-color items-center space-x-1 p-1 px-3 rounded-sm mt-4">
                <a href={codeUrl}>Go and see the code for this project</a>
                <MdOpenInNew />
              </div>
            </div>
          )}
          {codeUrl2 && (
            <div>
              <div className="flex w-fit border text-base-text-color items-center space-x-1 p-1 px-3 rounded-sm mt-4">
                <a href={codeUrl}>Go and see the code for the server</a>
                <MdOpenInNew />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
