
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@aws-amplify/ui-react';
import "../css/Asset_Search.css"
import axios from 'axios'

export function GraphSearch(){
    var stockData
    const [symbol, setSymbol] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("running")
        console.log(symbol)
        axios('https://query1.finance.yahoo.com/v10/finance/quoteSummary/'+symbol+'?modules=earningsHistory')
            .then((response) => {
                stockData=(response.data);
                setError(null);
            })
            .then(setSymbol(""))
            .then(console.log(stockData))
            .catch(setError);
        if (error) return <p>An error occurred</p>
        return(<p>{stockData}</p>)
      }

    return (
        <Grid>
        <form onSubmit={handleSubmit} >
            <label>Search:</label>
            <TextField
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
            />
            <Button type='submit'>Load Stock Data</Button>
        </form>
        </Grid>
      );}



    //   var data=JSON.parse(stock)
    //   alert(data.historical);
    //   return(
    //       <LineChart width={600} height={300} data={data.historical} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    //         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    //         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //         <XAxis dataKey="date" />
    //         <YAxis datakey="close"/>
    //         <Tooltip />
    //       </LineChart>

    //     );}