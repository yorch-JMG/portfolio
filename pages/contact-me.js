import {Navbars} from '../components/navbars';
export default function ContactMe() {
  return (
    <div className="max-w-3xl mx-auto z-20">
      <Navbars />
      <div className="pt-5 flex h-fit">
        <div className="text-base-text-color">
          <h2 className="text-3xl">Contact me</h2>
          <input type="text" placeholder="Enter your name"></input>
        </div>
        <div className="bg-dark-navy-blue h-20 w-7"></div>
      </div>
    </div>
  );
}
