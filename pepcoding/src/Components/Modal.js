import React from 'react';
import {useParams} from 'react-router-dom';
const Modal=()=>
{
	console.log(useParams());
	return <h1>Modal - person :{useParams().id}</h1>;
}
export default Modal;