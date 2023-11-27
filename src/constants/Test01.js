import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { APIKEY } from './apidata';


export default function Test01(){

        axios
        .get('http://openapi.foodsafetykorea.go.kr/api/419cf02bcbf849288b6f/COOKRCP01/json/1/5')
        .then((response)=>console.log(response.data))
        .catch(console.log);
 

   
}