import Link from 'next/link';

export const ContactMeButtonSection = () => {
  return (
    <div className="w-full justify-center text-center text-harder-text-color pt-6 pb-4">
      <h5 className="text-xl pb-4">Interested?</h5>
      <Link href="/contact-me">
        <a className="border border-harder-text-color p-2 px-4 font-semibold">
          Contact me
        </a>
      </Link>
    </div>
  );
};
