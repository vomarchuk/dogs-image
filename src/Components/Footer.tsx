import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto block py-3 text-center bg-blue-300">
      <Button href="/" name="Home" />
      <Button href="/find-dogs" name="Find dogs" />
    </footer>
  );
};
