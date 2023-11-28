import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { APIKEY } from './apidata';


export default function Test01(){

        let list = new Array();
        axios
        .get('https://openapi.foodsafetykorea.go.kr/api/419cf02bcbf849288b6f/COOKRCP01/json/1/5/RCP_PAT2=반찬')
        .then((response)=>{

              for(var i=0;i<5;i++){
                list[i]=response.data.COOKRCP01.row[i].RCP_WAY2;
                console.log(i)
                console.log(list[i]);
                console.log("첫번째 종류"+list[0]);

              }
                
                
                
        })
        .catch(console.log);

        
        
       

   
}