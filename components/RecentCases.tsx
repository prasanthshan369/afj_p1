import React from 'react';
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import c_1 from '../public/assets/images/case/case-1.png'
import c_2 from '../public/assets/images/case/case-2.png'
import c_3 from '../public/assets/images/case/case-3.png'
const RecentCases = () => {
  return (<section className='csase_studies_sec py-20'>
    <div className="container">
      <Tabs>
        <div className='md:flex-row flex justify-between flex-col mb-12'>
          <h1 className='text-3xl font-semibold text-gray-800'>Recent case studies </h1>
          <TabList className='border-0'>
            <Tab>All</Tab>
            <Tab>selected</Tab>
            <Tab>degitel</Tab>
            <Tab>branding</Tab>
            <Tab>web</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_1} alt="Not found" />
            </div>
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_2} alt="Not found" />
            </div>
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_3} alt="Not found" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_1} alt="Not found" />

            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_3} alt="Not found" />
            </div>
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_2} alt="Not found" />
            </div>
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_1} alt="Not found" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_2} alt="Not found" />
            </div>
            <div className="w-full h-[430px]">
            <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_1} alt="Not found" />

            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
            <div className="w-full h-[430px]">
              <Image className="w-full h-full object-cover shadow-lg rounded-md " src={c_1} alt="Not found" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </section>

  )
}

export default RecentCases