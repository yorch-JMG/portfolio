import {Navbars} from '../components/navbars';
import {TimelineSection} from '../components/timelineSection';
import {timelineObjects} from '../components/timelineObj';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto z-20 font-main pb-5">
      <Navbars />
      <h1 className="text-base-text-color text-5xl font-bold px-5 pt-6">
        Timeline
      </h1>
      <div className="w-full px-3 md:px-5">
        {timelineObjects.map((timelineObject, index) => {
          return (
            <>
              <TimelineSection
                id={timelineObject.title + index}
                title={timelineObject.title}
                location={timelineObject.location}
                date={timelineObject.date}
                projects={timelineObject.projects}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
