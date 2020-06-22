import React, { useState, useCallback, useMemo } from 'react';
import { Row, Modal, ModalHeader, Button, ModalBody, ModalFooter, Table, InputGroupAddon, InputGroup, InputGroupText, Input } from 'reactstrap';
import {  
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    useGroupBy,
    useExpanded,
    useRowSelect 
} from 'react-table';
import moment from 'moment';

const FormTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data});

    return (
        <Table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

const FormPicker = () => {
// const FormPicker = ({ formData }) => { // Faking formData for now
    const [modalOpen, setModalOpen] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    
    const openModal = useCallback(() => setModalOpen(true), [modalOpen]);
    const toggleModal = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);

    // const downloadForm = () => {

    // };

    const columns = useMemo(() => [ // Plan on making howYouFoundUs, firstTrip, and tripRelatedQuestion all available under a participantInfo dropdown
        { 
            Header: 'Participant Info',
            columns: [{
                Header: 'First Name',
                accessor: 'firstName'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
            {
                Header: 'email',
                accessor: 'email'
            },
            {
                Header: 'Phone Number',
                accessor: 'phoneNumber'
            },
            {
                Header: 'Class',
                accessor: 'class'
            },
            {
                Header: 'Emergency Contact Name',
                accessor: 'emergencyName'
            },
            {
                Header: 'Emergency Contact Number',
                accessor: 'emergencyNumber'
            }]
        }, {
            Header: 'Medical Info', // Plan on making sexElaborate, medicationElaborate, preexistingConditionsElaborate, and other avaliable under a dropdown
            columns: [{
                Header: 'Sex',
                accessor: 'sex'
            }, {
                Header: 'Insurance Number',
                accessor: 'insuranceNumber'
            },  
            {
                Header: 'Allergies',
                accessor: 'allergies'
            }, {
                Header: 'EpiPen?',
                accessor: 'epiPen'
            }, {
                Header: 'medication',
                accessor: 'medication'
            }, {
                Header: 'Preexisting Conditions',
                accessor: 'preexistingConditions'
            }]
        }
    ], []);

    const formData = [{
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: '2675467901',
            class: 'junior',
            emergencyName: 'Sami Tayah',
            emergencyNumber: '6107893111'
        },
        medicalInfo: {
            insuranceNumber: 1234567890,
            sex: 'male',
            allergies: 'nothing',
            epiPen: 'no',
            medication: 'none',
            preexistingConditions: 'none'
        }
    }, {
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: '2675467901',
            class: 'junior',
            emergencyName: 'Sami Tayah',
            emergencyNumber: '6107893111'
        },
        medicalInfo: {
            insuranceNumber: 1234567890,
            sex: 'male',
            allergies: 'nothing',
            epiPen: 'no',
            medication: 'none',
            preexistingConditions: 'none'
        }
    }, {
        participantInfo: {
            firstName: 'Kevin',
            lastName: 'Tayah',
            email: 'ktayah@yahoo.com',
            phoneNumber: '2675467901',
            class: 'junior',
            emergencyName: 'Sami Tayah',
            emergencyNumber: '6107893111'
        },
        medicalInfo: {
            insuranceNumber: 1234567890,
            sex: 'male',
            allergies: 'nothing',
            epiPen: 'no',
            medication: 'none',
            preexistingConditions: 'none'
        }
    }]

    const data = useMemo(() => formData.map(form => ({
        ...form.participantInfo,
        ...form.medicalInfo
    })), [formData]);
    console.log('data', data);

    return (
    <>
        <Button color='primary' className='m-2' onClick={openModal}>View Participant Forms</Button>
        <Modal autoFocus={false} className='modal' scrollable size='xl' centered keyboard={false} isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Search for a participant form</ModalHeader>
            <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        type='text'
                        placeholder='Search for a item via any of the column values'
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </InputGroup>
                <FormTable columns={columns} data={data} />
            </ModalBody>
            <ModalFooter>
                <Button color='primary'>Download all forms</Button>
                <Button color='light'>Download selected form</Button>
            </ModalFooter>
        </Modal>
        <style jsx>{`
            .modal {
                width: ;
            }    
        `}</style>
    </>
    )
}

export default FormPicker;