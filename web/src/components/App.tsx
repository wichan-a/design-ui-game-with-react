import React from 'react'

// css
import './assets/fonts/font-lato-prompt.css'
import '../tailwind/output.css'

// imgs
import bg from './assets/bg-car.jpg'
import logo from './assets/logo-game.png'
import map from './assets/map.jpg'
import fuel from './assets/fuel.png'
import tool from './assets/tool.png'
import low from './assets/low.png'
import belt from './assets/belt.png'
import resStatus from './assets/res-status.png'

// Components
import Car from './Car'

const Mile: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="37 -5 120 100" width="100%" height="100%">
      <path 
        className="stroke-[#91919a] stroke-[3px]" 
        d="M55,90A55,55 0 1,1 140,90" 
        style={{ 
          fill: 'none', 
          strokeLinecap: 'round' 
        }}
      />

      <path 
        className="stroke-[#07befa] stroke-[3px]" 
        d="M55,90A55,55 0 1,1 140,90" 
        style={{ 
          fill: 'none', 
          strokeLinecap: 'round',
          strokeDasharray: '248',
          strokeDashoffset: '120' 
        }}
      />
    </svg>
  )
}

interface ReturnMonitorCompProps {
  value: String,
  unit: String,
  icon: any,
  min: String,
  max: String
}

