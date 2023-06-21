import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="container fixed left-[50%] bottom-0 translate-x-[-50%] py-3 text-center bg-blue-300 ">
      <Button href="/" name="Home" />
      <Button href="/find-dogs" name="Find dogs" />
    </footer>
  );
};
