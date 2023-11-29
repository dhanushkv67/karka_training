import { faTrash, faEdit, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ChatRoom = () => {
  const [msg, setMsg] = useState('');
  const [details, setDetails] = useState([]);
  const [editMsg, setEditMsg] = useState({ index: null, bool: false });
  const [editValbool, setEditValBool] = useState(false);
  const [infoPopup,setInfoPopup] =useState(false)

  const location = useLocation();
  const data = location.state;
  const date = new Date(); 
  const options = { timeZone: 'Asia/Kolkata', timeStyle: 'short' };
  const indianTime = date.toLocaleTimeString('en-US', options);
  const formatedDate = date.toLocaleDateString();
 

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem('chat'));
    if (messages) {
      setDetails(messages);
    }
  }, []);

  useEffect(()=>{
    if(details.length>0){
        setDetails((prev)=>{
            return prev.map((info)=>{
                if(info.seenby && !info.seenby.some(nam=>(nam.name==data.firstname))){
                    return {...info,seenby:[...info.seenby,{name:data.firstname,time:indianTime}]}
                }else{
                    return info
                }
            })
        })
    }
  })
  
  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleClick() {
    setDetails((prev) => {
      const id = prev.length ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          name: data.firstname,
          message: msg,
          color: data.color,
          time: indianTime,
          id: id,
          seenby: [],
        },
      ];
    });
    setMsg('');
  }

  function handleEditval() {
    setDetails((prev) =>
      prev.map((data) =>
        data.id === editMsg.index ? { ...data, message: msg } : data
      )
    );
    setEditValBool(false);
    setEditMsg({ index: null, bool: false });
    setMsg('');
  }

  useEffect(() => {
    if (details.length > 0) {
      localStorage.setItem('chat', JSON.stringify(details));
    }
  }, [details]);

 
  return (
    <div className='p-5 bg-light bg-opacity-25 login'>
      <div className='bg-dark mx-auto rounded p-2' style={{ width: '40%' }}>
        <h1 className='text-light text-center bg-info bg-opacity-75 rounded'>
          ChatRoom
        </h1>
        <div className='overflow-auto' style={{ height: '80vh' }}>
          <p className='text-light text-center'>{formatedDate}</p>
          {infoPopup && (
            <div
              className='bg-info bg-opacity-75 p-3 rounded pop'
              style={{
                position: 'absolute',
                left: '750px',
                top: '200px',
                minHeight: '100px',
                width: '200px',
                color:"white",
              }}
            >
              <span className='text-dark fs-4'>seen by:</span>
              {details.map((info) => {
                
                if (info.id === editMsg.index+1) {
                  return info.seenby.map((data) =>( <div className='d-flex justify-content-between'>
                    <span className=''>{data.name}</span>
                    <span  className='' >{data.time}</span>
                    </div>));
                }
              })}
            </div>
          )}
          <div>
            {details.map((datas, index) => {
              return (
                <div className={datas.name === data.firstname && 'text-end'}>
                  {datas.name === data.firstname &&
                    editMsg.bool &&
                    editMsg.index === index && (
                      <ModifyMsg
                        data={datas}
                        setDetails={setDetails}
                        setEditMsg={setEditMsg}
                        setMsg={setMsg}
                        setEditValBool={setEditValBool}
                        setInfoPopup={setInfoPopup}
                      />
                    )}
                  <div
                    className='bg-secondary m-2 '
                    style={
                      datas.name === data.firstname
                        ? {
                            display: 'inline-block',
                            borderRadius: '0px 15px 0 15px',
                          }
                        : {
                            display: 'inline-block',
                            borderRadius: '15px 0 15px 0',
                          }
                    }
                    onClick={(e) =>
                      setEditMsg({
                        index: index,
                        bool: !editMsg.bool,
                      })
                    }
                  >
                    <span
                      className={
                        datas.color +
                        ' ' +
                        'm-2 fw-bold bg-light rounded d-block bg-opacity-75 text-center'
                      }
                    >
                      {datas.name}
                    </span>
                    <p
                      className='text-light m-2 mb-0 mx-4'
                      style={{
                        maxWidth: '200px',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {datas.message}
                    </p>
                    <span className='text-end d-block'>{datas.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='d-flex'>
          <input
            onChange={handleChange}
            className='p-0 m-0'
            value={msg}
          ></input>
          <button
            onClick={editValbool ? handleEditval : handleClick}
            className='btn btn-secondary '
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default ChatRoom;


function ModifyMsg({ data, setDetails, setEditMsg, setMsg, setEditValBool,setInfoPopup }) {

    function handleDelt(data, setDetails, setEditMsg) {
        setDetails((prev) => prev.filter((info) => info.id !== data.id));
        setEditMsg(false);
      }
    
      function handleEditMsg(data, setDetails, setMsg, setEditMsg, setEditValBool) {
        setMsg(data.message);
        setEditValBool(true);
        setEditMsg({ index: data.id, bool: false });
      }
    
    return (
      <div className='d-flex justify-content-end'>
        <div className='bg-info w-25 bg-opacity-75 rounded px-3 me-2 transition' >
          <FontAwesomeIcon
            icon={faTrash}
            className='mx-2'
            onClick={() => handleDelt(data, setDetails, setEditMsg)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faEdit}
            className='mx-2'
            onClick={() =>
              handleEditMsg(data, setDetails, setMsg, setEditMsg, setEditValBool)
            }
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className='mx-2'
            onClick={() => setInfoPopup((prev)=>(!prev))}
          ></FontAwesomeIcon>
        </div>
      </div>
    );
  }

