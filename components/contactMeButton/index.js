import Link from 'next/link';

export const ContactMeButtonSection = () => {
  return (
    <div className="w-full justify-center text-center text-harder-text-color">
      <h5 className="text-xl pb-4">Interested?</h5>
      <Link href="/contact-me">
        <a
          href="/contact-me"
          className="border border-harder-text-color p-2 px-4 font-semibold">
          Contact me
        </a>
      </Link>
    </div>
  );
};