import React from 'react'
import '../tailwind/output.css'
import bg from './assets/bg-car.jpg'
import logo from './assets/logo-game.png'
import map from './assets/map.jpg'
import fuel from './assets/fuel.png'
import tool from './assets/tool.png'
import carGood from './assets/car-good.svg'




const Mile: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="37 -5 120 100" width="100%" height="100%">
      <path 
        className="stroke-[#91919a] stroke-[5px]" 
        d="M55,90A55,55 0 1,1 140,90" 
        style={{ 
          fill: 'none', 
          strokeLinecap: 'round' 
        }}
      />

      <path 
        className="stroke-[#07befa] stroke-[5px]" 
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
    <div className="w-full h-full relative">
      <Mile />

      <div className="text-center absolute top-[35px] left-0 right-0 text-[#fff] pl-[28px] pr-[28px]">
        <div className="text-[30px]">{props.value}</div>
        <div className="text-[12px] -mt-[5px]">{props.unit}</div>

        <div className="flex flex-row text-[10px]">
          <div className="w-1/3 text-left">{props.min}</div>
          <div className="w-1/3 text-center">
            <img src={props.icon} className="w-[12px] inline" />
          </div>
          <div className="w-1/3 text-right">{props.max}</div>
        </div>

        <div className="h-[5px] w-full bg-[#8e8b7e] rounded-[5px] mt-[5px]">
          <div className="h-[5px] w-1/2 bg-[#5afcab] rounded-[5px]"></div>
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
      
      <div className="h-1/2 flex flex-row">
        <div className="flex items-start justify-end w-full">
          <img src={logo} className="w-[50px] h-auto m-[10px]" />
        </div>
      </div>

      <div className="h-1/2 flex flex-row">
        <div className="w-1/3 flex items-end">
          <img src={map} className="w-[250px] m-[10px] h-auto" />
        </div>

        <div className="w-1/3 flex items-end">
          <div className="mb-[20px]">
            <div className="w-[400px] h-[150px] p-[10px] rounded-t-[100px] rounded-b-[100px] bg-gradient-to-t from-[#0009] flex flex-row">
              <div className="w-1/3">
                <Monitor icon={fuel} value="100" unit="KM/H" min="F" max="E" />
              </div>
              <div className="w-1/3">
                <img src={carGood} />
              </div>
              <div className="w-1/3">
                <Monitor icon={tool} value="2" unit="GEAR" min="H" max="C" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex items-end">
          <div className="mb-[20px]">
            
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
