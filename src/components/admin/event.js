import TabsUnstyled from '@mui/base/TabsUnstyled';
import { Tab, TabPanel, TabsList} from './styled'
import React, { useContext, useEffect, useState } from "react";
import { Context } from '../context/context';
import { Button } from '@mui/material';

const AdminEvent = () =>{
    const {link} = useContext(Context);
    const [events, setEvents] = useState({ fetched: false, error: false, data:[]})
    useEffect(() =>{
        fetch(`${link}/events`)
        .then(response => response.json())
        .then(result => {
            if(result.data){
              setEvents({fetched: true, data: result.data})
              return
            }  
            alert('E`lonlar kelishida xatolik')
          })
          .catch(() => setEvents({ error: true, fetched: false }));
    }, [])

    console.log(events);
    return(
        <div className="admin__event__wrapper mt-2">
            <TabsUnstyled aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
                <TabsList>
                    <Tab>Kutilmoqda</Tab>
                    <Tab>Qabul qilingan</Tab>
                    <Tab>Rad etilgan</Tab>
                </TabsList>
                <TabPanel value={0}>
                 <h2 className='await__event__title'>Eng so’ngi xabarnomalar</h2>
                 <div className='admin__events__list'>
                    <div className='admin__events__item'>
                        <div className='admin__events__left'>
                            <h2>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h2>
                            <div className='admin__events__controller mt-2'>
                                <span>Abbos Janizakov</span>
                                <span>+998 90 123-45-67</span>
                                <span>30/01/2022</span>
                                <span>15:00</span>
                                <span>UI/UX dizayner</span>
                            </div>
                        </div>
                        <div className='admin__events__right'>
                            <Button variant="outlined">Bekor qilish</Button>
                            <Button variant="contained">Tasdiqlash</Button>
                        </div>
                    </div>
                    <div className='admin__events__item'>
                        <div className='admin__events__left'>
                            <h2>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h2>
                            <div className='admin__events__controller mt-2'>
                                <span>Abbos Janizakov</span>
                                <span>+998 90 123-45-67</span>
                                <span>30/01/2022</span>
                                <span>15:00</span>
                                <span>UI/UX dizayner</span>
                            </div>
                        </div>
                        <div className='admin__events__right'>
                            <Button variant="outlined">Bekor qilish</Button>
                            <Button variant="contained">Tasdiqlash</Button>
                        </div>
                    </div>
                 </div>
                </TabPanel>
                <TabPanel value={1}>
                    <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                    <b>Third</b> tab panel
                </TabPanel>
            </TabsUnstyled>
        </div>
    )
}

export default AdminEvent