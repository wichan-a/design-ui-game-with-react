import React, {useState} from 'react'
import './App.css'
import '../tailwind/output.css'
import {debugData} from "../utils/debugData"
import {fetchNui} from "../utils/fetchNui"

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

interface ReturnClientDataCompProps {
  data: any
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({data}) => (
  <>
    <h5>Returned Data:</h5>
    <pre className="bg-[#2c3e50] px-0 pt-[12px] pb-[14px] uvw:pt-[0.8vw] uvw:pb-[0.93vw] leading-[140%]">
      <code>
        {JSON.stringify(data, null)}
      </code>
    </pre>
  </>
)

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null)

  const handleGetClientData = () => {
    fetchNui<ReturnData>('getClientData').then(retData => {
      console.log('Got return data from client scripts:')
      console.dir(retData)
      setClientData(retData)
    }).catch(e => {
      console.error('Setting mock data due to error', e)
      setClientData({ x: 500, y: 300, z: 200})
    })
  }

  return (
    <div className="text-center h-full flex justify-center items-center text-[18px] uvw:text-[1.2vw]">
      <div className="w-[500px] h-[400px] uvw:w-[33.33vw] uvw:h-[26.66vw] rounded-[10px] uvw:rounded-[0.666vw] flex justify-center items-center bg-[#282c34] text-[#ffffff]">
        <div>
          <h1>This is the NUI Popup!</h1>
          <p>Exit with the escape key</p>
          <button 
            className="my-[15px] p-[15px] bg-gray-400 hover:bg-gray-600" 
            onClick={handleGetClientData}>
            Get Client Data
          </button>
          { clientData && <ReturnClientDataComp data={clientData} /> }
        </div>
      </div>
    </div>
  )
}

export default App
