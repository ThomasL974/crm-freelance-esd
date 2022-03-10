import React, { useEffect, useState } from 'react'
import { findAll } from '../services/invoices.service'
function InvoiceList() {
    const [invoices, setInvoices] = useState([])
    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = async () => {
        try {
            const data = await findAll()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Amount</th>
                        <th colSpan="2">Status</th>
                        <th colSpan="2">Company name</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => (
                        <tr>
                            <td colSpan="2">{invoice.amount}</td>
                            <td colSpan="2">{invoice.status}</td>
                            <td colSpan="2">{invoice.customer.companyName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default InvoiceList