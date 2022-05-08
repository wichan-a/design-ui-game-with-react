import React from 'react'
import { ReactComponent as CarSvg } from './assets/car-good.svg'

const Car = (props) => {
  const { id, frontLeftErr, frontRightErr, rearLeftErr, rearRightErr, fullErr } = props

  const colorPass1 = '#43c09f'
  const colorPass2 = '#43c09f'
  const colorPass3 = '#259275'

  const colorErr1 = '#ff1033'
  const colorErr2 = '#ff1033'
  const colorErr3 = '#a80b0c'

  let frontLeftColor1 = colorPass1
  let frontLeftColor2 = colorPass2
  let frontLeftColor3 = colorPass3

  let frontRightColor1 = colorPass1
  let frontRightColor2 = colorPass2
  let frontRightColor3 = colorPass3

  let rearLeftColor1 = colorPass1
  let rearLeftColor2 = colorPass2
  let rearLeftColor3 = colorPass3

  let rearRightColor1 = colorPass1
  let rearRightColor2 = colorPass2
  let rearRightColor3 = colorPass3

  if (frontLeftErr) {
    frontLeftColor1 = colorErr1
    frontLeftColor2 = colorErr2
    frontLeftColor3 = colorErr3
  }

  if (frontRightErr) {
    frontRightColor1 = colorErr1
    frontRightColor2 = colorErr2
    frontRightColor3 = colorErr3
  }

  if (rearLeftErr) {
    rearLeftColor1 = colorErr1
    rearLeftColor2 = colorErr2
    rearLeftColor3 = colorErr3
  }

  if (rearRightErr) {
    rearRightColor1 = colorErr1
    rearRightColor2 = colorErr2
    rearRightColor3 = colorErr3
  }

  return (
    <div className={`car-${id} relative`}>
      <CarSvg />
    
      <style jsx="true">{`
        .car-${id} .body {
          fill: ${fullErr ? 'red' : '#fff' };
        }
        .car-${id} .front-wheel-left-1 {
          fill: ${frontLeftColor1};
        }
        .car-${id} .front-wheel-left-2 {
          fill: ${frontLeftColor2};
        }
        .car-${id} .front-wheel-left-3 {
          fill: ${frontLeftColor3};
        }

        .car-${id} .front-wheel-right-1 {
          fill: ${frontRightColor1};
        }
        .car-${id} .front-wheel-right-2 {
          fill: ${frontRightColor2};
        }
        .car-${id} .front-wheel-right-3 {
          fill: ${frontRightColor3};
        }

        .car-${id} .rear-wheel-left-1 {
          fill: ${rearLeftColor1};
        }
        .car-${id} .rear-wheel-left-2 {
          fill: ${rearLeftColor2};
        }
        .car-${id} .rear-wheel-left-3 {
          fill: ${rearLeftColor3};
        }

        .car-${id} .rear-wheel-right-1 {
          fill: ${rearRightColor1};
        }
        .car-${id} .rear-wheel-right-2 {
          fill: ${rearRightColor2};
        }
        .car-${id} .rear-wheel-right-3 {
          fill: ${rearRightColor3};
        }
     `}</style>
    </div>
  )
}

// rear-wheel-right-1

export default Car