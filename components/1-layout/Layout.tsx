// React
import { useState, Fragment, useEffect } from 'react';

// Next
import { useRouter } from 'next/router';

// Redux
import { useDispatch } from 'react-redux';
import { exitMenu } from '../../redux/slices/MenuTransitionSlice';

// GSAP
import { gsap } from 'gsap';

// Components
import ClientPass from './ClientPass';
import MemoBVCanvas from '../0-navigation/0-menu/5-canvas/BVCanvas';

// Styles
import styles from '../../styles/1-layout-scss/layout.module.scss';

// React Types
import { ReactNode, FC } from 'react';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // const [ready, setReady] = useState(false);
  // const [clicked, setClicked] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  // const root = useRouter().pathname === '/' ? true : false;
  // const dispatch = useDispatch();

  // const bgTl = gsap.timeline();
  // const canvasTl = gsap.timeline();

  // const animateMenuIn = () => {
  //   canvasTl.to('#canvas', { display: 'block' });
  //   canvasTl.to('#canvas', { opacity: '1', duration: 0.7 });
  //   bgTl.to('#canvasbg', { display: 'block' });
  //   bgTl.to('#canvasbg', { opacity: 1, duration: 1 });
  // };

  // const animateMenuOut = () => {
  //   bgTl.to('#canvasbg', { opacity: 0, duration: 0.8, delay: 0.5 });
  //   bgTl.to('#canvasbg', { display: 'none' });
  //   gsap.to('#canvas', { display: 'none', delay: 1.5 });
  // };

  // const toggleClick = () => {
  //   if (!disabled) {
  //     setClicked(!clicked);
  //     setDisabled(true);
  //     setTimeout(() => {
  //       setDisabled(false);
  //     }, 2000);
  //   }
  // };

  // const handleTransition = () => {
  //   dispatch(exitMenu({ transition: false }));
  // };

  // const initialDisableStatus = () => {
  //   setTimeout(() => {
  //     setDisabled(false);
  //   }, 4000);
  // };

  // useEffect(() => {
  //   initialDisableStatus();
  // }, []);

  // useEffect(() => {
  //   if (ready && clicked) {
  //     animateMenuIn();
  //   } else {
  //     animateMenuOut();
  //   }
  // }, [clicked, ready]);

  return (
    <Fragment>
      <div className="fixed inset-0 h-full max-w-full">
        <div className="flex justify-center items-center container mx-auto h-full">
          <ClientPass>{children}</ClientPass>
        </div>
      </div>

      {/* <div
        id="canvasbg"
        className={`${styles.canvasbackground} fixed inset-0`}
      />
      <div id="canvas" className={`${styles.canvascontainer} absolute`}>
        <MemoBVCanvas
          clicked={clicked}
          toggleClick={toggleClick}
          handleTransition={handleTransition}
          onCompile={() => setReady(true)}
        />
      </div> */}
    </Fragment>
  );
};

export default Layout;
