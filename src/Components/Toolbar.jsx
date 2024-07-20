import React from 'react'
import { pageData } from '../pageData'
import { AnimatePresence, motion, MotionConfig} from 'framer-motion'


const Toolbar = (props) => {


  return (
    <>
      <motion.div className='toolbar u-display-flex u-flex-col u-position-absolute u-left-1/2 u-bottom-25 u-translateX-1/2 u-flex-justify-end u-p-0.5 u-overflow-hidden u-border-radius-1'
      animate={{
        height: props.expanded ? 285 : 49, 
        
      }}
      transition={{
        type: 'spring',
        stiffness: 802,
        damping: 45
        }}>
        <div className='u-display-flex u-flex-col u-gap-1'>
          <AnimatePresence>
            {props.expanded && (
              <motion.div className='u-display-flex u-flex-col u-pl-0.2'
              id='page-stats'
              initial={{
                filter: 'blur(8px)',
                opacity: 0
              }}
              animate={{
                filter: 'blur(0px)',
                opacity: 1
              }}
              transition={{
                type: 'tween',
                duration: 0.1
              }}
              exit={{
                filter: 'blur(8px)',
                opacity: 0
              }}>
                <div className='u-display-flex u-gap-0.8 u-pt-0.2 u-pb-0.75'>
                  <div className='u-flex-grow u-white-space-nowrap'>Website Traffic</div>
                  <div className='u-display-flex u-gap-0.25 u-flex-align-center u-flex-justify-center'>
                    <div className='u-white-space-nowrap'>All time</div>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2234_61)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2894 10.1569L5.63235 4.49994L7.04635 3.08594L11.9964 8.03594L16.9464 3.08594L18.3604 4.49994L12.7034 10.1569C12.5158 10.3444 12.2615 10.4497 11.9964 10.4497C11.7312 10.4497 11.4769 10.3444 11.2894 10.1569Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_2234_61">
                      <rect width="12" height="24" fill="white" transform="translate(24) rotate(90)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='u-display-flex u-flex-col'>
                    {pageData.map((pages) => (
                      <div className='u-display-flex u-gap-0.8 u-pt-0.5 u-pb-0.5'>
                        <div className='u-flex-grow u-white-space-nowrap u-font-weight-400'>{pages.name}</div>
                        <div className='u-white-space-nowrap u-font-weight-400'>{pages.visits} visits</div>
                        </div>
                    ))}
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className='u-display-flex u-flex-align-center u-flex-justify-center u-gap-2'>
            <div className='u-display-flex u-gap-0.4 u-flex-grow u-pl-0.2'>
              <div className='u-white-space-nowrap'>jayeshpoduval.com</div>
              <AnimatePresence>
                {props.expanded && (
                  <motion.div className='u-display-flex u-flex-align-center u-flex-justify-center u-gap-0.4 u-overflow-hidden'
                  id='total-visits'
                  initial={{width: 0}}
                  animate={{width: props.expanded ? 'auto' : 0}}
                  transition={{type: 'spring',
                    stiffness: 845,
                    damping: 43
                  }}
                  exit={{width: 0,
                    transition: {
                      type: 'tween',
                      duration: 0.1
                    }
                  }}>
                    <div className='circle-divider'></div>
                    <motion.div className='u-white-space-nowrap'
                    id='visits'
                    initial={{
                      x: -100,
                      filter: 'blur(13px)',
                      scale: 0,
                      opacity: 0.4
                    }}
                    animate={{
                      x: 0,
                      filter: 'blur(0px)',
                      scale: 1,
                      opacity: 1
                    }}
                    transition={{
                      type: 'tween',
                      duration: 0.1
                    }}
                    exit={{
                      x: -120,
                      filter: 'blur(13px)',
                      scale: 0,
                      transition: {
                        type: 'tween',
                        duration: 0.1
                      }
                    }}
                    >6,924 total visits</motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className='btn u-display-flex u-flex-align-center u-flex-justify-center'
            onClick={props.onClick}>See page insights</button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Toolbar