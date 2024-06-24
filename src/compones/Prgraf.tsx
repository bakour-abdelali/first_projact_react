import React, { ReactNode, useState } from 'react';
import '../styles.css';
import { IUserData } from '../interfaces/user_data';
import { inputData } from '../data/input_data';

interface PrgrafProps {
user: IUserData;
setUser: React.Dispatch<React.SetStateAction<IUserData>>;
setLoding:React.Dispatch<React.SetStateAction<boolean>>;
login:boolean

}

const Prgraf = ({user,setUser ,setLoding,login }: PrgrafProps) => {
  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: 'white',
  };

  const containerStyle = {
    marginBottom: '20px',
  };



  const onHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user)
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value
    });
  };


  return (
    <>
    {
      inputData.map((e,index)=>(
        <div className="input-container" style={containerStyle} key={index}>
        <label htmlFor={e.label} className="input-label" style={labelStyle}>{e.label}</label>
        <input
          type="text"
          value={user[e.name]}
          name={e.name}
          id={e.id}
          className="styled-input"
          style={inputStyle}
          onChange={onHandling}
        />
      </div>
      ))
    }
     
      <button onClick={() => setLoding(!login)}>Login</button>
    </>
  );
};

export default Prgraf;
