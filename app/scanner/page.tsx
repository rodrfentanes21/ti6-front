'use client'
import axios from 'axios';
import ArrowBack from '@/components/ArrowBack';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [file, setFile] = useState("");
	const [fileReq, setFileReq] = useState();
	const [brainStatus, setBrainStatus] = useState("");
    function handleChange(e:any) {
		setFileReq(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }

	function handleSubmit(e: any) {
		e.preventDefault();
	
		const formData = new FormData();
		formData.append("file", fileReq);
	
		const options = {
		  method: "POST",
		  url: "https://ti6-model.azurewebsites.net/api/HttpTrigger",
		  params: {
			code: "nDIy0JkKQy-q0OOkkCdHcFljLp-qEwBWH1Aj_cEzfw1lAzFuURXTgw==",
		  },
		  headers: {
			"Content-Type": "multipart/form-data",
		  },
		  data: formData,
		};

	
		axios
		  .request(options)
		  .then(function (response) {
			setBrainStatus(response.data);
		  })
		  .catch(function (error) {
			console.error(error);
		  });
	  }
	  
	  function descriptionFiltering(text: string) {
		if (text === 'MildDemented') {
			text = 'Cérebro levemente afetado'
		}
		if (text === 'ModerateDemented') {
			text = 'Cérebro moderadamente afetado'
		}
		if (text === 'NonDemented') {
			text = 'Cérebro não afetado'
		}
		if (text === 'VeryMildDemented') {
			text = 'Cérebro muito levemente afetado'
		}
		return text;
	  }

	return (
		<>
      <ArrowBack />
      <div className="w-full h-screen">
	  <form className="w-full h-[90vh] flex justify-center items-center flex-col" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} className="block w-96 text-sm border-none text-white border rounded-lg cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 focus:outline-none" aria-describedby="file_input_help"/>
        {file ? (
			<>
          		<Image src={file} alt="uploaded image" width={400} height={400} />
		  		<button type="submit" onSubmit={handleSubmit} className='bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 transition-all bg-size-200 bg-pos-0 duration-500 hover:bg-pos-100 text-black text-lg font-light rounded-lg px-5 py-1 select-none'>Enviar</button>
			</>
        ) : (
          ""
        )}
      </form>
	  <div className="text-center text-3xl">{descriptionFiltering(brainStatus)}</div>
	  </div>
    </>
	);
}
