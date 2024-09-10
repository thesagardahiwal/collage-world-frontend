'use client';

import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';

import { CW } from "../assets/images/index"
import { useAuth } from '../hooks/useAuth';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const {user,  logoutUser } = useAuth();
  // const router = useRouter();
  const segment = useSelectedLayoutSegment();
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleLogout = () => {
  //   // logoutUser();
  //   // router.push('/profile');
  //   // logoutUser()
  // };

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     setPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <nav className='bg-[#00012a] gap-x-4 justify-center rounded-t-md sm:bg-gradient-to-t flex sm:flex-col sm:justify-between items-center sm:rounded-md h-full w-full sm:from-[#FF9A75] sm:to-[#fed0c0] '>
      {/* <div
        id='pointer'
        className="fixed top-0 left-0 w-4 h-4 bg-white/60 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{ top: `${position.y}px`,
          left: `${position.x}px`}}
      /> */}
      <div className='sm:flex hidden flex-col gap-y-10 mt-6'>
        <Link href="/home" className='iconContainer iconFix'>
            <Image src={CW} alt="logo" style={{objectFit: "cover", borderRadius: "10px"}} />
        </Link>

        <Link href="/explore" className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            <TravelExploreRoundedIcon/>
          </span>
        </Link>
      </div>


      <div className='flex sm:flex-col gap-x-4 sm:gap-y-10'>
        <Link href="/notes" className={segment == 'notes' ? 'iconContainer2 iconFix' : 'iconContainer move iconFix'}>
          <span className="material-symbols-rounded">
            <NotesRoundedIcon/>
          </span>
          <span className='textView'>Notes</span>
        </Link>

        <Link href="/home" className={segment == 'home' ? 'iconContainer2 iconFix' : 'iconContainer move iconFix'}>
          <span className="material-symbols-outlined">
            <HomeRoundedIcon/>
          </span>
          <span className='textView'>Home</span>
        </Link>
        <Link href="/explore" className={segment == 'explore' ? 'iconContainer2 iconFix' : 'iconContainer move iconFix'}>
          <span className="material-symbols-rounded">
            <ExtensionRoundedIcon/>
          </span>
          <span className='textView'>Explore</span>
        </Link>
      </div>

      <div className='flex  sm:flex-col sm:gap-y-6 gap-x-4 sm:mb-4'>
        <Link href="/setting" className={segment == 'setting' ? 'iconContainer2 iconFix' : 'iconContainer move iconFix'}>
          <span className="material-symbols-rounded">
            <SettingsRoundedIcon/>
          </span>
          <span className='textView'>Setting</span>
        </Link>

        <Link href="profile" className={segment == 'profile' ? 'iconContainer2 iconFix' : 'iconContainer iconFix'} >
          <span className="material-symbols-rounded">
            <AccountCircleRoundedIcon/>
          </span>
          <span className='textView'>{user?.name ? user.name : 'Profile'}</span>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;