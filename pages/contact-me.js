import {Navbars} from '../components/navbars';
import {motion} from 'framer-motion';
import {useState} from 'react';
export default function ContactMe() {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

const submitForm = () => {
  setNameError(name.length == 0);
  setDescriptionError(description.length == 0);
}
  return (
    <div className="relative z-10 h-screen overflow-hidden">
      <Navbars />
      <div className="pt-10 md:pt-20 lg:pt-25 flex h-fit">
        <div className="text-base-text-color flex flex-col w-full items-center px-3 space-y-4">
          <h2 className="text-7xl font-extrabold px-5 font-main pb-5">
            Contact me
          </h2>
          <div className="pt-4 pb-5 md:pb-3 lg:pb-3 md:pt-3 lg:pt-3 flex flex-col w-full md:w-3/5 px-3 md:px-3 lg:px-3 space-y-3 bg-background rounded-md">
            <input
              className="px-3 py-2 border border-base-text-color bg-background text-base-text-color font-main placeholder-base-text-color rounded-sm"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"></input>
            {nameError && (
              <p className="text-blue-500">
                The name field is needed to submit.
              </p>
            )}
            <input
              className="px-3 py-2 mb-6 border border-base-text-color bg-background text-base-text-color font-main placeholder-base-text-color rounded-sm"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"></input>
            {emailError && (
              <p className="text-blue-500">
                Email not valid, please introduce a valid format.
              </p>
            )}
            <textarea
              className="px-3 py-2 mb-6 border border-base-text-color bg-background text-base-text-color   font-main placeholder-base-text-color rounded-sm"
              type="text"
              rows="5"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Tell me about it"></textarea>
            {descriptionError && (
              <p className="text-blue-500">
                The description field is needed to submit.
              </p>
            )}
          </div>
          <motion.button
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.94}}
            onClick={() => submitForm()}
            className="p-3 w-full md:w-2/5 border-2 border-base-text-color text-base-text-color rounded-md hover:bg-background hover:text-harder-text-color hover:border-harder-text-color">
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
};