const Monitor: React.FC<ReturnMonitorCompProps> = (props) => {
  return (
    <div className="w-full relative">
      <Mile />

      <div className="text-center absolute top-[20px] vw:top-[1.333vw] left-0 right-0 text-[#fff] pl-[28px] px-[28px] vw:px-[1.866vw]">
        <div className="text-[30px] vw:text-[2vw]">{props.value}</div>
        <div className="text-[12px] vw:text-[0.8vw] -mt-[5px] vw:-mt-[0.333vw]">{props.unit}</div>

        <div className="flex flex-row text-[10px] vw:text-[0.666vw] mt-[7px] vw:mt-[0.466vw]">
          <div className="w-1/3 text-left opacity-70 text-[8px] vw:text-[0.533vw]">{props.min}</div>
          <div className="w-1/3 text-center">
            <img src={props.icon} className="w-[12px] vw:w-[0.8vw] inline" />
          </div>
          <div className="w-1/3 text-right opacity-70 text-[8px] vw:text-[0.533vw]">{props.max}</div>
        </div>

        <div className="h-[3px] vw:h-[0.2vw] rounded-[3px] vw:rounded-[0.2vw] mt-[5px] vw:mt-[0.333vw] w-full bg-[#8e8b7e] ">
          <div className="h-[3px] vw:h-[0.2vw] rounded-[3px] vw:rounded-[0.2vw] w-1/2 bg-[#5afcab]"></div>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-full bg-bottom bg-no-repeat bg-cover min-w-[800px] min-h-[600px] overflow-auto flex flex-col">
      
      <div className="absolute right-0 bottom-0">
        <img src={resStatus} className="w-[30px] m-[5px] vw:w-[2vw] vw:m-[0.333vw]" />
      </div>

      <div className="h-1/2 flex flex-row">
        <div className="flex items-start justify-end w-full">
          <img src={logo} className="w-[50px] m-[10px] vw:w-[3.333vw] vw:m-[0.666vw] h-auto" />
        </div>
      </div>

      <div className="h-1/2 flex flex-row">
        {/* map */}
        <div className="w-[24%] vw:w-[30%] flex items-end">
          <img src={map} className="w-[150px] vw:w-[13.33vw] m-[10px] vw:m-[0.666vw] h-auto" />
        </div>

        {/* monitor full  400 * 140*/}
        <div className="w-[52%] vw:w-[40%] flex items-end justify-center">
          <div className="mb-[20px] vw:mb-[1.333vw] h-[118px] vw:h-[7.866vw] overflow-hidden">
            <div className="w-[400px] vw:w-[26.666vw] h-[140px] vw:h-[9.333vw] p-[3px] vw:p-[0.2vw] rounded-t-[100px] vw:rounded-t-[6.666vw] rounded-b-[100px] vw:rounded-b-[6.666vw] flex flex-row bg-gradient-to-t from-[#0009]">
              
              {/* mile */}
              <div className="w-1/3 z-[1]">
                <Monitor icon={fuel} value="100" unit="KM/H" min="F" max="E" />
              </div>

              {/* main */}
              <div className="w-1/3 relative">
                <div className="absolute -left-[20px] vw:-left-[1.333vw] top-0 p-[5px] vw:p-[0.333vw] bg-[#000] rounded-[100%]">
                  <img src={low} className="w-[15px] vw:w-[1vw]" />
                </div>
                <div className="absolute -right-[20px] vw:-right-[1.333vw] top-0 p-[5px] vw:p-[0.333vw] bg-[#1a7594] rounded-[100%]">
                  <img src={belt} className="w-[15px] vw:w-[1vw]" />
                </div>

                <div className="absolute left-[10px] vw:left-[0.666vw] -top-[5px] vw:-top-[0.333vw] w-[1px] vw:w-[0.066vw] h-[63px] vw:h-[4.2vw] rotate-[30deg] z-0 bg-gradient-to-t from-[#fff]" />
                <div className="absolute right-[10px] vw:right-[0.666vw] -top-[5px] vw:-top-[0.333vw] w-[1px] vw:w-[0.066vw] h-[63px] vw:h-[4.2vw] -rotate-[30deg] z-0 bg-gradient-to-t from-[#fff]" />

                <div className="flex justify-center items-center h-full">
                  <div className="w-[82px] vw:w-[5.466vw] inline-block z-[1]">
                    <Car id="status" />
                  </div>
                  
                  {/* front wheel left */}
                  <div className="absolute left-[10px] vw:left-[0.666vw] top-[40px] vw:top-[2.666vw] z-[0]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[9px] vw:text-[0.6vw] text-[#fff] bg-[#0000005e] flex justify-center items-center">
                      <div>2.2</div>
                    </div>
                  </div>

                  {/* front wheel right */}
                  <div className="absolute right-[10px] vw:right-[0.666vw] top-[40px] vw:top-[2.666vw] z-[0]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[9px] vw:text-[0.6vw] text-[#fff] bg-[#0000005e] flex justify-center items-center">
                      <div>2.2</div>
                    </div>
                  </div>

                  {/* rear wheel left */}
                  <div className="absolute -left-[3px] vw:-left-[0.2vw] bottom-[48px] vw:bottom-[3.2vw] z-[0]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[9px] vw:text-[0.6vw] text-[#fff] bg-[#0000005e] flex justify-center items-center">
                      <div>2.2</div>
                    </div>
                  </div>

                  {/* rear wheel right */}
                  <div className="absolute -right-[3px] vw:-right-[0.2vw] bottom-[48px] vw:bottom-[3.2vw] z-[0]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[9px] vw:text-[0.6vw] text-[#fff] bg-[#0000005e] flex justify-center items-center">
                      <div>2.2</div>
                    </div>
                  </div>

                  {/* Bar left */}
                  <div className="absolute left-0 -mt-[7px] vw:-mt-[0.466vw]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[8px] vw:text-[0.533vw] text-[#fff] flex justify-center items-center opacity-70">
                      <div>Bar</div>
                    </div>
                  </div>

                  {/* Bar right */}
                  <div className="absolute right-0 -mt-[7px] vw:-mt-[0.466vw]">
                    <div className="w-[30px] vw:w-[2vw] h-[15px] vw:h-[1vw] text-[8px] vw:text-[0.533vw] text-[#fff] flex justify-center items-center opacity-70">
                      <div>Bar</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* gear */}
              <div className="w-1/3 z-[1]">
                <Monitor icon={tool} value="2" unit="GEAR" min="H" max="C" />
              </div>
            </div>
          </div>
        </div>

        {/* help */}
        <div className="w-[24%] vw:w-[30%] flex items-end justify-center">
          <div className="mb-[20px] vw:mb-[1.333vw]">
            <div className="rounded-[10px] vw:rounded-[0.666vw] vw:p-[0.666vw] p-[10px] w-[150px] h-[110px] vw:w-[20vw] vw:h-[8.666vw] bg-[#00000075]">
              <div className="text-center text-[10px] vw:text-[0.8vw] leading-[17px] vw:leading-[1.133vw] mb-[10px] vw:mb-[0.666vw] text-[#fff]">
                <div>หากรถได้รับความเสียหาย</div>
                <div>ส่วนที่เสียหายจะเปลี่ยนเป็นสีแดง</div>
              </div>

              <div className="flex flex-row">
                <div className="w-1/3 text-center">
                  <div className="w-[80%] inline-block">
                    <Car id="1" frontLeftErr />
                  </div>
                </div>
                <div className="w-1/3 text-center">
                  <div className="w-[80%] inline-block">
                    <Car id="2" frontLeftErr frontRightErr rearLeftErr rearRightErr />
                  </div>
                </div>
                <div className="w-1/3 text-center">
                  <div className="w-[80%] inline-block">
                    <Car id="3" frontLeftErr frontRightErr rearLeftErr rearRightErr fullErr />
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
  )

  /*return (
    <div className="w-full h-full min-w-[800px] min-h-[600px] overflow-auto">
      <img src={bg} className="w-screen h-screen object-cover" />
    </div>
  )*/
}

export default App
