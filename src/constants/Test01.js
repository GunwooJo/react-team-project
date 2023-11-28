import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { APIKEY } from './apidata';


export default function Test01(){

        let list = new Array();
        axios
        .get('https://openapi.foodsafetykorea.go.kr/api/419cf02bcbf849288b6f/COOKRCP01/json/1/5/',{
                params:{
                        URL: 'RCP_PAT2=%EB%B0%98%EC%B0%AC'
                }
        })
        .then((response)=>console.log(response.data))
        .catch(console.log);

        
 
       

   
}