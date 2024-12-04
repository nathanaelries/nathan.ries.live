import { useLocation } from 'react-router-dom';

export function useNavigation() {
  const location = useLocation();

  const handleNavigation = (e, to) => {
    if (to === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (to.startsWith('/#')) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        window.location.href = to;
        return;
      }

      const element = document.querySelector(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return { handleNavigation };
}