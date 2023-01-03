import React, { useState, useEffect } from 'react';
import { Card, ScrollView, TextField, Table, TableHead, TableCell, TableRow, TableFoot} from '@aws-amplify/ui-react';
import * as Papa from 'papaparse';
import "../css/Asset_Search.css"
import { GraphSearch } from './Graph_Search';


function Asset_Search(){
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["Name", "Symbol"]);

    useEffect(() => {
        fetch( './nasdaq_screener.csv' )
        .then( response => response.text() )
        .then( responseText => {
            Papa.parse(responseText, {
                    header: true,
                    complete: results => {
                    setItems(results.data)
                },
            });
        });
    }, []);
     
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    return (
        <Card variation="elevated">
            <div>
                <label htmlFor="search-form">
                    <TextField
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for Stocks..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </label>
            </div>
                <ScrollView className="my-scrollview" >
                <Table caption="" highlightOnHover={true} variation="elevated">
                    <TableHead>
                        <TableRow>
                        <TableCell as="th">Symbol</TableCell>
                        <TableCell as="th">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    {search(items).map((item)=> (
                        <TableRow>
                            <TableCell width={"100px"}>{item.Symbol}</TableCell>
                            <TableCell>{item.Name}</TableCell>
                        </TableRow>
                    ))}
                    <TableFoot></TableFoot>
                </Table>
                </ScrollView>
            <GraphSearch />
        </Card>
    );
    }

export default Asset_Search
