import {Navbars} from '../components/navbars';
import {Project} from '../components/project';

export default function Projects() {
  const projects = [
    {
      name: 'Uruz',
      description: 'Website for Uruz, a package delivery company.',
      stack: [
        {name: 'React'},
        {name: 'NextJS'},
        {name: 'NodeJS'},
        {name: 'GraphQL'},
        {name: 'TypeORM'},
      ],
      deploymentUrl: 'https://uruz.vercel.app/',
    },
    {
      name: 'Registro guias',
      description:
        'System made for Caracol Museum to automate guide checktime process.',
      stack: [{name: 'React'}, {name: 'NextJS'}, {name: 'NodeJS'}],
      codeUrl: 'https://github.com/yorch-JMG/registro-guias-api',
    },
    {
      name: 'Caracol web',
      description: 'NextJS website for Caracol Museum with backend.',
      stack: [
        {name: 'React'},
        {name: 'NextJS'},
        {name: 'NodeJS'},
        {name: 'NestJS'},
        {name: 'Graphql'},
        {name: 'TypeORM'},
      ],
      codeUrl: 'https://github.com/ReynaldoCerpa/caracol-web',
    },
    {
      name: 'getClass',
      description:
        'Rust command line utility made to learn about Rust lang basics and to get online classes zoom links and passwords.',
      stack: [{name: 'Rust'}],
      codeUrl: 'https://github.com/yorch-JMG/get-class',
    },
  ];
  return (
    <div className="max-w-3xl mx-auto z-20">
      <Navbars />
      <h1 className="text-base-text-color text-5xl font-bold px-5 pt-6">
        Projects
      </h1>
      {projects.map(project => {
        return (
          <div key={project.name}>
            <Project
              name={project.name}
              description={project.description}
              stack={project.stack}
              deploymentUrl={project.deploymentUrl}
              codeUrl={project.codeUrl}
            />
          </div>
        );
      })}
    </div>
  );
}
