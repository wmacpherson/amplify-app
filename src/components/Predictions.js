import { Card, Grid, Table, TableCell, TableHead, TableRow, TableFoot } from "@aws-amplify/ui-react";
import { DataStore } from '@aws-amplify/datastore';
import { Prediction } from '../models';
import React, { useState } from 'react';

export function ShowPredictions(){
    const [items, setItems] = useState([]);
    async function GetPredictions(){
        try {
            const posts = await DataStore.query(Prediction);
            setItems(posts)
          } catch (error) {
            console.log("Error retrieving posts", error);
          }
    }
    GetPredictions()
    return(
        <Card className="prediciton-card">
            <Table variation="elevated">
                <TableHead>
                    <TableRow>
                        <TableCell>Stock Name</TableCell>
                        <TableCell>Stock Symbol</TableCell>
                        <TableCell>Initial Price</TableCell>
                        <TableCell>Initial Date</TableCell>
                        <TableCell>Prediciton Price</TableCell>
                        <TableCell>Prediciton Date</TableCell>
                    </TableRow>
                </TableHead>
                {items.map((data, key) => (
                    <TableRow key={key}>
                        <TableCell>{data.stock} </TableCell>
                        <TableCell>{data.stock_ticker}</TableCell>
                        <TableCell>{data.initial_price}</TableCell>
                        <TableCell>{data.initial_date}</TableCell>
                        <TableCell>{data.prediction_price}</TableCell>
                        <TableCell>{data.prediction_date}</TableCell>
                    </TableRow>
                ))}
                <TableFoot></TableFoot>
            </Table>
        </Card>
    )
}