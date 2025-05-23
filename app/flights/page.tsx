// This is the main page for the flights listing
// It will be used to display the list of flights
// import trippers1 from '../../public/img/tripperslogo1.png'
// import trippers2 from '../../public/img/tripperslogo2.png'
import flight from '../../public/img/TakeOff.png'
import tours from '../../public/img/Tour-bus.png'
import hotels from '../../public/img/Hotel-Star.png'
import events from '../../public/img/Event-star.png'
import dorian from '../../public/img/Dorian-building.png'
import dial from '../../public/img/Contact-dial.png'
import deals from '../../public/img/Deals-box.png'
import moro from '../../public/img/Morocco.png'
import plane from '../../public/img/Flights.png'
import hotel from '../../public/img/Hotels.png'
import event from '../../public/img/Eventss.png'
import tour from '../../public/img/Tourss.jpg'
import rec from '../../public/img/Rectangle2.png'
import forw from '../../public/img/Forward.png'
import building from '../../public/img/Newyork.png'
import drop from '../../public/img/Drop-Down.png'
import willing from '../../public/img/TourGuide-image.png'
import cal from '../../public/img/calender.png'
import lender from '../../public/img/calender.png'
import cation from '../../public/img/Location.png'
import ood from '../../public/img/Food.png'
import ar from '../../public/img/Car.png'
import port from '../../public/img/Passport.png'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='w-[1280px] h-[1676px] border-0 bg-[#FFFFFF]'>
              <div className='flex flex-col font-bold text-2xl space-y-9 w-[192px] h-[368px] border-t border-[#E8E6E6] rounded-2xl absolute top-[116px] left-[76px] bg-[#F9F8F8]'>
                  <h1 className='text-3xl ml-7 mt-5 font-semibold'>Categories</h1>
                  <div className='flex flex-row gap-5'> 
                  <Image src={flight} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 top-22'>Flights</span>
                  </div>
                  <div className='flex flex-row gap-5'> 
                  <Image src={tours} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 top-37'>Tours</span>
                  </div>
                  <div className='flex flex-row gap-5'> 
                  <Image src={hotels} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 top-52'>Hotels</span>
                  </div>
                  <div className='flex flex-row gap-5'> 
                  <Image src={events} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 bottom-17'>Events</span>
                  </div>
              </div>
              <div className='overflow-hidden '>
                  <Image src={dorian} className='w-[348px] h-[368px] absolute top-[116px] left-[314px] inset-0 object-cover' alt="" />
                  <div className='w-[302px] h-[368px] absolute top-[116px] left-[592px] border-0 bg-[#FF6600] rounded-xl'>
                      <span className='text-white text-3xl font-serif absolute top-5 left-8'>Hottest <br />Upcoming <br />Trips</span>
                      <span className='text-white text-2xl absolute top-37 font-serif left-8 tracking-wider'>Be the first to <br />book your next <br /><strong>“Unforgettable Adventure”</strong></span>
                  </div>
              </div>
              <div className='w-[192px] h-[158px] flex flex-col font-bold text-1xl space-y-7 border-t border-[#E8E6E6] rounded-2xl absolute top-[116px] left-[946px] bg-[#F9F8F8]'>
              <div className='flex mt-3 flex-row'> 
                  <Image src={dial} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11'>Contact us:</span>
                  </div>
                  <div className='flex flex-row gap-5'> 
                  <Image src={deals} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 top-16'>Best Deals</span>
                  </div>
                  <div className='flex flex-row gap-5'> 
                  <Image src={tours} className='h-[24px] w-[24px] ' alt="" />
                  <span className='absolute left-11 top-29'>Be a Tour Guide</span>
                  </div>
              </div>
              <div className='w-[192px] h-[162px] border-0 bg-[#FF6600] absolute left-[946px] top-[315px] rounded-xl py-7 text-center'>
                  <span className='font-bold text-white text-2xl'>Get 10% off on your first trip with us</span>
              </div>
              <div className='flex flex-row w-[1064px] h-[191px] absolute top-[519px] left-[79px] border-0 bg-[#D9D9D9] pt-5 pl-7 gap-10'>
                  <div className='w-[147px] h-[133px] border-0 bg-[#FF6600]'>
                      <span className='text-2xl text-white absolute top-15 left-12'>Categories</span>
                      <span className='absolute ml-10 bottom-2 text-sm'>Categories</span>
                  </div>
                  <div className='w-[147px] h-[133px] border-0 bg-[#FF660066]'>
                      <Image src={moro} alt="" />
                      <span className='text-white absolute top-20 ml-3 font-semibold'>Explore Morocco</span>
                      <span className='text-[8px]'>Discover vibrant souks, majestic <br />deserts, and rich culture of Morocco in this unforgettable
                      adventure.</span>
                  </div>
                  <Image className='w-[147px] h-[133px]' src={plane} alt="" />
                  <Image className='w-[147px] h-[133px]' src={hotel} alt="" />
                  <Image className='w-[147px] h-[133px]' src={event} alt="" />
                  <Image className='w-[147px] h-[133px]' src={tour} alt="" />
              </div>
              <div className='w-[1052px] h-[919px] absolute top-[757px] left-[83px] bg-[#D9D9D9]'>
                  <Image src={rec} alt="" />
                  <span className='font-bold text-white text-2xl absolute top-5 left-15'>December 2025 <span className='font-light'>Flights</span></span>
                  <span className='text-white text-xl absolute right-20 top-5'>See All</span>
                  <Image className='absolute right-14 top-7 w-[16px]' src={forw} alt="" />
              </div>
              <div className='flex flex-row'>
                  <div className='w-[228px] h-[245.77px] absolute top-[1112px] left-[108px] bg-white  rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1112px] left-[370px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1112px] left-[630px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1112px] left-[890px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
              </div>
              <div className='flex flex-row'>
                  <div className='w-[228px] h-[245.77px] absolute top-[849px] left-[108px] bg-white  rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[849px] left-[370px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[849px] left-[630px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[849px] left-[890px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
              </div>
              <div className='flex flex-row'>
                  <div className='w-[228px] h-[245.77px] absolute top-[1375px] left-[108px] bg-white  rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1375px] left-[370px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1375px] left-[630px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
                  <div className='w-[228px] h-[245.77px] absolute top-[1375px] left-[890px] bg-white rounded-[7.11px]'>
                      <Image src={building} className='h-[101.86px] w-[228px]' alt="" />
                      <h1 className='text-[13px] absolute top-[110.15px] left-[8.21px] font-bold '>Stone Town Tour</h1>
                      <span className='text-[7px] absolute top-[117px] left-[127px] font-semibold '>Feature:</span>
                      <div className=" border-t w-[13.03px] rotate-90 absolute left-[150.79px] top-[119.52px]"></div> 
                      <Image src={port} className='w-[12px] h-[12px] absolute top-[110px] left-[171px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[168px] text-[#535151] '>Ticket</span>
                      <Image src={ar} className='w-[12px] h-[12px] absolute top-[110px] left-[192px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[188px]  text-[#535151]'>Pickup</span>
                      <Image src={ood} className='w-[12px] h-[12px] absolute top-[110px] left-[213px] ' alt="" />
                      <span className='text-[5px] absolute top-[124px] left-[212px] text-[#535151] '>Food</span>
                      <Image src={cation} className='w-[12px] h-[12px] absolute top-[132px] left-[8px] ' alt="" />
                      <span className='text-[11px] absolute top-[131.55px] left-[22.06px] text-[#535151] '>Milele Villas, Zanzibar</span>
                      <Image src={lender} className='w-[12px] h-[12px] absolute top-[151.5px] left-[7px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[25.39px] text-[#535151] '>Start: Jun 12, 2025</span>
                      <Image src={cal} className='h-[12px] w-[12px] absolute top-[151px] left-[120px] ' alt="" />
                      <span className='text-[9px] absolute top-[151.5px] left-[138.73px] text-[#535151] '>End: Jun 15, 2025</span>
                      <Image src={willing} className='w-[16px] h-[16px] absolute top-[169px] left-[8px] ' alt="" />
                      <span className='absolute top-[171.63px] left-[25.39px] text-[10px] font-bold'>Tour Guide: <span className='text-[10px] font-semibold'>Jessica Okoro</span></span>
                      <span className='absolute top-[190.36px] left-[9.4px] font-bold text-[9px] text-[#FF3D00]'>Show More</span>
                      <Image src={drop} className='w-[12px] h-[12px] absolute top-[190px] left-[67px] ' alt="" />
                      <span className='absolute top-[213.05px] left-[10.58px] text-[14px] font-bold'>$120</span>
                      <button className='w-[128px] h-[27px] absolute top-[208px] left-[84px] rounded-[22.5px] pr-[20.73px] py-1.0 pl-[20.73px] bg-[#FF3D00] font-bold text-white text-[11px]
                      '>BOOK NOW</button>
                  </div>
              </div>
            </div>
    </>
  )
}

export default page
