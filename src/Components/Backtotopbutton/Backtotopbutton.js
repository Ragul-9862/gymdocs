import React ,{useState,useEffect} from 'react'

export default function Backtotopbutton() {
    const [Backtotopbutton, setBacktotopbutton] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setBacktotopbutton(true);
        } else {
          setBacktotopbutton(false);
        }
      });
    }, []);
  
    const scrollup = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <div>
          <div>
      {Backtotopbutton && (
        <button
          onClick={scrollup}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            backgroundColor: 'red',
          }}
        >
          up
        </button>
      )}
    </div>
    </div>
  )
}
